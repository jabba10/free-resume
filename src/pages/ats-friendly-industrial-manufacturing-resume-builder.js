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
  FiTool,
  FiBook,
  FiSettings,
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
  FiStar,
  FiArrowRight,
  FiClock,
  FiHome,
  FiChevronRight as FiChevronRightIcon,
  FiBriefcase,
  FiTrendingUp,
  FiSearch,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiCpu,
  FiTruck,
  FiPackage,
  FiWatch,
  FiHardDrive,
  FiAnchor,
  FiZap,
  FiDroplet,
  FiThermometer,
  FiGrid,
  FiUsers
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const IndustrialResume = ({ 
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
    company: '',
    position: '',
    department: '',
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    field: '',
    location: '',
    startDate: '',
    endDate: '',
    gpa: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTechnicalSkill = () => ({
    name: '',
    category: 'Mechanical',
    proficiency: 'Advanced',
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
  
  const defaultProject = () => ({
    title: '',
    company: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
    budget: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSoftware = () => ({
    name: '',
    category: 'CAD/CAM',
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

  const defaultSafetyRecord = () => ({
    description: '',
    period: '',
    isEditing: false,
    editIndex: null
  });

  const defaultProfessionalAffiliation = () => ({
    organization: '',
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
    technicalSkills: [],
    certifications: [],
    projects: [],
    software: [],
    languages: [],
    socialLinks: [],
    safetyRecords: [],
    professionalAffiliations: []
  });

  // Font size state - Industrial style (bolder, clearer)
  const [fontSizes, setFontSizes] = useState({
    name: 14, // Bold and prominent
    sectionTitle: 10,
    contactInfo: 7,
    jobTitle: 9,
    company: 8,
    degree: 9,
    institution: 7,
    institutionDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    certificationText: 8,
    projectText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentTechnicalSkill, setCurrentTechnicalSkill] = useState(defaultTechnicalSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentSoftware, setCurrentSoftware] = useState(defaultSoftware());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [currentSafetyRecord, setCurrentSafetyRecord] = useState(defaultSafetyRecord());
  const [currentProfessionalAffiliation, setCurrentProfessionalAffiliation] = useState('');

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data - Industrial focused
  const testimonials = [
    {
      quote: "As a manufacturing engineer, this resume builder helped me highlight my Six Sigma and lean manufacturing experience perfectly. Landed a plant manager role in 3 weeks.",
      metric: "Plant Manager in 3 Weeks",
      name: "Michael R.",
      role: "Manufacturing Engineer",
      company: "General Electric"
    },
    {
      quote: "The industrial-specific templates and technical skill categorization made my maintenance supervisor resume stand out from generic applications.",
      metric: "85% Interview Rate",
      name: "Sarah L.",
      role: "Maintenance Supervisor",
      company: "Caterpillar Inc."
    },
    {
      quote: "Creating a resume that properly showcases my CNC programming and automation experience was effortless. The technical formatting is perfect for industrial roles.",
      metric: "Automation Engineer Role",
      name: "James K.",
      role: "Automation Engineer",
      company: "Siemens"
    },
    {
      quote: "The project management and safety compliance sections were exactly what I needed for my industrial operations manager applications.",
      metric: "Operations Director Position",
      name: "Robert G.",
      role: "Operations Manager",
      company: "Boeing"
    },
    {
      quote: "Finally a resume builder that understands industrial certifications like OSHA, Six Sigma, and PMP. Proper formatting for technical credentials.",
      metric: "Six Sigma Black Belt",
      name: "David T.",
      role: "Quality Manager",
      company: "Toyota"
    },
    {
      quote: "The industrial engineering templates with proper CAD software and technical skill sections helped me transition from academic to industry seamlessly.",
      metric: "Industrial Engineer Position",
      name: "Lisa R.",
      role: "Industrial Engineer",
      company: "Ford Motor Company"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this industrial resume builder free and suitable for manufacturing job applications?",
      answer: "Yes, our industrial resume builder is completely free and optimized for manufacturing, engineering, and industrial job applications. We include industry-specific formatting, technical skill templates, and ATS optimization for industrial hiring systems."
    },
    {
      question: "What makes an industrial resume different from a corporate resume?",
      answer: "Industrial resumes emphasize technical skills, certifications (OSHA, Six Sigma, PMP), project management with budgets, safety records, equipment proficiency, and measurable production improvements. Our builder addresses all these unique industrial requirements."
    },
    {
      question: "Can I use this for engineering and technical job applications?",
      answer: "Absolutely! We include specialized sections for engineering disciplines, CAD software proficiency, technical certifications, project portfolios, and industry-specific terminology for mechanical, electrical, and industrial engineering roles."
    },
    {
      question: "How do I properly format technical skills and certifications?",
      answer: "Our builder includes categorized technical skill sections (Mechanical, Electrical, Software), proper certification formatting with issuing authorities and expiry dates, and industry-standard terminology for industrial credentials."
    },
    {
      question: "Does this builder include safety and compliance sections?",
      answer: "Yes, we offer dedicated safety record sections, OSHA compliance documentation, incident-free periods, and safety certification formatting that are critical for industrial and manufacturing roles."
    },
    {
      question: "Can I highlight production improvements and cost savings?",
      answer: "Our builder includes quantifiable achievement sections with specific metrics for production improvements, cost reductions, efficiency gains, and quality improvements that industrial employers value."
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
      company: 8,
      degree: 9,
      institution: 7,
      institutionDate: 6,
      regularText: 8,
      bulletText: 8,
      skillText: 7,
      certificationText: 8,
      projectText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      github: <FiCpu />,
      portfolio: <FiBriefcase />,
      website: <FiGlobe />,
      researchgate: <FiBook />,
      indeed: <FiSearch />,
      stackoverflow: <FiLayers />
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
      formData.technicalSkills.length > 0 ||
      formData.certifications.length > 0 ||
      formData.projects.length > 0 ||
      formData.software.length > 0 ||
      formData.languages.length > 0 ||
      formData.safetyRecords.length > 0 ||
      formData.professionalAffiliations.length > 0
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.company && currentExperience.startDate);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addTechnicalSkill = createAddFunction('technicalSkills', currentTechnicalSkill, setCurrentTechnicalSkill, defaultTechnicalSkill, () => currentTechnicalSkill.name.trim());
  
  const editTechnicalSkill = createEditFunction('technicalSkills', setCurrentTechnicalSkill);
  const deleteTechnicalSkill = createDeleteFunction('technicalSkills');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.title && currentProject.company);
  
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');

  const addSoftware = createAddFunction('software', currentSoftware, setCurrentSoftware, defaultSoftware, () => currentSoftware.name.trim());
  
  const editSoftware = createEditFunction('software', setCurrentSoftware);
  const deleteSoftware = createDeleteFunction('software');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

  const addSafetyRecord = createAddFunction('safetyRecords', currentSafetyRecord, setCurrentSafetyRecord, defaultSafetyRecord, () => currentSafetyRecord.description.trim());
  
  const editSafetyRecord = createEditFunction('safetyRecords', setCurrentSafetyRecord);
  const deleteSafetyRecord = createDeleteFunction('safetyRecords');

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
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.safetyRecord}`);
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
            
            const projectTexts = clone.querySelectorAll(`.${styles.projectItem} p`);
            projectTexts.forEach(proj => {
              proj.style.fontSize = `${fontSizes.projectText}pt`;
            });
            
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "'Arial', 'Helvetica', sans-serif";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'industrial_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const IndustrialTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasTechnicalSkills = formData.technicalSkills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasSoftware = formData.software.length > 0;
    const hasLanguages = formData.languages.length > 0;
    const hasSafetyRecords = formData.safetyRecords.length > 0;
    const hasProfessionalAffiliations = formData.professionalAffiliations.length > 0;

    return (
      <div className={styles.industrialTemplate}>
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
            {formData.socialLinks.map((link, i) => (
              <div key={i} className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>INDUSTRIAL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>
                    {exp.company}{exp.department && ` • ${exp.department}`} | {exp.location} | {exp.startDate} – {exp.endDate || 'Present'}
                  </p>
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>
                  {edu.degree}{edu.field && ` in ${edu.field}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | {edu.location} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
                {edu.gpa && <p style={{ fontSize: `${fontSizes.regularText}pt` }}><strong>GPA:</strong> {edu.gpa}</p>}
              </div>
            ))}
          </section>
        )}

        {hasTechnicalSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>TECHNICAL COMPETENCIES</h2>
            <div className={styles.skillsGrid}>
              {['Mechanical', 'Electrical', 'Software', 'Manufacturing', 'Quality'].map(category => {
                const categorySkills = formData.technicalSkills.filter(s => s.category === category);
                if (categorySkills.length === 0) return null;
                return (
                  <div key={category} className={styles.skillCategory}>
                    <h4 style={{ fontSize: `${fontSizes.sectionTitle - 1}pt` }}>{category}</h4>
                    <ul className={styles.skillsList}>
                      {categorySkills.map((s, i) => (
                        <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                          {s.name}{s.proficiency && ` (${s.proficiency})`}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {hasSoftware && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SOFTWARE PROFICIENCY</h2>
            <div className={styles.skillsGrid}>
              {['CAD/CAM', 'PLM/ERP', 'Simulation', 'Data Analysis'].map(category => {
                const categorySoftware = formData.software.filter(s => s.category === category);
                if (categorySoftware.length === 0) return null;
                return (
                  <div key={category} className={styles.skillCategory}>
                    <h4 style={{ fontSize: `${fontSizes.sectionTitle - 1}pt` }}>{category}</h4>
                    <ul className={styles.skillsList}>
                      {categorySoftware.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{s.name}</li>)}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & TRAINING</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certificationText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuingAuthority && ` • ${cert.issuingAuthority}`}
                {cert.certificationNumber && ` (#${cert.certificationNumber})`}
                {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>KEY PROJECTS & ACHIEVEMENTS</h2>
            {formData.projects.map((proj, i) => (
              <div key={i} className={styles.projectItem}>
                <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{proj.title}</h3>
                <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>
                  {proj.company} | {proj.role} | {proj.startDate} – {proj.endDate || 'Present'}
                </p>
                {proj.budget && <p style={{ fontSize: `${fontSizes.projectText}pt` }}><strong>Budget:</strong> {proj.budget}</p>}
                <ul className={styles.bulletList}>
                  {proj.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasSafetyRecords && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SAFETY RECORDS</h2>
            {formData.safetyRecords.map((record, i) => (
              <div key={i} className={styles.safetyRecord} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                {record.description}{record.period && ` (${record.period})`}
              </div>
            ))}
          </section>
        )}

        {hasProfessionalAffiliations && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL AFFILIATIONS</h2>
            <ul className={styles.bulletList}>
              {formData.professionalAffiliations.map((affiliation, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{affiliation.organization}</li>
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
        <title>Free Industrial Resume Builder - ATS Friendly Manufacturing & Engineering Templates 2026</title>
        <meta name="title" content="Free Industrial Resume Builder - ATS Friendly Manufacturing & Engineering Templates 2026" />
        <meta name="description" content="Create professional ATS-optimized resumes for industrial, manufacturing, engineering, and technical jobs. Industry-specific templates with technical skill formatting. Free download." />
        <meta name="keywords" content="industrial resume builder, manufacturing resume, engineering resume, technical resume, mechanical resume, electrical resume, plant manager resume, maintenance supervisor resume, industrial engineer resume, ATS friendly industrial resume" />
        <meta name="author" content="Professional Industrial Resume Builder" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free Industrial Resume Builder - ATS Friendly Manufacturing & Engineering Templates 2026" />
        <meta property="og:description" content="Create professional ATS-optimized resumes for industrial, manufacturing, engineering, and technical jobs. Industry-specific templates with technical skill formatting." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-industrial-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Industrial Resume Builder - Create Professional Manufacturing & Engineering Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Industrial Resume Builder" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Industrial Resume Builder - ATS Friendly Manufacturing & Engineering Templates 2026" />
        <meta name="twitter:description" content="Create professional ATS-optimized resumes for industrial, manufacturing, engineering, and technical jobs. Industry-specific templates." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-industrial-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Industrial Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@IndustrialResume" />
        <meta name="twitter:creator" content="@IndustrialResume" />
        <meta name="theme-color" content="#1e3a8a" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&family=Roboto+Mono:wght@400;500&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder",
                  "name": "Free Industrial Resume Builder - ATS Friendly Manufacturing & Engineering Templates 2026",
                  "description": "Create professional ATS-optimized resumes for industrial, manufacturing, engineering, and technical jobs. Industry-specific templates with technical skill formatting.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Industrial Resume Builder",
                    "description": "Free online resume builder for industrial and manufacturing professionals",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Industrial Resume Builder",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/IndustrialResume",
                        "https://www.linkedin.com/company/industrial-resume-builder"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-industrial-resume-builder-preview.jpg",
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
                        "name": "Industrial Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Industrial Resume Builder - ATS Optimized Manufacturing & Engineering Resume Maker",
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
                      "ratingCount": 42850,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly industrial resume builder for manufacturing, engineering, and technical professionals.",
                    "featureList": [
                      "Industrial ATS-Optimized Templates",
                      "Technical Skill Formatting",
                      "Engineering Certification Sections",
                      "Project Portfolio Formatting",
                      "Safety Record Documentation",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-industrial-resume-builder.jpg",
                    "applicationSuite": "Industrial Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Industrial Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Industrial Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized industrial or manufacturing resume for free",
                  "totalTime": "PT20M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "USD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Choose an Industrial Template",
                      "text": "Select from our ATS-optimized industrial resume templates designed for manufacturing, engineering, maintenance, and technical positions.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-industrial-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Industrial Experience",
                      "text": "Add your manufacturing experience, engineering projects, technical skills, certifications, and industrial achievements using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-industrial-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize for Your Industry",
                      "text": "Use our industrial-specific suggestions for technical skills, engineering certifications, safety records, and manufacturing metrics.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Industrial Resume",
                      "text": "Export your professional industrial or manufacturing resume as PDF - completely free, no watermarks, ATS ready.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
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
            <Link href="/ats-friendly-industrial-manufacturing-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free Industrial Template</span>
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
                Trusted by 120,000+ Industrial Professionals | Best Free Industrial Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free Industrial Resume Builder <span className={styles.gradientText}>Manufacturing • Engineering • Technical</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized industrial resume for free.</strong> Our industrial resume builder ensures your technical skills, certifications, and manufacturing experience get noticed by industrial employers.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free industrial resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Industrial Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download industrial resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Industrial Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>120K+</span>
                <span className={styles.statLabel}>Industrial Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>88%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>42%</span>
                <span className={styles.statLabel}>Faster Hiring Process</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8/5</span>
                <span className={styles.statLabel}>Industrial Professional Rating</span>
              </div>
            </div>

            <div className={styles.industryBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiSettings /> Manufacturing</span>
                <span className={styles.badgeItem}><FiTool /> Engineering</span>
                <span className={styles.badgeItem}><FiWatch /> Maintenance</span>
                <span className={styles.badgeItem}><FiCpu /> Automation</span>
                <span className={styles.badgeItem}><FiShield /> Quality Control</span>
                <span className={styles.badgeItem}><FiTruck /> Logistics</span>
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
                  <IndustrialTemplate formData={formData} />
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
              { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
              { id: 'skills', label: 'Skills', icon: <FiTool /> },
              { id: 'projects', label: 'Projects', icon: <FiTarget /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, PE" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@industrial.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Detroit, MI" className={styles.formInput} />
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Results-driven Industrial Engineer with 12+ years of experience in manufacturing optimization, lean production, and process improvement. Expertise in Six Sigma methodologies, CAD/CAM systems, and automation integration. Proven track record of reducing production costs by 25% and increasing efficiency by 40% through systematic process analysis and implementation of lean manufacturing principles. Strong background in project management and cross-functional team leadership."
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
                  <p className={styles.sectionDescription}>Add your professional profiles (LinkedIn, GitHub, portfolio, etc.)</p>
                  <div className={styles.socialInput}>
                    <div className={styles.socialInputRow}>
                      <div className={styles.socialInputSelect}>
                        <select 
                          value={currentSocialLink.platform} 
                          onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="">Select Platform</option>
                          <option value="LinkedIn">LinkedIn</option>
                          <option value="GitHub">GitHub (Code/Projects)</option>
                          <option value="Portfolio">Professional Portfolio</option>
                          <option value="Website">Personal Website</option>
                          <option value="StackOverflow">Stack Overflow</option>
                          <option value="ResearchGate">ResearchGate</option>
                        </select>
                      </div>
                      <div className={styles.socialInputField}>
                        <input 
                          type="url" 
                          placeholder="https://linkedin.com/in/yourprofile" 
                          value={currentSocialLink.url} 
                          onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} 
                          className={styles.formInput} 
                        />
                      </div>
                    </div>
                    <div className={styles.socialInputActions}>
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

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Industrial Experience</h3>
                <p className={styles.sectionDescription}>List your industrial positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Manufacturing Engineer" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input 
                        value={currentExperience.company} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} 
                        placeholder="General Motors" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Department / Division
                      <input 
                        value={currentExperience.department} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} 
                        placeholder="Powertrain Manufacturing" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input 
                        value={currentExperience.location} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })} 
                        placeholder="Flint, MI" 
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
                      placeholder="• Managed production line optimization project resulting in 25% increase in output
• Implemented lean manufacturing principles reducing waste by 30%
• Supervised team of 15 technicians and maintenance staff
• Reduced equipment downtime by 40% through predictive maintenance program
• Led Six Sigma project improving product quality by 15%
• Coordinated installation of $2M automated assembly system"
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
                      disabled={!currentExperience.position || !currentExperience.company || !currentExperience.startDate}
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
                  <h4 className={styles.subSectionTitle}>Your Industrial Experience</h4>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No experience added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.experience.map((exp, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{exp.position}</strong>
                              <span className={styles.itemSubtitle}>at {exp.company}</span>
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                              {exp.location && <span>{exp.location}</span>}
                              {exp.department && <span>{exp.department}</span>}
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

                {/* Safety Records */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiShield /> Safety Records</h4>
                  <p className={styles.sectionDescription}>Add safety achievements, incident-free periods, and compliance records</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Safety Achievement*
                        <input 
                          value={currentSafetyRecord.description} 
                          onChange={(e) => setCurrentSafetyRecord({ ...currentSafetyRecord, description: e.target.value })} 
                          placeholder="Zero lost-time accidents for 5 consecutive years" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Period / Date
                        <input 
                          value={currentSafetyRecord.period} 
                          onChange={(e) => setCurrentSafetyRecord({ ...currentSafetyRecord, period: e.target.value })} 
                          placeholder="2019-2024" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSafetyRecord} 
                        className={styles.addButton} 
                        disabled={!currentSafetyRecord.description.trim()}
                      >
                        <FiPlus /> {currentSafetyRecord.isEditing ? 'Update Record' : 'Add Safety Record'}
                      </button>
                      {currentSafetyRecord.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSafetyRecord(defaultSafetyRecord())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.safetyRecords.map((record, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {record.description}{record.period && ` (${record.period})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSafetyRecord(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSafetyRecord(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.safetyRecords.length === 0 && <p className={styles.emptyMessage}>No safety records added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTool /> Technical Competencies</h3>
                
                {/* Technical Skills by Category */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Technical Skills</h4>
                  <p className={styles.sectionDescription}>Categorize your technical skills for better organization</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentTechnicalSkill.name} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, name: e.target.value })} 
                          placeholder="CNC Programming, PLC Troubleshooting" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Category
                        <select 
                          value={currentTechnicalSkill.category} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, category: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="Mechanical">Mechanical</option>
                          <option value="Electrical">Electrical</option>
                          <option value="Software">Software</option>
                          <option value="Manufacturing">Manufacturing</option>
                          <option value="Quality">Quality</option>
                          <option value="Safety">Safety</option>
                        </select>
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <select 
                          value={currentTechnicalSkill.proficiency} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, proficiency: e.target.value })} 
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
                        onClick={addTechnicalSkill} 
                        className={styles.addButton} 
                        disabled={!currentTechnicalSkill.name.trim()}
                      >
                        <FiPlus /> {currentTechnicalSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentTechnicalSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentTechnicalSkill(defaultTechnicalSkill())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.technicalSkills.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <span>{s.name}</span>
                          <span className={styles.skillCategoryTag}>{s.category}</span>
                          {s.proficiency && <span className={styles.proficiencyTag}>{s.proficiency}</span>}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editTechnicalSkill(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteTechnicalSkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.technicalSkills.length === 0 && <p className={styles.emptyMessage}>No technical skills added yet</p>}
                  </div>
                </div>

                {/* Software Proficiency */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiCpu /> Software Proficiency</h4>
                  <p className={styles.sectionDescription}>List industrial software, CAD systems, and programming tools</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Software Name*
                        <input 
                          value={currentSoftware.name} 
                          onChange={(e) => setCurrentSoftware({ ...currentSoftware, name: e.target.value })} 
                          placeholder="SolidWorks, AutoCAD, MATLAB" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Category
                        <select 
                          value={currentSoftware.category} 
                          onChange={(e) => setCurrentSoftware({ ...currentSoftware, category: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="CAD/CAM">CAD/CAM</option>
                          <option value="PLM/ERP">PLM/ERP</option>
                          <option value="Simulation">Simulation</option>
                          <option value="Data Analysis">Data Analysis</option>
                          <option value="Programming">Programming</option>
                          <option value="Other">Other</option>
                        </select>
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSoftware} 
                        className={styles.addButton} 
                        disabled={!currentSoftware.name.trim()}
                      >
                        <FiPlus /> {currentSoftware.isEditing ? 'Update Software' : 'Add Software'}
                      </button>
                      {currentSoftware.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSoftware(defaultSoftware())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.software.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <span>{s.name}</span>
                          <span className={styles.skillCategoryTag}>{s.category}</span>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSoftware(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSoftware(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.software.length === 0 && <p className={styles.emptyMessage}>No software added yet</p>}
                  </div>
                </div>

                {/* Certifications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiAward /> Certifications & Training</h4>
                  <p className={styles.sectionDescription}>Add industrial certifications, safety training, and professional credentials</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Six Sigma Black Belt" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Authority
                        <input 
                          value={currentCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                          placeholder="ASQ (American Society for Quality)" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Number
                        <input 
                          value={currentCertification.certificationNumber} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, certificationNumber: e.target.value })} 
                          placeholder="SSBB-123456" 
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
                    {formData.certifications.map((cert, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{cert.name}</strong>
                          {cert.issuingAuthority && ` • ${cert.issuingAuthority}`}
                          {cert.certificationNumber && ` (#${cert.certificationNumber})`}
                          {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
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
                          <option value="Professional">Professional Working</option>
                          <option value="Limited">Limited Working</option>
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

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTarget /> Key Projects & Achievements</h3>
                <p className={styles.sectionDescription}>List significant industrial projects, installations, or improvements</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Project Title*
                      <input 
                        value={currentProject.title} 
                        onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })} 
                        placeholder="Automated Assembly Line Installation" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input 
                        value={currentProject.company} 
                        onChange={(e) => setCurrentProject({ ...currentProject, company: e.target.value })} 
                        placeholder="Ford Motor Company" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Your Role
                      <input 
                        value={currentProject.role} 
                        onChange={(e) => setCurrentProject({ ...currentProject, role: e.target.value })} 
                        placeholder="Project Lead, Technical Lead" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Budget / Value
                      <input 
                        value={currentProject.budget} 
                        onChange={(e) => setCurrentProject({ ...currentProject, budget: e.target.value })} 
                        placeholder="$2.5M" 
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
                        value={currentProject.startDate} 
                        onChange={(e) => setCurrentProject({ ...currentProject, startDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      End Date
                      <input 
                        type="text" 
                        placeholder="Month Year or Ongoing" 
                        value={currentProject.endDate} 
                        onChange={(e) => setCurrentProject({ ...currentProject, endDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Project Description & Impact*
                    <textarea 
                      value={currentProject.description} 
                      onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} 
                      placeholder="• Led installation of fully automated assembly line reducing labor costs by 35%
• Integrated robotics system increasing production capacity by 50%
• Coordinated cross-functional team of engineers, technicians, and contractors
• Implemented PLC controls reducing manual intervention by 80%
• Achieved project completion 2 weeks ahead of schedule
• Reduced defect rate from 5% to 0.8% through quality control integration"
                      required 
                      className={styles.formTextarea} 
                      rows="8" 
                    />
                    <div className={styles.characterCount}>
                      {currentProject.description.length}/1500 characters
                    </div>
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addProject} 
                      className={styles.addButton} 
                      disabled={!currentProject.title || !currentProject.company}
                    >
                      <FiPlus /> {currentProject.isEditing ? 'Update Project' : 'Add Project'}
                    </button>
                    {currentProject.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentProject(defaultProject())} 
                        className={styles.cancelButton}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Projects & Achievements</h4>
                  {formData.projects.length === 0 ? (
                    <p className={styles.emptyMessage}>No projects added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.projects.map((proj, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{proj.title}</strong>
                              <span className={styles.itemSubtitle}>at {proj.company}</span>
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{proj.role}</span>
                              <span>{proj.startDate} – {proj.endDate || 'Ongoing'}</span>
                              {proj.budget && <span>{proj.budget}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {proj.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                <p key={j} className={styles.bulletPoint}>• {line}</p>
                              ))}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editProject(i)} className={styles.editButton} aria-label={`Edit ${proj.title} project`}><FiEdit2 /></button>
                            <button onClick={() => deleteProject(i)} className={styles.deleteButton} aria-label={`Delete ${proj.title} project`}><FiTrash2 /></button>
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
                <h3 className={styles.sectionTitle}><FiBook /> Education & Training</h3>
                <p className={styles.sectionDescription}>List your degrees, technical training, and certifications</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="Georgia Institute of Technology" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree/Certification*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Bachelor of Science in Mechanical Engineering" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Field / Major
                      <input 
                        value={currentEducation.field} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })} 
                        placeholder="Mechanical Engineering, Industrial Design" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input 
                        value={currentEducation.location} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, location: e.target.value })} 
                        placeholder="Atlanta, GA" 
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
                        placeholder="Month Year or Expected" 
                        value={currentEducation.endDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    GPA / Honors
                    <input 
                      value={currentEducation.gpa} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, gpa: e.target.value })} 
                      placeholder="3.8/4.0, Magna Cum Laude" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addEducation} 
                      className={styles.addButton} 
                      disabled={!currentEducation.institution || !currentEducation.degree}
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
                  <h4 className={styles.subSectionTitle}>Your Education</h4>
                  {formData.education.length === 0 ? (
                    <p className={styles.emptyMessage}>No education added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.education.map((edu, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{edu.degree}</strong>
                              {edu.field && <span className={styles.itemSubtitle}> – {edu.field}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}</span>
                              <span>{edu.location}</span>
                              <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                            </div>
                            {edu.gpa && <div className={styles.itemDescription}><strong>GPA:</strong> {edu.gpa}</div>}
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

                {/* Professional Affiliations */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiUsers /> Professional Affiliations</h4>
                  <p className={styles.sectionDescription}>Add your professional organization memberships</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentProfessionalAffiliation} 
                      onChange={(e) => setCurrentProfessionalAffiliation(e.target.value)} 
                      placeholder="ASME, IEEE, SME" 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={() => {
                          if (currentProfessionalAffiliation.trim()) {
                            setFormData({
                              ...formData,
                              professionalAffiliations: [...formData.professionalAffiliations, { organization: currentProfessionalAffiliation.trim() }]
                            });
                            setCurrentProfessionalAffiliation('');
                          }
                        }} 
                        className={styles.addButton} 
                        disabled={!currentProfessionalAffiliation.trim()}
                      >
                        <FiPlus /> Add Affiliation
                      </button>
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.professionalAffiliations.map((affiliation, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>{affiliation.organization}</div>
                        <div className={styles.itemActions}>
                          <button 
                            onClick={() => {
                              setFormData({
                                ...formData,
                                professionalAffiliations: formData.professionalAffiliations.filter((_, index) => index !== i)
                              });
                            }} 
                            className={styles.deleteButton}
                          >
                            <FiTrash2 />
                          </button>
                        </div>
                      </div>
                    ))}
                    {formData.professionalAffiliations.length === 0 && <p className={styles.emptyMessage}>No affiliations added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h3>
                <p className={styles.sectionDescription}>Customize font sizes for your industrial resume PDF. Clean, professional fonts recommended for technical applications.</p>
                
                <div className={styles.formCard}>
                  <div className={styles.fontSizeGrid}>
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Name</span>
                        <span className={styles.fontSizeValue}>{fontSizes.name}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="10" 
                        max="20" 
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
                        min="8" 
                        max="14" 
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
                        min="8" 
                        max="14" 
                        value={fontSizes.jobTitle}
                        onChange={(e) => handleFontSizeChange('jobTitle', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Company Names</span>
                        <span className={styles.fontSizeValue}>{fontSizes.company}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
                        value={fontSizes.company}
                        onChange={(e) => handleFontSizeChange('company', e.target.value)}
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
                        min="8" 
                        max="14" 
                        value={fontSizes.degree}
                        onChange={(e) => handleFontSizeChange('degree', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Institution Names</span>
                        <span className={styles.fontSizeValue}>{fontSizes.institution}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
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
                        max="10" 
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
                        max="12" 
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
                        max="12" 
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
                        max="10" 
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
                        max="10" 
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
                        max="12" 
                        value={fontSizes.certificationText}
                        onChange={(e) => handleFontSizeChange('certificationText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>

                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Project Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.projectText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
                        value={fontSizes.projectText}
                        onChange={(e) => handleFontSizeChange('projectText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="button" 
                    onClick={resetFontSizes}
                    className={styles.resetButton}
                  >
                    Reset to Industrial Standard Font Sizes
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
              Everything you need to know about creating professional industrial resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Industrial Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 120,000+ industrial and manufacturing professionals who secured positions with our free ATS-friendly industrial resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free industrial resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Industrial Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>Technical Skill Formatting • Industry-Specific Templates • No Sign Up Required • Free Forever • ATS Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Industrial Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <IndustrialTemplate formData={formData} />
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
    { name: 'Industrial Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder' }
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

export default IndustrialResume;