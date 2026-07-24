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
  FiDroplet,
  FiThermometer,
  FiAlertCircle,
  FiActivity as FiActivityIcon
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const HealthcareAssistantResume = ({ 
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

  // --- Default item factories for Healthcare Assistant ---
  const defaultExperience = () => ({
    employer: '',
    position: '',
    department: '',
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
  
  const defaultSkill = () => ({
    name: '',
    category: 'clinical',
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
  
  const defaultReference = () => ({
    name: '',
    position: '',
    employer: '',
    email: '',
    phone: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTraining = () => ({
    course: '',
    provider: '',
    dateCompleted: '',
    isEditing: false,
    editIndex: null
  });

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    nhsNumber: '',
    dbsStatus: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    references: [],
    training: []
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
    qualificationDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    certificationText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentReference, setCurrentReference] = useState(defaultReference());
  const [currentTraining, setCurrentTraining] = useState(defaultTraining());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data (UK Healthcare Assistant focused)
  const testimonials = [
    {
      quote: "This builder helped me create a professional healthcare assistant CV that landed me a position in the NHS within two weeks! The UK-specific templates are perfect.",
      metric: "NHS Position in 2 Weeks",
      name: "Sarah J.",
      role: "Healthcare Assistant",
      company: "NHS Trust Hospital"
    },
    {
      quote: "As a newly qualified Healthcare Assistant, this builder made my CV stand out. The skills section is exactly what UK care homes are looking for.",
      metric: "3 Care Home Offers",
      name: "James K.",
      role: "Healthcare Assistant",
      company: "Private Care Home"
    },
    {
      quote: "The free PDF download and UK formatting saved me so much time. Got interviews from multiple NHS Trusts using this CV builder.",
      metric: "4 NHS Interviews",
      name: "Priya M.",
      role: "Senior Healthcare Assistant",
      company: "NHS Foundation Trust"
    }
  ];

  // FAQ Data for Structured Data (UK Healthcare Assistant focused)
  const faqs = [
    {
      question: "Is this healthcare assistant CV builder free for UK job seekers?",
      answer: "Yes, our healthcare assistant CV builder is completely free for UK job seekers. Create, edit, and download your professional CV in NHS-compatible format without any payment required."
    },
    {
      question: "What UK-specific content does this healthcare assistant CV builder include?",
      answer: "Our builder includes UK-specific sections like DBS status, NHS competencies, CQC standards knowledge, NVQ/SVQ qualifications, and UK healthcare terminology expected by NHS and private care employers."
    },
    {
      question: "Can I download my healthcare assistant CV as PDF for NHS applications?",
      answer: "Absolutely! Download your healthcare assistant CV in ATS-friendly PDF format optimized for NHS applications, care home submissions, and UK healthcare recruitment systems."
    },
    {
      question: "What healthcare assistant templates are available for UK job seekers?",
      answer: "We offer professionally designed templates for NHS healthcare assistants, senior HCAs, mental health HCAs, paediatric HCAs, and care home assistants - all formatted for UK job applications."
    },
    {
      question: "Does this builder include NHS values and competencies?",
      answer: "Yes, our builder includes sections specifically for NHS values, core competencies, and the 6Cs of caring (Care, Compassion, Competence, Communication, Courage, Commitment)."
    },
    {
      question: "Can I add my NVQ/SVQ qualifications to the CV?",
      answer: "Yes, our education section is specifically designed for UK qualifications including NVQ Levels 2/3 in Health and Social Care, SVQ qualifications, and other UK-recognized certifications."
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
      qualificationDate: 6,
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
      formData.skills.length > 0 ||
      formData.certifications.length > 0
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

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addReference = createAddFunction('references', currentReference, setCurrentReference, defaultReference, () => currentReference.name.trim() && currentReference.position.trim());
  
  const editReference = createEditFunction('references', setCurrentReference);
  const deleteReference = createDeleteFunction('references');

  const addTraining = createAddFunction('training', currentTraining, setCurrentTraining, defaultTraining, () => currentTraining.course.trim());
  
  const editTraining = createEditFunction('training', setCurrentTraining);
  const deleteTraining = createDeleteFunction('training');

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
            clone.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            
            // Apply custom font sizes
            const name = clone.querySelector(`.${styles.name}`);
            if (name) {
              name.style.fontSize = `${fontSizes.name}pt`;
              name.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            }
            
            const sectionTitles = clone.querySelectorAll(`.${styles.sectionTitle}`);
            sectionTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.sectionTitle}pt`;
              title.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const contactItems = clone.querySelectorAll(`.${styles.contactInfoItem}`);
            contactItems.forEach(item => {
              item.style.fontSize = `${fontSizes.contactInfo}pt`;
              item.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const jobTitles = clone.querySelectorAll(`.${styles.experienceItem} h3`);
            jobTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.jobTitle}pt`;
              title.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const companies = clone.querySelectorAll(`.${styles.company}`);
            companies.forEach(company => {
              company.style.fontSize = `${fontSizes.company}pt`;
              company.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const qualifications = clone.querySelectorAll(`.${styles.educationItem} h3`);
            qualifications.forEach(qual => {
              qual.style.fontSize = `${fontSizes.qualification}pt`;
              qual.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const institutions = clone.querySelectorAll(`.${styles.institution}`);
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
              institution.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const qualificationDates = clone.querySelectorAll(`.${styles.qualificationDate}`);
            qualificationDates.forEach(date => {
              date.style.fontSize = `${fontSizes.qualificationDate}pt`;
              date.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.referenceItem}`);
            regularTexts.forEach(text => {
              text.style.fontSize = `${fontSizes.regularText}pt`;
              text.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const bulletPoints = clone.querySelectorAll(`.${styles.bulletList} li`);
            bulletPoints.forEach(bullet => {
              bullet.style.fontSize = `${fontSizes.bulletText}pt`;
              bullet.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const skills = clone.querySelectorAll(`.${styles.skillsList} li`);
            skills.forEach(skill => {
              skill.style.fontSize = `${fontSizes.skillText}pt`;
              skill.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            const certificationTexts = clone.querySelectorAll(`.${styles.certificationItem}`);
            certificationTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certificationText}pt`;
              cert.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
            });
            
            // Apply the specified font family to all elements
            const allElements = clone.querySelectorAll('*');
            allElements.forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important";
              n.style.fontWeight = 'normal';
              n.style.fontStyle = 'normal';
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'healthcare_assistant'}_cv.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const HealthcareAssistantTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasReferences = formData.references.length > 0;
    const hasTraining = formData.training.length > 0;

    return (
      <div 
        className={styles.healthcareAssistantTemplate}
        style={{ 
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
          color: '#000000'
        }}
      >
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ 
            fontSize: `${fontSizes.name}pt`,
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
            fontWeight: '700'
          }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ 
              fontSize: `${fontSizes.contactInfo}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
            }}><FiMail /> {formData.email}</div>}
            {(formData.email && formData.phone) && <div className={styles.contactSeparator} style={{ 
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
            }}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ 
              fontSize: `${fontSizes.contactInfo}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
            }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator} style={{ 
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
            }}>•</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ 
              fontSize: `${fontSizes.contactInfo}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
            }}><FiMapPin /> {formData.address}</div>}
          </div>
          {(formData.nhsNumber || formData.dbsStatus) && (
            <div className={styles.ukSpecificInfo}>
              {formData.nhsNumber && <div className={styles.contactInfoItem} style={{ 
                fontSize: `${fontSizes.contactInfo}pt`,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
              }}>NHS Number: {formData.nhsNumber}</div>}
              {formData.dbsStatus && <div className={styles.contactInfoItem} style={{ 
                fontSize: `${fontSizes.contactInfo}pt`,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
              }}>DBS Status: {formData.dbsStatus}</div>}
            </div>
          )}
        </header>

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ 
              fontSize: `${fontSizes.sectionTitle}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
              fontWeight: '600'
            }}>PROFESSIONAL PROFILE</h2>
            <p className={styles.summaryText} style={{ 
              fontSize: `${fontSizes.regularText}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
            }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ 
              fontSize: `${fontSizes.sectionTitle}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
              fontWeight: '600'
            }}>HEALTHCARE EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ 
                    fontSize: `${fontSizes.jobTitle}pt`,
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
                    fontWeight: '600'
                  }}>{exp.position}</h3>
                  <p className={styles.company} style={{ 
                    fontSize: `${fontSizes.company}pt`,
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
                    fontStyle: 'italic'
                  }}>{exp.employer}{exp.department && ` – ${exp.department}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => (
                    <li key={j} style={{ 
                      fontSize: `${fontSizes.bulletText}pt`,
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
                    }}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ 
              fontSize: `${fontSizes.sectionTitle}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
              fontWeight: '600'
            }}>EDUCATION & QUALIFICATIONS</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ 
                  fontSize: `${fontSizes.qualification}pt`,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
                  fontWeight: '600'
                }}>
                  {edu.qualification}{edu.awardingBody && ` – ${edu.awardingBody}`}
                </h3>
                <p className={styles.institution} style={{ 
                  fontSize: `${fontSizes.institution}pt`,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
                }}>
                  {edu.institution} | 
                  <span className={styles.qualificationDate} style={{ 
                    fontSize: `${fontSizes.qualificationDate}pt`,
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
                    fontStyle: 'italic'
                  }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ 
              fontSize: `${fontSizes.sectionTitle}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
              fontWeight: '600'
            }}>CLINICAL SKILLS & COMPETENCIES</h2>
            <ul className={styles.bulletList}>
              {formData.skills.map((s, i) => (
                <li key={i} style={{ 
                  fontSize: `${fontSizes.bulletText}pt`,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
                }}>{s.name}</li>
              ))}
            </ul>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ 
              fontSize: `${fontSizes.sectionTitle}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
              fontWeight: '600'
            }}>CERTIFICATIONS & TRAINING</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ 
                fontSize: `${fontSizes.certificationText}pt`,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
              }}>
                <strong style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{cert.name}</strong>
                {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                {cert.certificationNumber && ` (Cert #: ${cert.certificationNumber})`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasTraining && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ 
              fontSize: `${fontSizes.sectionTitle}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
              fontWeight: '600'
            }}>RECENT TRAINING</h2>
            <ul className={styles.bulletList}>
              {formData.training.map((t, i) => (
                <li key={i} style={{ 
                  fontSize: `${fontSizes.bulletText}pt`,
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
                }}>
                  {t.course}{t.provider && ` (${t.provider})`}{t.dateCompleted && ` – Completed: ${t.dateCompleted}`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasReferences && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ 
              fontSize: `${fontSizes.sectionTitle}pt`,
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
              fontWeight: '600'
            }}>REFERENCES</h2>
            {formData.references.map((ref, i) => (
              <div key={i} className={styles.referenceItem} style={{ 
                fontSize: `${fontSizes.regularText}pt`,
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
              }}>
                <strong style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{ref.name}</strong> – {ref.position} at {ref.employer}
                {ref.email && <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Email: {ref.email}</div>}
                {ref.phone && <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Phone: {ref.phone}</div>}
              </div>
            ))}
          </section>
        )}
      </div>
    );
  };

  // SINGLE CANONICAL URL - WITHOUT www
  const canonicalUrl = "https://professionalresumefree.com/ats-friendly-healthcare-assistant-resume-builder";

  return (
    <div 
      className={styles.healthcareAssistantResume} 
      lang="en-GB"
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important",
        all: 'initial'
      }}
    >
      <Head>
        <title>Free Healthcare Assistant CV Builder UK | NHS Templates 2026</title>
        <meta name="title" content="Free Healthcare Assistant CV Builder UK | NHS Templates 2026" />
        <meta name="description" content="Create your NHS-compliant healthcare assistant CV for free in 2026. UK-specific templates for NHS, care homes, and private healthcare. Download PDF instantly." />
        <meta name="keywords" content="healthcare assistant CV UK, NHS CV builder, care assistant resume, UK healthcare CV, NHS jobs, healthcare assistant template, free CV builder UK, healthcare CV download" />
        <meta name="author" content="UK Healthcare Assistant CV Builder" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* SINGLE CANONICAL URL - WITHOUT www */}
        <link rel="canonical" href={canonicalUrl} />
        
        <meta property="og:title" content="Free Healthcare Assistant CV Builder UK | NHS Templates 2026" />
        <meta property="og:description" content="Create your NHS-compliant healthcare assistant CV for free in 2026. UK-specific templates for NHS, care homes, and private healthcare." />
        <meta property="og:image" content="https://professionalresumefree.com/images/og-healthcare-assistant-cv-builder.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Healthcare Assistant CV Builder for UK Job Seekers" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="UK Healthcare Assistant CV Builder" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Healthcare Assistant CV Builder UK | NHS Templates 2026" />
        <meta name="twitter:description" content="Create your NHS-compliant healthcare assistant CV for free in 2026. UK-specific templates for NHS, care homes, and private healthcare." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-healthcare-assistant-cv-builder.jpg" />
        <meta name="twitter:image:alt" content="Free Healthcare Assistant CV Builder for UK Job Seekers" />
        <meta name="theme-color" content="#005EB8" />
        <meta name="msapplication-TileColor" content="#005EB8" />
        
        {/* Add global styles to override everything */}
        <style>{`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          
          .${styles.healthcareAssistantResume} * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          
          .${styles.resumePreview} * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          
          input, textarea, select, button {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `}</style>
        
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
                  "name": "Free Healthcare Assistant CV Builder UK | NHS-Compliant Templates 2026",
                  "description": "Create professional NHS-compliant healthcare assistant CVs for free. UK-specific templates for NHS, care homes, and private healthcare.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-GB",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "UK Healthcare Assistant CV Builder",
                    "description": "Free online CV builder for UK healthcare assistants",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://professionalresumefree.com/#organization",
                      "name": "UK Healthcare Assistant CV Builder",
                      "url": "https://professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      }
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/images/og-healthcare-assistant-cv-builder.jpg",
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
                        "name": "Healthcare Assistant CV Builder",
                        "item": canonicalUrl
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Healthcare Assistant CV Builder - NHS Compliant CV Maker",
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
                      "ratingCount": 25630,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online NHS-compliant healthcare assistant CV builder for UK job seekers. Create professional CVs for NHS, care homes, and private healthcare positions.",
                    "featureList": [
                      "NHS-Compliant Templates",
                      "UK Healthcare Terminology",
                      "DBS & Compliance Sections",
                      "One-Click PDF Download",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://professionalresumefree.com/images/screenshot-cv-builder.jpg",
                    "applicationSuite": "UK Healthcare Career Tools",
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
                        "name": "Healthcare Assistant CV Support Team"
                      }
                    },
                    "mainEntityOfPage": `${canonicalUrl}#webpage`
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
      <nav className={styles.breadcrumb} aria-label="Breadcrumb" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink} prefetch={false} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              <FiHome className={styles.breadcrumbIcon} />
              <span className={styles.breadcrumbText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>UK Healthcare Assistant CV Builder</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
            <FiChevronRightIcon />
          </li>
          <li>
            <Link href="/ats-friendly-healthcare-assistant-resume-builder" className={styles.breadcrumbLink} prefetch={false} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              <span className={styles.breadcrumbText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>NHS CV Templates</span>
            </Link>
          </li>
        </ol>
      </nav>

      {/* Hero Section - SINGLE H1 TAG */}
      <section className={styles.heroSection} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                 Best Free NHS CV Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              Free Healthcare Assistant CV Builder: Create Yours in 5 Minutes
            </h1>
            
            <p className={styles.heroSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              Create a <strong className={styles.heroHighlight} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>professional, NHS-compliant healthcare assistant CV for free in minutes.</strong> Our UK-specific builder ensures your skills and experience meet NHS and care home employer requirements.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free healthcare assistant CV now—no sign-up required"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
              >
                <span className={styles.buttonText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Build Your Healthcare Assistant CV Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download healthcare assistant CV as PDF"
                disabled={isGeneratingPDF || !hasContent()}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Download CV as PDF</span>
              </button>
            </div>

            

            <div className={styles.ukBadges} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>NHS Healthcare Assistant</span>
                <span className={styles.badgeItem} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Care Home Assistant</span>
                <span className={styles.badgeItem} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Senior HCA</span>
                <span className={styles.badgeItem} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Mental Health HCA</span>
                <span className={styles.badgeItem} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Paediatric HCA</span>
                <span className={styles.badgeItem} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Nursing Home Assistant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.singleColumnLayout} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
        {/* Preview Section */}
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button 
                onClick={() => setShowFullPreview(!showFullPreview)} 
                className={styles.previewButton}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
              >
                <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
              </button>
              <button
                onClick={generatePDF}
                className={styles.downloadButton}
                disabled={isGeneratingPDF || !hasContent()}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
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
                  style={{
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
                  }}
                >
                  <HealthcareAssistantTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'experience', label: 'Experience', icon: <FiHeart /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Skills', icon: <FiActivity /> },
              { id: 'certifications', label: 'Certifications', icon: <FiShield /> },
              { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`${styles.navButton} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setActiveSection(item.id)}
                style={{
                  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important"
                }}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.formContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
            {/* Personal Section */}
            {activeSection === 'personal' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <FiUser /> Personal Information
                </h2>
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Full Name*
                      <input 
                        type="text" 
                        name="fullName" 
                        value={formData.fullName} 
                        onChange={handleInputChange} 
                        placeholder="Sarah Johnson, Healthcare Assistant" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Email*
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        placeholder="sarah.johnson@email.com" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Phone*
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        placeholder="07XXX XXX XXX" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Location*
                      <input 
                        type="text" 
                        name="address" 
                        value={formData.address} 
                        onChange={handleInputChange} 
                        placeholder="London, UK" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      NHS Number (Optional)
                      <input 
                        type="text" 
                        name="nhsNumber" 
                        value={formData.nhsNumber} 
                        onChange={handleInputChange} 
                        placeholder="123 456 7890" 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      DBS Status*
                      <select 
                        name="dbsStatus" 
                        value={formData.dbsStatus} 
                        onChange={handleInputChange} 
                        required 
                        className={styles.formSelect}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      >
                        <option value="">Select DBS Status</option>
                        <option value="Enhanced with Adult Barred List">Enhanced with Adult Barred List</option>
                        <option value="Enhanced with Adult & Child">Enhanced with Adult & Child</option>
                        <option value="Enhanced">Enhanced</option>
                        <option value="Standard">Standard</option>
                        <option value="Basic">Basic</option>
                        <option value="Applied For">Applied For</option>
                        <option value="Willing to Obtain">Willing to Obtain</option>
                      </select>
                    </label>
                  </div>
                </div>

                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                    Professional Profile*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Compassionate and dedicated Healthcare Assistant with 3+ years of experience in NHS and private care settings. Proficient in personal care, patient observation, and clinical support. Committed to delivering high-quality care in accordance with NHS values and CQC standards. Excellent communication skills with proven ability to work effectively in multidisciplinary teams."
                      required
                      className={styles.formTextarea}
                      rows="6"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                    />
                    <div className={styles.characterCount} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      {formData.summary.length}/500 characters
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <FiHeart /> Healthcare Experience
                </h2>
                <p className={styles.sectionDescription} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  List your healthcare positions in reverse chronological order
                </p>
                
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Healthcare Assistant" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Employer*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="NHS Trust / Care Home Name" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                    Department / Ward / Setting
                    <input 
                      value={currentExperience.department} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} 
                      placeholder="Medical Ward / Dementia Care / Community" 
                      className={styles.formInput}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Start Date*
                      <input 
                        type="text" 
                        placeholder="Month Year (e.g., January 2022)" 
                        value={currentExperience.startDate} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      End Date
                      <input 
                        type="text" 
                        placeholder="Month Year or Present" 
                        value={currentExperience.endDate} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                    Key Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Provided personal care to 8-10 patients daily including washing, dressing, and toileting
• Monitored and recorded patient observations (temperature, pulse, blood pressure)
• Assisted with mobility using appropriate equipment and techniques
• Supported registered nurses with clinical procedures and documentation
• Maintained accurate patient records in accordance with GDPR and CQC standards
• Participated in multidisciplinary team meetings and care planning
• Followed infection control protocols and maintained high hygiene standards"
                      required 
                      className={styles.formTextarea} 
                      rows="8"
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                    />
                    <div className={styles.characterCount} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      {currentExperience.description.length}/2000 characters
                    </div>
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addExperience} 
                      className={styles.addButton}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                    >
                      <FiPlus /> {currentExperience.isEditing ? 'Update Experience' : 'Add Experience'}
                    </button>
                    {currentExperience.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentExperience(defaultExperience())} 
                        className={styles.cancelButton}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Your Healthcare Experience</h3>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>No healthcare experience added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.experience.map((exp, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{exp.position}</strong>
                              <span className={styles.itemSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>at {exp.employer}</span>
                            </div>
                            <div className={styles.itemMeta}>
                              <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{exp.startDate} – {exp.endDate || 'Present'}</span>
                              {exp.department && <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{exp.department}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                <p key={j} className={styles.bulletPoint} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>• {line}</p>
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
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <FiBook /> Education & Qualifications
                </h2>
                <p className={styles.sectionDescription} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  List your UK qualifications and training
                </p>
                
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Qualification*
                      <input 
                        value={currentEducation.qualification} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, qualification: e.target.value })} 
                        placeholder="NVQ Level 3 in Health and Social Care" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="City College / Training Provider" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                    Awarding Body
                    <input 
                      value={currentEducation.awardingBody} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, awardingBody: e.target.value })} 
                      placeholder="City & Guilds / Pearson / NCFE" 
                      className={styles.formInput}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Start Date
                      <input 
                        type="text" 
                        placeholder="Month Year" 
                        value={currentEducation.startDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      End Date / Expected
                      <input 
                        type="text" 
                        placeholder="Month Year" 
                        value={currentEducation.endDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addEducation} 
                      className={styles.addButton}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      disabled={!currentEducation.qualification || !currentEducation.institution}
                    >
                      <FiPlus /> {currentEducation.isEditing ? 'Update Qualification' : 'Add Qualification'}
                    </button>
                    {currentEducation.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentEducation(defaultEducation())} 
                        className={styles.cancelButton}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Your Qualifications</h3>
                  {formData.education.length === 0 ? (
                    <p className={styles.emptyMessage} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>No qualifications added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.education.map((edu, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{edu.qualification}</strong>
                              {edu.awardingBody && <span className={styles.itemSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}> – {edu.awardingBody}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{edu.institution}</span>
                              <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{edu.startDate} – {edu.endDate || 'Present'}</span>
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editEducation(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteEducation(i)} className={styles.deleteButton}><FiTrash2 /></button>
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
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <FiActivity /> Clinical Skills & Competencies
                </h2>
                
                {/* Clinical Skills */}
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Clinical Skills</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Add your healthcare skills and competencies</p>
                  <div className={styles.skillsInput}>
                    <select 
                      value={currentSkill.category} 
                      onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                      className={styles.formSelect}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                    >
                      <option value="clinical">Clinical Skills</option>
                      <option value="personal">Personal Care</option>
                      <option value="technical">Technical Skills</option>
                      <option value="communication">Communication</option>
                      <option value="nhs">NHS Values</option>
                    </select>
                    <input 
                      value={currentSkill.name} 
                      onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                      placeholder="e.g., Patient Observations, Personal Care, Infection Control" 
                      className={styles.formInput}
                      style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSkill} 
                        className={styles.addButton}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        disabled={!currentSkill.name.trim()}
                      >
                        <FiPlus /> {currentSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSkill(defaultSkill())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.skillsCategories}>
                    {['clinical', 'personal', 'technical', 'communication', 'nhs'].map(category => {
                      const categorySkills = formData.skills.filter(s => s.category === category);
                      if (categorySkills.length === 0) return null;
                      
                      const categoryTitles = {
                        clinical: 'Clinical Skills',
                        personal: 'Personal Care',
                        technical: 'Technical Skills',
                        communication: 'Communication',
                        nhs: 'NHS Values & Competencies'
                      };
                      
                      return (
                        <div key={category} className={styles.skillCategory}>
                          <h5 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{categoryTitles[category]}</h5>
                          <ul className={styles.skillsList}>
                            {categorySkills.map((skill, i) => (
                              <li key={i}>
                                <span style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{skill.name}</span>
                                <div className={styles.itemActions}>
                                  <button onClick={() => editSkill(formData.skills.indexOf(skill))} className={styles.editButton}><FiEdit2 /></button>
                                  <button onClick={() => deleteSkill(formData.skills.indexOf(skill))} className={styles.deleteButton}><FiTrash2 /></button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                  {formData.skills.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>No skills added yet</p>}
                </div>
              </div>
            )}

            {/* Certifications Section */}
            {activeSection === 'certifications' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <FiShield /> Certifications & Training
                </h2>
                
                {/* Certifications */}
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Certifications</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Add your healthcare certifications and mandatory training</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Moving and Handling" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Issuing Authority
                        <input 
                          value={currentCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                          placeholder="NHS Trust / Training Provider" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Certification Number
                        <input 
                          value={currentCertification.certificationNumber} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, certificationNumber: e.target.value })} 
                          placeholder="CERT123456" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Expiry Date
                        <input 
                          value={currentCertification.expiryDate} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, expiryDate: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addCertification} 
                        className={styles.addButton}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        disabled={!currentCertification.name.trim()}
                      >
                        <FiPlus /> {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                      </button>
                      {currentCertification.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentCertification(defaultCertification())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.certifications.map((cert, i) => (
                      <div key={i} className={styles.listItem}>
                        <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                          <strong style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{cert.name}</strong>
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
                    {formData.certifications.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>No certifications added yet</p>}
                  </div>
                </div>

                {/* Additional Training */}
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Additional Training</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Add recent training courses and workshops</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Course Name*
                        <input 
                          value={currentTraining.course} 
                          onChange={(e) => setCurrentTraining({ ...currentTraining, course: e.target.value })} 
                          placeholder="Dementia Care Training" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Training Provider
                        <input 
                          value={currentTraining.provider} 
                          onChange={(e) => setCurrentTraining({ ...currentTraining, provider: e.target.value })} 
                          placeholder="NHS Trust / External Provider" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Date Completed
                      <input 
                        value={currentTraining.dateCompleted} 
                        onChange={(e) => setCurrentTraining({ ...currentTraining, dateCompleted: e.target.value })} 
                        placeholder="Month Year" 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addTraining} 
                        className={styles.addButton}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        disabled={!currentTraining.course.trim()}
                      >
                        <FiPlus /> {currentTraining.isEditing ? 'Update Training' : 'Add Training'}
                      </button>
                      {currentTraining.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentTraining(defaultTraining())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.training.map((t, i) => (
                      <div key={i} className={styles.listItem}>
                        <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                          {t.course}{t.provider && ` (${t.provider})`}{t.dateCompleted && ` – ${t.dateCompleted}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editTraining(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteTraining(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.training.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>No training added yet</p>}
                  </div>
                </div>

                {/* References */}
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>References</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Add professional references (usually 2 required)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Name*
                        <input 
                          value={currentReference.name} 
                          onChange={(e) => setCurrentReference({ ...currentReference, name: e.target.value })} 
                          placeholder="Dr. James Wilson" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Position*
                        <input 
                          value={currentReference.position} 
                          onChange={(e) => setCurrentReference({ ...currentReference, position: e.target.value })} 
                          placeholder="Senior Nurse / Manager" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Employer*
                        <input 
                          value={currentReference.employer} 
                          onChange={(e) => setCurrentReference({ ...currentReference, employer: e.target.value })} 
                          placeholder="NHS Trust / Care Home" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        Email
                        <input 
                          value={currentReference.email} 
                          onChange={(e) => setCurrentReference({ ...currentReference, email: e.target.value })} 
                          placeholder="reference@email.com" 
                          className={styles.formInput}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                      Phone
                      <input 
                        value={currentReference.phone} 
                        onChange={(e) => setCurrentReference({ ...currentReference, phone: e.target.value })} 
                        placeholder="07XXX XXX XXX" 
                        className={styles.formInput}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                      />
                    </label>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addReference} 
                        className={styles.addButton}
                        style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        disabled={!currentReference.name.trim() || !currentReference.position.trim()}
                      >
                        <FiPlus /> {currentReference.isEditing ? 'Update Reference' : 'Add Reference'}
                      </button>
                      {currentReference.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentReference(defaultReference())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.references.map((ref, i) => (
                      <div key={i} className={styles.listItem}>
                        <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                          <strong style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{ref.name}</strong> – {ref.position} at {ref.employer}
                          {ref.email && <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Email: {ref.email}</div>}
                          {ref.phone && <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Phone: {ref.phone}</div>}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editReference(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteReference(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.references.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>No references added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <FiSettings /> Font Size Settings
                </h2>
                <p className={styles.sectionDescription} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  Customize font sizes for your CV PDF. All sizes are in points (pt).
                </p>
                
                <div className={styles.formCard} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                  <div className={styles.fontSizeGrid}>
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        <span>Institution Names</span>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                        <span>Qualification Dates</span>
                        <span className={styles.fontSizeValue}>{fontSizes.qualificationDate}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="4" 
                        max="12" 
                        value={fontSizes.qualificationDate}
                        onChange={(e) => handleFontSizeChange('qualificationDate', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
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
                    style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
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
      <section className={styles.faqSection} aria-labelledby="faq-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              Frequently Asked Questions
            </h2>
            <p className={styles.sectionSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              Everything you need to know about creating professional healthcare assistant CVs for UK jobs.
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{faq.question}</h3>
                <p className={styles.faqAnswer} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              Ready to Start Your UK Healthcare Career?
            </h2>
            <p className={styles.ctaSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
              Join thousands of healthcare assistants who landed NHS and care home positions with our free UK-specific CV builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free healthcare assistant CV now—no sign-up required"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}
              >
                <span className={styles.ctaButtonText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Create Your Free Healthcare Assistant CV Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>
                No credit card required • Free forever • NHS Compliant • Download in minutes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3 style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important" }}>Full Healthcare Assistant CV Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <HealthcareAssistantTemplate formData={formData} />
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
    { name: 'Healthcare Assistant CV Builder', item: 'https://professionalresumefree.com/ats-friendly-healthcare-assistant-resume-builder' }
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

export default HealthcareAssistantResume;