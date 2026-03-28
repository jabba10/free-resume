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
  FiDatabase,
  FiBook,
  FiActivity,
  FiBarChart,
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
  FiTarget,
  FiLayers,
  FiCode,
  FiCloud,
  FiPieChart,
  FiZap,
  FiShield
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
    company: '',
    position: '',
    industry: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    specialization: '',
    gpa: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTechnicalSkill = () => ({
    category: 'Programming',
    name: '',
    proficiency: 'Intermediate',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuer: '',
    credentialId: '',
    issueDate: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultProject = () => ({
    name: '',
    role: '',
    technologies: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTool = () => ({
    name: '',
    category: 'Data Visualization',
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
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: [],
    education: [],
    technicalSkills: [],
    certifications: [],
    projects: [],
    tools: [],
    languages: [],
    socialLinks: []
  });

  // Font size state - Updated for data analyst resume
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
    certificationText: 8,
    toolText: 7
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentTechnicalSkill, setCurrentTechnicalSkill] = useState(defaultTechnicalSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentTool, setCurrentTool] = useState(defaultTool());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data - Data Analyst specific
  const testimonials = [
    {
      quote: "Created my data analyst resume in minutes and landed 5 interviews in two weeks. The ATS-optimized templates are perfect for tech companies!",
      metric: "5 Interviews in 2 Weeks",
      name: "Alex R.",
      role: "Senior Data Analyst",
      company: "TechCorp Inc."
    },
    {
      quote: "The data-specific sections helped me showcase my SQL, Python, and Tableau skills effectively. Recruiters loved the clean, professional format.",
      metric: "Hired at FAANG Company",
      name: "Sarah K.",
      role: "Data Analyst",
      company: "Meta"
    },
    {
      quote: "As a recent data science graduate, this builder helped me create a standout resume. Got my first analyst job at a Fortune 500 company!",
      metric: "First Job After Graduation",
      name: "Michael T.",
      role: "Junior Data Analyst",
      company: "IBM"
    },
    {
      quote: "The technical skills section is perfectly formatted for data roles. Helped me transition from business analyst to data analyst successfully.",
      metric: "Career Transition Success",
      name: "Jennifer L.",
      role: "Data Analyst",
      company: "Microsoft"
    },
    {
      quote: "ATS-friendly templates that actually work for data roles! Got callbacks from companies that previously ignored my applications.",
      metric: "3x More Responses",
      name: "David W.",
      role: "Business Intelligence Analyst",
      company: "Amazon"
    },
    {
      quote: "Free with proper data analytics formatting? Unbeatable value. Best resume builder for data professionals I've found online.",
      metric: "Perfect Resume in 20min",
      name: "Robert C.",
      role: "Data Analytics Manager",
      company: "Google"
    }
  ];

  // FAQ Data for Structured Data - Data Analyst specific
  const faqs = [
    {
      question: "Is this data analyst resume builder completely free with no hidden costs?",
      answer: "Yes, our data analyst resume builder is 100% free with no hidden costs or watermarks. Create, edit, and download your professional data analyst resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for data analyst resumes?",
      answer: "ATS-friendly means our data analyst resume templates are optimized to pass through Applicant Tracking Systems used by 95% of tech companies and corporations. This ensures your technical skills, tools, and experience are properly scanned and recognized."
    },
    {
      question: "Can I download my data analyst resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional data analyst resume in PDF format without creating an account. Everything is completely free and accessible immediately for data professionals worldwide."
    },
    {
      question: "How many data analyst resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly data analyst resume templates for entry-level, mid-career, and senior data analysts, business intelligence analysts, data scientists, and analytics managers. All templates are completely free."
    },
    {
      question: "How does your data analyst resume builder work?",
      answer: "Our builder uses ATS-optimized data analyst templates with proper technical formatting. We guide you to highlight SQL, Python, visualization tools, statistical analysis, and business impact metrics that tech employers look for."
    },
    {
      question: "Can international data analysts use this builder?",
      answer: "Yes! Our builder is designed for data analysts across the globe. You can customize location, work authorization status, and international education formats. Templates work for US, EU, UK, Canada, Australia, and global job markets."
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
      certificationText: 8,
      toolText: 7
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      github: <FiCode />,
      kaggle: <FiDatabase />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      tableau: <FiBarChart />,
      medium: <FiFileText />
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
      formData.tools.length > 0 ||
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

  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.name.trim());
  
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');

  const addTool = createAddFunction('tools', currentTool, setCurrentTool, defaultTool, () => currentTool.name.trim());
  
  const editTool = createEditFunction('tools', setCurrentTool);
  const deleteTool = createDeleteFunction('tools');

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
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.projectItem}`);
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

      pdf.save(`${formData.fullName || 'data_analyst_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const DataAnalystTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasTechnicalSkills = formData.technicalSkills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasTools = formData.tools.length > 0;
    const hasLanguages = formData.languages.length > 0;

    // Group technical skills by category
    const skillsByCategory = formData.technicalSkills.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(`${skill.name}${skill.proficiency ? ` (${skill.proficiency})` : ''}`);
      return acc;
    }, {});

    return (
      <div className={styles.dataAnalystTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.location)) && <div className={styles.contactSeparator}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.location) && <div className={styles.contactSeparator}>•</div>}
            {formData.location && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.location}</div>}
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

        {hasTechnicalSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>TECHNICAL SKILLS</h2>
            <div className={styles.skillsGrid}>
              {Object.entries(skillsByCategory).map(([category, skills], i) => (
                <div key={i} className={styles.skillCategory}>
                  <h3 style={{ fontSize: `${fontSizes.skillText}pt` }}>{category}:</h3>
                  <ul className={styles.skillsList}>
                    {skills.map((skill, j) => <li key={j} style={{ fontSize: `${fontSizes.skillText}pt` }}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.company}{exp.industry && ` | ${exp.industry}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
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
                  {edu.degree}{edu.specialization && ` in ${edu.specialization}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                  {edu.gpa && ` | GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certificationText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuer && ` – ${cert.issuer}`}
                {cert.credentialId && ` (ID: ${cert.credentialId})`}
                {cert.issueDate && ` – Issued: ${cert.issueDate}`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROJECTS</h2>
            {formData.projects.map((project, i) => (
              <div key={i} className={styles.projectItem}>
                <div className={styles.projectHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{project.name}</h3>
                  {project.role && <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{project.role}{project.technologies && ` | ${project.technologies}`}</p>}
                </div>
                <p className={styles.projectDescription} style={{ fontSize: `${fontSizes.regularText}pt` }}>{project.description}</p>
              </div>
            ))}
          </section>
        )}

        {hasTools && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>TOOLS & TECHNOLOGIES</h2>
            <ul className={styles.skillsList}>
              {formData.tools.map((tool, i) => <li key={i} style={{ fontSize: `${fontSizes.toolText}pt` }}>{tool.name}{tool.category && ` (${tool.category})`}</li>)}
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
        <title>Free Data Analyst Resume Builder: ATS Templates for 2026</title>
        <meta name="title" content="Free Data Analyst Resume Builder: ATS Templates for 2026" />
        <meta name="description" content="Create your professional ATS-ready resume in 5 minutes. Free data analyst resume builder with templates for SQL, Python & visualization roles. Download PDF instantly." />
        <meta name="keywords" content="data analyst resume builder, data analyst resume templates, data analyst CV, ATS friendly data analyst resume, free resume builder for data analysts, data science resume, business intelligence resume, SQL resume, Python resume, Tableau resume, data visualization resume" />
        <meta name="author" content="Professional Data Analyst Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder" />
        
        <meta property="og:title" content="Free Data Analyst Resume Builder: ATS Templates for 2026" />
        <meta property="og:description" content="Create your professional ATS-ready resume in 5 minutes. Free data analyst resume builder with templates for SQL, Python & visualization roles. Download PDF instantly." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-data-analyst-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Data Analyst Resume Builder - Create Professional Data Analyst Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Data Analyst Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Data Analyst Resume Builder: ATS Templates for 2026" />
        <meta name="twitter:description" content="Create your professional ATS-ready resume in 5 minutes. Free data analyst resume builder with templates for SQL, Python & visualization roles." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-data-analyst-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Data Analyst Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@DataAnalystResume" />
        <meta name="twitter:creator" content="@DataAnalystResume" />
        <meta name="theme-color" content="#0066cc" />
        <meta name="msapplication-TileColor" content="#0066cc" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder",
                  "name": "Free Data Analyst Resume Builder: ATS Templates 2026",
                  "description": "Create your professional ATS-ready resume in 5 minutes. Free data analyst resume builder with templates for SQL, Python & visualization roles. Download PDF instantly.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Data Analyst Resume Free",
                    "description": "Free online resume builder for data analysts worldwide",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Data Analyst Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/DataAnalystResume",
                        "https://www.linkedin.com/company/data-analyst-resume-free",
                        "https://github.com/data-analyst-resume-builder"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-data-analyst-resume-builder-preview.jpg",
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
                        "name": "Data Analyst Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Data Analyst Resume Builder - ATS Optimized Resume Maker",
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
                      "ratingCount": 32789,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly data analyst resume builder for data professionals, analysts, BI specialists, and data scientists.",
                    "featureList": [
                      "Data Analyst ATS-Optimized Templates",
                      "Technical Skills Organization",
                      "One-Click PDF Download",
                      "Project Portfolio Formatting",
                      "Global Job Market Support",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-data-analyst-resume-builder.jpg",
                    "applicationSuite": "Data Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Data Analyst Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Data Analyst Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized data analyst resume for free",
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
                      "name": "Choose a Data Analyst Template",
                      "text": "Select from our ATS-optimized data analyst resume templates designed for entry-level to senior data professionals.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-data-analyst-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Technical Information",
                      "text": "Add your data analysis experience, technical skills, tools, certifications, and project portfolio using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-technical-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our data analyst-specific suggestions to improve technical keywords and formatting for ATS compatibility.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Data Analyst Resume",
                      "text": "Export your professional data analyst resume as PDF - completely free, no watermarks.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Data Analyst Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Data Analyst Resume Free",
                    "url": "https://www.professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-800-555-6789",
                      "contactType": "Customer Support",
                      "availableLanguage": "en"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Global"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free Data Analyst Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Data Analyst ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Technical Resume Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly data analyst resume builder for data professionals worldwide",
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
                        "name": "Professional Data Analyst Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Data Analyst Resume Builder - ATS Optimized Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly data analyst resume builder that helps data professionals create professional resumes and land interviews faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder"
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
            <Link href="/ats-friendly-data-analyst-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free Data Analyst Template</span>
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
                Rated 4.8/5 by 32,789+ Data Professionals | Best Free Data Analyst Resume Builder 2026
              </span>
            </div>
            
            {/* ONLY ONE H1 TAG ON THE ENTIRE PAGE */}
            <h1 className={styles.heroTitle}>
              Free Data Analyst Resume Builder: Create Yours in 5 Minutes
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized data analyst resume for free in minutes.</strong> Our resume builder ensures your technical skills and data projects get noticed by tech companies and global employers.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free data analyst resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Build Your Data Analyst Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download data analyst resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Data Analyst Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2M+</span>
                <span className={styles.statLabel}>Data Analyst Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster Tech Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8/5</span>
                <span className={styles.statLabel}>Rating from Data Professionals</span>
              </div>
            </div>

            <div className={styles.techBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiDatabase /> SQL Expert</span>
                <span className={styles.badgeItem}><FiCode /> Python/R</span>
                <span className={styles.badgeItem}><FiBarChart /> Tableau/Power BI</span>
                <span className={styles.badgeItem}><FiTrendingUp /> Statistical Analysis</span>
                <span className={styles.badgeItem}><FiCloud /> Big Data</span>
                <span className={styles.badgeItem}><FiPieChart /> Data Visualization</span>
                <span className={styles.badgeItem}><FiZap /> Machine Learning</span>
                <span className={styles.badgeItem}><FiShield /> ATS Optimized</span>
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
                  <DataAnalystTemplate formData={formData} />
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
              { id: 'skills', label: 'Technical Skills', icon: <FiCode /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'projects', label: 'Projects', icon: <FiLayers /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Alex Johnson, Senior Data Analyst" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="alex.johnson@dataanalyst.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Location (City, Country)*
                      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="San Francisco, CA, USA | Remote" required className={styles.formInput} />
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
                      placeholder="Results-driven Data Analyst with 5+ years of experience in transforming complex data into actionable insights. Expertise in SQL, Python, Tableau, and statistical analysis. Proven track record of improving business decisions through data-driven strategies and predictive modeling. Strong communication skills with ability to translate technical findings into business recommendations."
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
                  <h3 className={styles.subSectionTitle}><FiGlobe /> Professional Links</h3>
                  <p className={styles.sectionDescription}>Add your professional profiles (LinkedIn, GitHub, Kaggle, portfolio, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="GitHub">GitHub</option>
                      <option value="Kaggle">Kaggle</option>
                      <option value="Portfolio">Portfolio Website</option>
                      <option value="Tableau Public">Tableau Public</option>
                      <option value="Medium">Medium/Articles</option>
                      <option value="ResearchGate">ResearchGate</option>
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

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiBriefcase /> Professional Experience</h2>
                <p className={styles.sectionDescription}>List your data analyst positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Senior Data Analyst" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input 
                        value={currentExperience.company} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} 
                        placeholder="TechCorp Inc." 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Industry / Department
                    <input 
                      value={currentExperience.industry} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, industry: e.target.value })} 
                      placeholder="Technology | Business Intelligence" 
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
                    Key Responsibilities & Data Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Developed and maintained SQL databases, optimizing query performance by 40%
• Created interactive Tableau dashboards used by 100+ executives for strategic decision-making
• Analyzed customer behavior data to increase retention by 15% through targeted campaigns
• Built predictive models using Python (scikit-learn) that improved sales forecasting accuracy by 25%
• Automated monthly reporting processes, saving 20 hours per month in manual work
• Collaborated with cross-functional teams to define KPIs and track business metrics"
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
                  <h3 className={styles.subSectionTitle}>Your Professional Experience</h3>
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
                              {exp.industry && <span>{exp.industry}</span>}
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
              </div>
            )}

            {/* Technical Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiCode /> Technical Skills & Tools</h2>
                
                {/* Technical Skills */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiCode /> Technical Skills</h3>
                  <p className={styles.sectionDescription}>Add your technical skills grouped by category (Programming, Databases, etc.)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Category*
                        <select 
                          value={currentTechnicalSkill.category} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, category: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="Programming">Programming Languages</option>
                          <option value="Databases">Databases & SQL</option>
                          <option value="Visualization">Data Visualization</option>
                          <option value="Statistics">Statistics & ML</option>
                          <option value="Big Data">Big Data Tools</option>
                          <option value="Cloud">Cloud Platforms</option>
                          <option value="Other">Other Skills</option>
                        </select>
                      </label>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentTechnicalSkill.name} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, name: e.target.value })} 
                          placeholder="Python, SQL, Tableau, etc." 
                          className={styles.formInput} 
                        />
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
                    {formData.technicalSkills.map((skill, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{skill.category}:</strong> {skill.name}{skill.proficiency && ` (${skill.proficiency})`}
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

                {/* Certifications */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiAward /> Certifications</h3>
                  <p className={styles.sectionDescription}>Add your data analytics certifications and credentials</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Google Data Analytics Professional Certificate" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Organization
                        <input 
                          value={currentCertification.issuer} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuer: e.target.value })} 
                          placeholder="Google, IBM, Microsoft, etc." 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Credential ID
                        <input 
                          value={currentCertification.credentialId} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, credentialId: e.target.value })} 
                          placeholder="Certificate ID or License Number" 
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
                          placeholder="Month Year (if applicable)" 
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
                          {cert.issuer && ` – ${cert.issuer}`}
                          {cert.credentialId && ` (ID: ${cert.credentialId})`}
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

                {/* Tools & Technologies */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiTool /> Tools & Technologies</h3>
                  <p className={styles.sectionDescription}>List specific tools, software, and technologies you're proficient with</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Tool/Technology Name*
                        <input 
                          value={currentTool.name} 
                          onChange={(e) => setCurrentTool({ ...currentTool, name: e.target.value })} 
                          placeholder="Tableau, Power BI, Jupyter Notebooks, etc." 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Category
                        <select 
                          value={currentTool.category} 
                          onChange={(e) => setCurrentTool({ ...currentTool, category: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="Data Visualization">Data Visualization</option>
                          <option value="Database">Database Tools</option>
                          <option value="Programming IDE">Programming IDE</option>
                          <option value="Cloud Services">Cloud Services</option>
                          <option value="Big Data">Big Data Tools</option>
                          <option value="Other">Other Tools</option>
                        </select>
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addTool} 
                        className={styles.addButton} 
                        disabled={!currentTool.name.trim()}
                      >
                        <FiPlus /> {currentTool.isEditing ? 'Update Tool' : 'Add Tool'}
                      </button>
                      {currentTool.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentTool(defaultTool())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.tools.map((tool, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {tool.name}{tool.category && ` (${tool.category})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editTool(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteTool(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.tools.length === 0 && <p className={styles.emptyMessage}>No tools added yet</p>}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiGlobe /> Languages</h3>
                  <p className={styles.sectionDescription}>List languages you speak and your proficiency level (important for global roles)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="English, Spanish, Mandarin, etc." 
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
                          <option value="Native">Native</option>
                          <option value="Fluent">Fluent</option>
                          <option value="Professional">Professional</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Basic">Basic</option>
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

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiBook /> Education</h2>
                <p className={styles.sectionDescription}>List your degrees and relevant education (global formats supported)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="Stanford University, MIT, University of London, etc." 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree/Certification*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Master of Science in Data Science, Bachelor of Computer Science" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Specialization / Major / Focus Area
                    <input 
                      value={currentEducation.specialization} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, specialization: e.target.value })} 
                      placeholder="Data Analytics, Business Intelligence, Statistics" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      GPA / Grade
                      <input 
                        type="text" 
                        placeholder="3.8/4.0, First Class Honors, 4.0 GPA" 
                        value={currentEducation.gpa} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, gpa: e.target.value })} 
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
                  <h3 className={styles.subSectionTitle}>Your Education</h3>
                  {formData.education.length === 0 ? (
                    <p className={styles.emptyMessage}>No education added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.education.map((edu, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{edu.degree}</strong>
                              {edu.specialization && <span className={styles.itemSubtitle}> – {edu.specialization}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}</span>
                              <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                              {edu.gpa && <span>GPA: {edu.gpa}</span>}
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

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiLayers /> Data Projects</h2>
                <p className={styles.sectionDescription}>Showcase your data analysis projects, portfolio work, or academic projects</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Project Name*
                      <input 
                        value={currentProject.name} 
                        onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })} 
                        placeholder="Customer Churn Prediction Model" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Your Role
                      <input 
                        value={currentProject.role} 
                        onChange={(e) => setCurrentProject({ ...currentProject, role: e.target.value })} 
                        placeholder="Lead Data Analyst, Project Contributor" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Technologies Used
                    <input 
                      value={currentProject.technologies} 
                      onChange={(e) => setCurrentProject({ ...currentProject, technologies: e.target.value })} 
                      placeholder="Python, SQL, Tableau, scikit-learn" 
                      className={styles.formInput} 
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Project Description & Impact*
                    <textarea 
                      value={currentProject.description} 
                      onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} 
                      placeholder="• Developed a predictive model to identify customers at risk of churning with 85% accuracy
• Analyzed 2+ years of customer data using SQL and Python to identify key churn indicators
• Created interactive Tableau dashboard for marketing team to visualize at-risk customers
• Resulted in 20% reduction in customer churn through targeted retention campaigns
• Implemented automated monthly reporting using Python scripts"
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
                      disabled={!currentProject.name.trim() || !currentProject.description.trim()}
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
                  <h3 className={styles.subSectionTitle}>Your Data Projects</h3>
                  {formData.projects.length === 0 ? (
                    <p className={styles.emptyMessage}>No projects added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.projects.map((project, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{project.name}</strong>
                              {project.role && <span className={styles.itemSubtitle}> – {project.role}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              {project.technologies && <span>Technologies: {project.technologies}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {project.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                <p key={j} className={styles.bulletPoint}>• {line}</p>
                              ))}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editProject(i)} className={styles.editButton} aria-label={`Edit ${project.name}`}><FiEdit2 /></button>
                            <button onClick={() => deleteProject(i)} className={styles.deleteButton} aria-label={`Delete ${project.name}`}><FiTrash2 /></button>
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
                <h2 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h2>
                <p className={styles.sectionDescription}>Customize font sizes for your resume PDF. All sizes are in points (pt).</p>
                
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

                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Tools Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.toolText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
                        value={fontSizes.toolText}
                        onChange={(e) => handleFontSizeChange('toolText', e.target.value)}
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
              Everything you need to know about creating professional data analyst resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Data Analyst Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 2 million+ data professionals worldwide who landed their dream jobs with our free ATS-friendly data analyst resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free data analyst resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Data Analyst Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for Tech Jobs • Global Formats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h2>Full Data Analyst Resume Preview</h2>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <DataAnalystTemplate formData={formData} />
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
    { name: 'Data Analyst Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-data-analyst-resume-builder' }
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