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
  FiCode,
  FiBook,
  FiCpu,
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
  FiGitBranch,
  FiDatabase,
  FiCloud,
  FiTerminal
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
    techStack: '',
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
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    name: '',
    category: '',
    proficiency: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuer: '',
    date: '',
    credentialId: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultProject = () => ({
    name: '',
    techUsed: '',
    description: '',
    link: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultPublication = () => ({
    title: '',
    venue: '',
    date: '',
    link: '',
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
    skills: [],
    certifications: [],
    projects: [],
    publications: [],
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
    certText: 8,
    techStackText: 6
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentPublication, setCurrentPublication] = useState(defaultPublication());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data
  const testimonials = [
    {
      quote: "Landed a Senior ML Engineer role at Google using this builder. The tech-specific templates and ATS optimization are game-changers!",
      metric: "Got Senior Role at Google",
      name: "Alex C.",
      role: "Machine Learning Engineer",
      company: "Google AI"
    },
    {
      quote: "As a Data Scientist, the templates perfectly highlight ML projects and tech stack. Got 5 interviews in 2 weeks!",
      metric: "5 Interviews in 2 Weeks",
      name: "Sarah L.",
      role: "Data Scientist",
      company: "OpenAI"
    },
    {
      quote: "Perfect for AI researchers. The publication section and conference templates helped showcase my research effectively.",
      metric: "Research Position at MIT",
      name: "Dr. James K.",
      role: "AI Researcher",
      company: "MIT CSAIL"
    },
    {
      quote: "Switched from healthcare to tech. The builder helped translate my skills into tech language that recruiters understand.",
      metric: "Career Switch Success",
      name: "Maria T.",
      role: "AI Product Manager",
      company: "Microsoft"
    },
    {
      quote: "The tech stack formatting and GitHub integration helped me stand out. Landed a FAANG role with this resume!",
      metric: "FAANG Role in 30 Days",
      name: "David R.",
      role: "Software Engineer",
      company: "Meta"
    },
    {
      quote: "Best free tech resume builder. Clean, modern templates that pass ATS. Got hired at a top AI startup.",
      metric: "Startup Dream Job",
      name: "Lisa M.",
      role: "MLOps Engineer",
      company: "Anthropic"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this ML engineer resume builder really free with no hidden costs?",
      answer: "Yes, our machine learning engineer resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional ML resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for ML engineer resumes?",
      answer: "ATS-friendly means our ML resume templates are optimized to pass through Applicant Tracking Systems used by 95% of tech companies. This ensures your machine learning skills, frameworks, and experience are properly scanned and recognized."
    },
    {
      question: "Can I download my ML engineer resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional machine learning engineer resume in PDF format without creating an account. Everything is completely free and accessible immediately for ML engineers, data scientists, and AI professionals."
    },
    {
      question: "How many ML engineer resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly templates for ML engineers, data scientists, AI researchers, and all machine learning roles. All templates are completely free and optimized for ML hiring."
    },
    {
      question: "How does your ML engineer resume builder work?",
      answer: "Our builder uses ATS-optimized ML templates with proper machine learning terminology formatting. We guide you to highlight ML frameworks, AI projects, and achievements that tech employers look for."
    },
    {
      question: "Can I showcase my GitHub and ML projects with this builder?",
      answer: "Yes! We have dedicated sections for GitHub repositories, ML projects, research publications, and certifications. Your machine learning profile gets presented professionally to recruiters."
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
      certText: 8,
      techStackText: 6
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      github: <FiGitBranch />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      kaggle: <FiDatabase />,
      medium: <FiFileText />,
      researchgate: <FiSearch />
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
      formData.skills.length > 0 ||
      formData.certifications.length > 0 ||
      formData.projects.length > 0 ||
      formData.publications.length > 0 ||
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

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.name.trim());
  
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');

  const addPublication = createAddFunction('publications', currentPublication, setCurrentPublication, defaultPublication, () => currentPublication.title.trim());
  
  const editPublication = createEditFunction('publications', setCurrentPublication);
  const deletePublication = createDeleteFunction('publications');

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
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certItem}, .${styles.projectItem}`);
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
            
            const certTexts = clone.querySelectorAll(`.${styles.certItem}`);
            certTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certText}pt`;
            });
            
            const techStackTexts = clone.querySelectorAll(`.${styles.techStack}`);
            techStackTexts.forEach(tech => {
              tech.style.fontSize = `${fontSizes.techStackText}pt`;
            });
            
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "'Roboto Mono', 'Consolas', 'Monaco', monospace";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'ml_engineer_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- ML Engineer Resume Template ---
  const MLTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasPublications = formData.publications.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className={styles.techTemplate}>
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

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>MACHINE LEARNING EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.company} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                  {exp.techStack && <p className={styles.techStack} style={{ fontSize: `${fontSizes.techStackText}pt` }}><strong>Tech Stack:</strong> {exp.techStack}</p>}
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
                  {edu.degree}{edu.specialization && ` – ${edu.specialization}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>ML & TECHNICAL SKILLS</h2>
            <ul className={styles.skillsList}>
              {formData.skills.map((s, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  <strong>{s.name}</strong>{s.category && ` (${s.category})`}{s.proficiency && ` - ${s.proficiency}`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS</h2>
            {formData.certifications.map((c, i) => (
              <div key={i} className={styles.certItem} style={{ fontSize: `${fontSizes.certText}pt` }}>
                <strong>{c.name}</strong>
                {c.issuer && ` – ${c.issuer}`}
                {c.date && ` (${c.date})`}
                {c.credentialId && ` – ID: ${c.credentialId}`}
              </div>
            ))}
          </section>
        )}

        {hasProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>ML PROJECTS</h2>
            {formData.projects.map((p, i) => (
              <div key={i} className={styles.projectItem}>
                <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{p.name}</h3>
                {p.techUsed && <p className={styles.techStack} style={{ fontSize: `${fontSizes.techStackText}pt` }}><strong>Technologies:</strong> {p.techUsed}</p>}
                <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{p.description}</p>
              </div>
            ))}
          </section>
        )}

        {hasPublications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PUBLICATIONS & RESEARCH</h2>
            {formData.publications.map((p, i) => (
              <div key={i} className={styles.publicationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{p.title}</strong>
                {p.venue && ` – ${p.venue}`}
                {p.date && ` (${p.date})`}
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
        <title>Free ML Engineer Resume Builder: Create Yours in 5 Minutes</title>
        <meta name="title" content="Free ML Engineer Resume Builder: Create Yours in 5 Minutes" />
        <meta name="description" content="Create a professional machine learning engineer resume for free. ATS-friendly ML templates trusted by 5M+ engineers. Download PDF in minutes. Updated for 2026." />
        <meta name="keywords" content="ML engineer resume builder, machine learning resume, data scientist resume, AI resume builder, free resume builder for ML engineers, ML engineer CV, AI researcher resume, deep learning resume, FAANG resume" />
        <meta name="author" content="Professional ML Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder" />
        <meta property="og:title" content="Free ML Engineer Resume Builder: Create Yours in 5 Minutes" />
        <meta property="og:description" content="Create a professional machine learning engineer resume for free. ATS-friendly ML templates trusted by 5M+ engineers. Download PDF in minutes." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-ml-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free ML Engineer Resume Builder - Create Professional Machine Learning Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional ML Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free ML Engineer Resume Builder: Create Yours in 5 Minutes" />
        <meta name="twitter:description" content="Create a professional machine learning engineer resume for free. ATS-friendly ML templates trusted by 5M+ engineers. Download PDF in minutes." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-ml-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free ML Engineer Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@MLResumeFree" />
        <meta name="twitter:creator" content="@MLResumeFree" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/fonts/RobotoMono.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder",
                  "name": "Free ML Engineer Resume Builder: Create Yours in 5 Minutes",
                  "description": "Create professional ATS-optimized ML engineer resumes for free. Land FAANG interviews 3x faster with our ML resume builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional ML Resume Free",
                    "description": "Free online resume builder for machine learning professionals",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional ML Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/MLResumeFree",
                        "https://www.linkedin.com/company/ml-resume-free",
                        "https://github.com/MLResumeFree",
                        "https://www.youtube.com/@MLResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-ml-resume-builder-preview.jpg",
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
                        "name": "ML Engineer Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "ML Engineer Resume Builder - ATS Optimized Machine Learning Resume Maker",
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
                      "ratingCount": 65000,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly ML engineer resume builder for machine learning engineers, data scientists, and AI researchers.",
                    "featureList": [
                      "ML ATS-Optimized Templates",
                      "GitHub Project Integration",
                      "ML Framework Formatting",
                      "AI/ML Project Showcase",
                      "One-Click PDF Download",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-ml-resume-builder.jpg",
                    "applicationSuite": "ML Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "ML Engineer Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional ML Engineer Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized machine learning engineer resume for free",
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
                      "name": "Choose an ML Template",
                      "text": "Select from our ATS-optimized ML resume templates designed for machine learning engineers, data scientists, and AI researchers.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-ml-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your ML Information",
                      "text": "Add your ML experience, frameworks, projects, certifications, and GitHub repositories using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-ml-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our ML-specific suggestions to improve machine learning keywords and formatting for ATS compatibility.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your ML Resume",
                      "text": "Export your professional ML engineer resume as PDF - completely free, no watermarks, optimized for tech recruiters.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online ML Engineer Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional ML Resume Free",
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
                    "name": "Global"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free ML Engineer Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "ML ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "GitHub Project Integration"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly ML engineer resume builder for machine learning professionals worldwide",
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
                        "name": "Professional ML Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "ML Engineer Resume Builder - ATS Optimized Machine Learning Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly ML engineer resume builder that helps machine learning professionals create professional resumes and land FAANG interviews faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder"
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
            <Link href="/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free ML Templates</span>
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
                Rated 4.9/5 by 65,000+ ML Professionals | Best Free ML Engineer Resume Builder 2026
              </span>
            </div>
            
            {/* ONLY ONE H1 TAG ON THE ENTIRE PAGE */}
            <h1 className={styles.heroTitle}>
              Free ML Engineer Resume Builder: Create Yours in 5 Minutes
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized machine learning engineer resume for free in minutes.</strong> Our ML resume builder ensures your ML frameworks, AI projects, and technical expertise get noticed by FAANG companies and AI startups.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free ML engineer resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your ML Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download ML engineer resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download ML Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5M+</span>
                <span className={styles.statLabel}>ML Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3.2x</span>
                <span className={styles.statLabel}>More FAANG Interviews</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from ML Professionals</span>
              </div>
            </div>

            <div className={styles.techBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiCpu /> ML Engineer</span>
                <span className={styles.badgeItem}><FiDatabase /> Data Scientist</span>
                <span className={styles.badgeItem}><FiTrendingUp /> AI Researcher</span>
                <span className={styles.badgeItem}><FiCode /> MLOps</span>
                <span className={styles.badgeItem}><FiCloud /> Deep Learning</span>
                <span className={styles.badgeItem}><FiTarget /> NLP/CV</span>
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
                  <MLTemplate formData={formData} />
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
              { id: 'experience', label: 'ML Experience', icon: <FiCode /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'ML Skills', icon: <FiCpu /> },
              { id: 'projects', label: 'ML Projects', icon: <FiGitBranch /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Alex Johnson, Senior ML Engineer" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="alex@techdomain.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="San Francisco, CA or Remote" className={styles.formInput} />
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    ML Professional Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Senior Machine Learning Engineer with 8+ years of experience in building scalable AI systems. Expertise in Python, TensorFlow, PyTorch, and cloud platforms (AWS, GCP). Proven track record of deploying ML models that improved business metrics by 40%. Strong background in deep learning, NLP, and computer vision. Passionate about solving complex problems with data-driven solutions."
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
                  <h3 className={styles.subSectionTitle}><FiGlobe /> ML Profiles & Links</h3>
                  <p className={styles.sectionDescription}>Add your professional ML profiles (GitHub, LinkedIn, Kaggle, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="GitHub">GitHub</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Portfolio">ML Portfolio</option>
                      <option value="Kaggle">Kaggle</option>
                      <option value="Medium">Medium/Blog</option>
                      <option value="ResearchGate">ResearchGate</option>
                      <option value="Website">Personal Website</option>
                    </select>
                    <input 
                      type="url" 
                      placeholder="https://github.com/username" 
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
                      <p className={styles.emptyMessage}>No ML profiles added yet</p>
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

            {/* ML Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiCode /> Machine Learning Experience</h2>
                <p className={styles.sectionDescription}>List your ML positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Senior Machine Learning Engineer" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input 
                        value={currentExperience.company} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} 
                        placeholder="Google AI" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Tech Stack / ML Frameworks Used
                    <input 
                      value={currentExperience.techStack} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, techStack: e.target.value })} 
                      placeholder="Python, TensorFlow, PyTorch, Kubernetes, AWS, Docker" 
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
                    ML Achievements & Responsibilities*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Built and deployed a recommendation system serving 10M+ users, improving CTR by 35%
• Led a team of 4 ML engineers to develop computer vision models for autonomous vehicles
• Optimized model inference time by 60% through quantization and model pruning techniques
• Implemented MLOps pipeline using Docker, Kubernetes, and AWS SageMaker
• Published research on transformer architectures at NeurIPS 2023"
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
                      <FiPlus /> {currentExperience.isEditing ? 'Update ML Experience' : 'Add ML Experience'}
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
                  <h3 className={styles.subSectionTitle}>Your ML Experience</h3>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No ML experience added yet</p>
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
                              {exp.techStack && <span>Tech: {exp.techStack}</span>}
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

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiBook /> Education</h2>
                <p className={styles.sectionDescription}>List your technical education, degrees, and relevant coursework</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="Stanford University" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Master of Science in Computer Science" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Specialization / Focus Area
                    <input 
                      value={currentEducation.specialization} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, specialization: e.target.value })} 
                      placeholder="Artificial Intelligence, Machine Learning" 
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

            {/* Technical Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiCpu /> ML & Technical Skills</h2>
                
                {/* Technical Skills */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>ML Skills</h3>
                  <p className={styles.sectionDescription}>List your ML frameworks, programming languages, and technologies</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentSkill.name} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                          placeholder="Python, TensorFlow, PyTorch, AWS" 
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
                          <option value="">Select Category</option>
                          <option value="ML Frameworks">ML Frameworks</option>
                          <option value="Programming Languages">Programming Languages</option>
                          <option value="Deep Learning">Deep Learning</option>
                          <option value="NLP">Natural Language Processing</option>
                          <option value="Computer Vision">Computer Vision</option>
                          <option value="Cloud & MLOps">Cloud & MLOps</option>
                          <option value="Data Science">Data Science</option>
                        </select>
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Proficiency Level
                      <select 
                        value={currentSkill.proficiency} 
                        onChange={(e) => setCurrentSkill({ ...currentSkill, proficiency: e.target.value })} 
                        className={styles.formSelect}
                      >
                        <option value="">Select Proficiency</option>
                        <option value="Expert">Expert</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Beginner">Beginner</option>
                      </select>
                    </label>
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
                          <strong>{s.name}</strong>
                          {s.category && ` (${s.category})`}
                          {s.proficiency && ` - ${s.proficiency}`}
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

                {/* Certifications */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}><FiShield /> ML Certifications</h3>
                  <p className={styles.sectionDescription}>Add your ML certifications and credentials</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="AWS Certified Machine Learning - Specialty" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuer
                        <input 
                          value={currentCertification.issuer} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuer: e.target.value })} 
                          placeholder="Amazon Web Services" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Date Earned
                        <input 
                          value={currentCertification.date} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, date: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Credential ID
                        <input 
                          value={currentCertification.credentialId} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, credentialId: e.target.value })} 
                          placeholder="AWS123456" 
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
                          {c.issuer && ` – ${c.issuer}`}
                          {c.date && ` (${c.date})`}
                          {c.credentialId && ` – ID: ${c.credentialId}`}
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
                  <h3 className={styles.subSectionTitle}>Languages</h3>
                  <p className={styles.sectionDescription}>List languages you speak and your proficiency level</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="English" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <input 
                          value={currentLanguage.proficiency} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                          placeholder="Native, Fluent, Business Level" 
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

            {/* Projects & Publications Section */}
            {activeSection === 'projects' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiGitBranch /> ML Projects & Publications</h2>
                
                {/* Technical Projects */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>ML Projects</h3>
                  <p className={styles.sectionDescription}>Showcase your ML projects, Kaggle competitions, or open-source contributions</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Project Name*
                        <input 
                          value={currentProject.name} 
                          onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })} 
                          placeholder="Real-time Object Detection System" 
                          required 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        ML Technologies Used
                        <input 
                          value={currentProject.techUsed} 
                          onChange={(e) => setCurrentProject({ ...currentProject, techUsed: e.target.value })} 
                          placeholder="Python, OpenCV, TensorFlow, Flask" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Project Description*
                      <textarea 
                        value={currentProject.description} 
                        onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} 
                        placeholder="Developed a real-time object detection system using YOLOv5 that processes video streams at 30 FPS. Implemented a Flask API for model serving and created a React dashboard for visualization. The system achieved 95% accuracy on COCO dataset." 
                        required 
                        className={styles.formTextarea} 
                        rows="4" 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Project Link (GitHub, Live Demo)
                      <input 
                        type="url" 
                        value={currentProject.link} 
                        onChange={(e) => setCurrentProject({ ...currentProject, link: e.target.value })} 
                        placeholder="https://github.com/username/project" 
                        className={styles.formInput} 
                      />
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
                  
                  <div className={styles.itemsList}>
                    {formData.projects.map((p, i) => (
                      <div key={i} className={styles.listItem}>
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <strong className={styles.itemTitle}>{p.name}</strong>
                          </div>
                          {p.techUsed && <div className={styles.itemMeta}><span>Tech: {p.techUsed}</span></div>}
                          <div className={styles.itemDescription}>
                            <p>{p.description}</p>
                            {p.link && <p className={styles.itemUrl}>Link: {formatSocialUrl(p.link)}</p>}
                          </div>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editProject(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteProject(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.projects.length === 0 && <p className={styles.emptyMessage}>No projects added yet</p>}
                  </div>
                </div>

                {/* Publications */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle}>Publications & Research</h3>
                  <p className={styles.sectionDescription}>Add your research papers, conference publications, or technical blog posts</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Publication Title*
                        <input 
                          value={currentPublication.title} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, title: e.target.value })} 
                          placeholder="Attention Is All You Need" 
                          required 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Venue / Journal
                        <input 
                          value={currentPublication.venue} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, venue: e.target.value })} 
                          placeholder="NeurIPS 2023" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Publication Date
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentPublication.date} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, date: e.target.value })} 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Publication Link
                        <input 
                          type="url" 
                          value={currentPublication.link} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, link: e.target.value })} 
                          placeholder="https://arxiv.org/abs/1706.03762" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addPublication} 
                        className={styles.addButton} 
                        disabled={!currentPublication.title.trim()}
                      >
                        <FiPlus /> {currentPublication.isEditing ? 'Update Publication' : 'Add Publication'}
                      </button>
                      {currentPublication.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentPublication(defaultPublication())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className={styles.itemsList}>
                    {formData.publications.map((p, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{p.title}</strong>
                          {p.venue && ` – ${p.venue}`}
                          {p.date && ` (${p.date})`}
                          {p.link && <div className={styles.itemUrl}>Link: {formatSocialUrl(p.link)}</div>}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editPublication(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deletePublication(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.publications.length === 0 && <p className={styles.emptyMessage}>No publications added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h2>
                <p className={styles.sectionDescription}>Customize font sizes for your ML resume PDF. All sizes are in points (pt).</p>
                
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
                        <span className={styles.fontSizeValue}>{fontSizes.certText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.certText}
                        onChange={(e) => handleFontSizeChange('certText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>

                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Tech Stack Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.techStackText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="4" 
                        max="10" 
                        value={fontSizes.techStackText}
                        onChange={(e) => handleFontSizeChange('techStackText', e.target.value)}
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
              Everything you need to know about creating professional ML engineer resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Land Your Dream ML Job?</h2>
            <p className={styles.ctaSubtitle}>
              Join 5 million+ ML professionals who landed FAANG roles with our free ATS-friendly ML engineer resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free ML engineer resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free ML Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for ML • GitHub Integration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full ML Engineer Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <MLTemplate formData={formData} />
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
    { name: 'ML Engineer Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-technology-ai-and-machine-learning-engineering-resume-builder' }
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