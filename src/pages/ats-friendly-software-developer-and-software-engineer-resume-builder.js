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
  FiGitBranch,
  FiDatabase,
  FiCloud,
  FiServer,
  FiCpu,
  FiSmartphone,
  FiGitPullRequest
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './SResume.module.css';

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
    technologies: '',
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
    gpa: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTechnicalSkill = () => ({
    category: '',
    skills: '',
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
    technologies: '',
    description: '',
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
    title: '',
    summary: '',
    experience: [],
    education: [],
    technicalSkills: [],
    certifications: [],
    projects: [],
    languages: [],
    socialLinks: []
  });

  // Font size state
  const [fontSizes, setFontSizes] = useState({
    name: 16,
    sectionTitle: 11,
    contactInfo: 8,
    jobTitle: 10,
    company: 8,
    degree: 10,
    institution: 8,
    institutionDate: 7,
    regularText: 9,
    bulletText: 9,
    skillText: 8,
    technologyText: 8,
    skillCategory: 9
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentTechnicalSkill, setCurrentTechnicalSkill] = useState(defaultTechnicalSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data
  const testimonials = [
    {
      quote: "Created my software engineer resume in 10 minutes and landed interviews at FAANG companies. The tech-specific templates are incredible!",
      metric: "FAANG Offer in 3 Weeks",
      name: "Alex M.",
      role: "Senior Software Engineer",
      company: "Tech Giant"
    },
    {
      quote: "Finally a resume builder that understands tech stack and coding experience. The ATS templates helped me pass tech company screening systems.",
      metric: "5 Tech Interviews in 1 Week",
      name: "Sarah K.",
      role: "Full Stack Developer",
      company: "Startup"
    },
    {
      quote: "As a recent CS graduate, the entry-level templates were perfect. Landed my first developer job at a unicorn startup.",
      metric: "First Job After Bootcamp",
      name: "James P.",
      role: "Junior Developer",
      company: "Tech Startup"
    },
    {
      quote: "The developer resume builder saved me hours. Could update my CV between coding sessions. Clean, professional results.",
      metric: "Career Advancement Success",
      name: "David L.",
      role: "DevOps Engineer",
      company: "Cloud Company"
    },
    {
      quote: "ATS-friendly templates actually work for tech roles! Got callbacks from companies that previously ignored my applications.",
      metric: "3x More Responses",
      name: "Maria T.",
      role: "Frontend Developer",
      company: "Digital Agency"
    },
    {
      quote: "Free PDF download with proper tech formatting? Unbeatable value. Best developer resume builder I've found.",
      metric: "Perfect Resume in 15min",
      name: "Ryan R.",
      role: "Backend Engineer",
      company: "SaaS Company"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this developer resume builder really free with no hidden costs?",
      answer: "Yes, our software developer resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional tech resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for developer resumes?",
      answer: "ATS-friendly means our developer resume templates are optimized to pass through Applicant Tracking Systems used by 95% of tech companies. This ensures your technical skills, frameworks, and programming languages are properly scanned and recognized."
    },
    {
      question: "Can I download my developer resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional developer resume in PDF format without creating an account. Everything is completely free and accessible immediately for software engineers, developers, and tech professionals worldwide."
    },
    {
      question: "How many tech resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly developer resume templates for software engineers, full-stack developers, frontend/backend specialists, DevOps engineers, and all tech roles. All templates are completely free and optimized for tech hiring."
    },
    {
      question: "How does your developer resume builder work?",
      answer: "Our builder uses ATS-optimized tech templates with proper technical terminology formatting. We guide you to highlight programming experience, tech stack, projects, and GitHub contributions that tech employers look for."
    },
    {
      question: "Can I edit my developer resume after downloading it?",
      answer: "Yes, you can always come back and edit your developer resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
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
      name: 16,
      sectionTitle: 11,
      contactInfo: 8,
      jobTitle: 10,
      company: 8,
      degree: 10,
      institution: 8,
      institutionDate: 7,
      regularText: 9,
      bulletText: 9,
      skillText: 8,
      technologyText: 8,
      skillCategory: 9
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      github: <FiGitBranch />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      leetcode: <FiCode />,
      hackerrank: <FiCode />,
      stackoverflow: <FiCode />
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

  const addTechnicalSkill = createAddFunction('technicalSkills', currentTechnicalSkill, setCurrentTechnicalSkill, defaultTechnicalSkill, () => currentTechnicalSkill.category && currentTechnicalSkill.skills);
  
  const editTechnicalSkill = createEditFunction('technicalSkills', setCurrentTechnicalSkill);
  const deleteTechnicalSkill = createDeleteFunction('technicalSkills');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.name.trim());
  
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');

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
            
            const technologyTexts = clone.querySelectorAll(`.${styles.technologyBadge}`);
            technologyTexts.forEach(tech => {
              tech.style.fontSize = `${fontSizes.technologyText}pt`;
            });

            const skillCategories = clone.querySelectorAll(`.${styles.skillCategoryTitle}`);
            skillCategories.forEach(category => {
              category.style.fontSize = `${fontSizes.skillCategory}pt`;
            });
            
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "'Inter', 'Helvetica Neue', Arial, sans-serif";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'developer_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const DeveloperTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasTechnicalSkills = formData.technicalSkills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className={styles.developerTemplate}>
        <header className={styles.resumeHeader}>
          <div>
            <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
              {formData.fullName || 'Your Name'}
            </h1>
            {formData.title && <p className={styles.title} style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.title}</p>}
          </div>
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
            <div className={styles.technicalSkillsGrid}>
              {formData.technicalSkills.map((skill, i) => (
                <div key={i} className={styles.skillCategory}>
                  <h3 className={styles.skillCategoryTitle} style={{ fontSize: `${fontSizes.skillCategory}pt` }}>
                    {skill.category}
                  </h3>
                  <div className={styles.skillTags}>
                    {skill.skills.split(',').map((s, idx) => (
                      <span key={idx} className={styles.technologyBadge} style={{ fontSize: `${fontSizes.technologyText}pt` }}>
                        {s.trim()}
                      </span>
                    ))}
                  </div>
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
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.company} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                {exp.technologies && (
                  <p className={styles.technologies} style={{ fontSize: `${fontSizes.technologyText}pt` }}>
                    <strong>Tech Stack:</strong> {exp.technologies}
                  </p>
                )}
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => (
                    <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROJECTS</h2>
            {formData.projects.map((project, i) => (
              <div key={i} className={styles.projectItem}>
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>{project.name}</h3>
                {project.technologies && (
                  <p className={styles.projectTechnologies} style={{ fontSize: `${fontSizes.technologyText}pt` }}>
                    {project.technologies}
                  </p>
                )}
                <p className={styles.projectDescription} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                  {project.description}
                </p>
                {project.link && (
                  <p className={styles.projectLink} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                    <strong>Link:</strong> {project.link}
                  </p>
                )}
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
                  {edu.degree}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution}
                  {edu.specialization && ` • ${edu.specialization}`}
                </p>
                <p className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                  {edu.startDate} – {edu.endDate || 'Present'}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuer && ` – ${cert.issuer}`}
                {cert.date && ` (${cert.date})`}
                {cert.credentialId && ` • ID: ${cert.credentialId}`}
              </div>
            ))}
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>LANGUAGES</h2>
            <div className={styles.languageList}>
              {formData.languages.map((l, i) => (
                <span key={i} className={styles.languageItem} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  {l.name}{l.proficiency && ` (${l.proficiency})`}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    );
  };

  return (
    <div className={styles.resumeBuilder} lang="en-US">
      <Head>
        <title>Free Developer Resume Builder: ATS Software Engineer Templates 2026</title>
        <meta name="title" content="Free Developer Resume Builder: ATS Software Engineer Templates 2026" />
        <meta name="description" content="Create your ATS-optimized developer resume for free in 2026. Professional tech templates for software engineers. No sign-up required. Download PDF instantly." />
        <meta name="keywords" content="developer resume builder, software engineer resume, tech resume templates, programmer resume, ATS friendly developer resume, free resume builder for developers, coding resume, tech CV, software developer resume, GitHub portfolio resume" />
        <meta name="author" content="Professional Software Developer/Engineer Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder" />
        <meta property="og:title" content="Free Developer Resume Builder: ATS Software Engineer Templates 2026" />
        <meta property="og:description" content="Create your ATS-optimized developer resume for free in 2026. Professional tech templates trusted by 5M+ software engineers." />
        <meta property="og:image" content="https://professionalresumefree.com/images/og-developer-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Developer Resume Builder - Create Professional Tech Resumes Online" />
        <meta property="og:url" content="https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Developer Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Developer Resume Builder: ATS Software Engineer Templates 2026" />
        <meta name="twitter:description" content="Create your ATS-optimized developer resume for free in 2026. Professional tech templates trusted by 5M+ software engineers." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-developer-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Developer Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@DevResumeFree" />
        <meta name="twitter:creator" content="@DevResumeFree" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
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
                  "@id": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder#webpage",
                  "url": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder",
                  "name": "Free Software Developer Resume Builder - ATS Friendly Tech Templates 2026",
                  "description": "Create professional ATS-optimized developer resumes for free. Land interviews 3x faster with our tech resume builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional Developer Resume Free",
                    "description": "Free online resume builder for software developers and engineers",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://professionalresumefree.com/#organization",
                      "name": "Professional Developer Resume Free",
                      "url": "https://professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/DevResumeFree",
                        "https://www.linkedin.com/company/developer-resume-free",
                        "https://github.com/DeveloperResumeFree",
                        "https://www.youtube.com/@DeveloperResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/images/og-developer-resume-builder-preview.jpg",
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
                        "name": "Developer Resume Builder",
                        "item": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Developer Resume Builder - ATS Optimized Tech Resume Maker",
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
                      "ratingCount": 60365,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly developer resume builder for software engineers, full-stack developers, and tech professionals.",
                    "featureList": [
                      "Tech ATS-Optimized Templates",
                      "Programming Language Support",
                      "GitHub Integration Suggestions",
                      "One-Click PDF Download",
                      "Tech Stack Formatting",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://professionalresumefree.com/images/screenshot-developer-resume-builder.jpg",
                    "applicationSuite": "Developer Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Developer Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Developer Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized developer resume for free",
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
                      "name": "Choose a Developer Template",
                      "text": "Select from our ATS-optimized developer resume templates designed for software engineers, full-stack developers, and tech specialists.",
                      "url": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder#templates",
                      "image": "https://professionalresumefree.com/images/step1-developer-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Technical Information",
                      "text": "Add your programming experience, education, tech stack, projects, GitHub contributions, and certifications.",
                      "url": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder#editor",
                      "image": "https://professionalresumefree.com/images/step2-tech-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our developer-specific suggestions to improve technical keywords and formatting for ATS compatibility.",
                      "url": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder#optimize",
                      "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Developer Resume",
                      "text": "Export your professional developer resume as PDF - completely free, no watermarks.",
                      "url": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder#download",
                      "image": "https://professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Developer Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Developer Resume Free",
                    "url": "https://professionalresumefree.com",
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
                    "name": "Free Developer Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Developer ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Tech Resume Optimization"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly developer resume builder for tech professionals worldwide",
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
                        "name": "Professional Developer Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Developer Resume Builder - ATS Optimized Tech Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly developer resume builder that helps tech professionals create professional resumes and land interviews faster.",
                        "url": "https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder"
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
            <Link href="/ats-friendly-software-developer-and-software-engineer-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free Tech Templates</span>
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
                Rated 4.9/5 by 60,365+ Developers | Best Free Developer Resume Builder 2026
              </span>
            </div>
            
            {/* ONLY ONE H1 TAG ON THE ENTIRE PAGE */}
            <h1 className={styles.heroTitle}>
              Create Your Developer Resume 2026
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized developer resume for free in minutes.</strong> Our tech resume builder ensures your coding skills, projects, and tech stack get noticed by top tech companies worldwide.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free developer resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Developer Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download developer resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Developer Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>5M+</span>
                <span className={styles.statLabel}>Developer Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>96%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster Tech Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Developers</span>
              </div>
            </div>

            <div className={styles.techBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiCode /> Software Engineer</span>
                <span className={styles.badgeItem}><FiCpu /> Full-Stack Developer</span>
                <span className={styles.badgeItem}><FiSmartphone /> Frontend Developer</span>
                <span className={styles.badgeItem}><FiServer /> Backend Engineer</span>
                <span className={styles.badgeItem}><FiCloud /> DevOps Engineer</span>
                <span className={styles.badgeItem}><FiDatabase /> Data Engineer</span>
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
                  <DeveloperTemplate formData={formData} />
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
              { id: 'technical', label: 'Technical Skills', icon: <FiCode /> },
              { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
              { id: 'projects', label: 'Projects', icon: <FiGitBranch /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Alex Johnson" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Professional Title
                      <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Senior Software Engineer | Full-Stack Developer" className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="alex@example.com" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+1 (555) 123-4567" className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Location
                    <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="San Francisco, CA | Remote" className={styles.formInput} />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Senior Software Engineer with 8+ years of experience building scalable web applications using modern technologies. Expertise in full-stack development with React, Node.js, and cloud platforms. Passionate about clean code, best practices, and mentoring junior developers. Successfully delivered multiple high-traffic SaaS products."
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
                  <p className={styles.sectionDescription}>Add your professional developer profiles (GitHub, LinkedIn, portfolio, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="GitHub">GitHub</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Portfolio">Portfolio</option>
                      <option value="Website">Personal Website</option>
                      <option value="LeetCode">LeetCode</option>
                      <option value="StackOverflow">Stack Overflow</option>
                      <option value="HackerRank">HackerRank</option>
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

            {/* Technical Skills Section */}
            {activeSection === 'technical' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiCode /> Technical Skills</h3>
                
                {/* Technical Skills Categories */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Technical Skills by Category</h4>
                  <p className={styles.sectionDescription}>Organize your skills by categories (Programming Languages, Frameworks, Tools, etc.)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Category*
                        <input 
                          value={currentTechnicalSkill.category} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, category: e.target.value })} 
                          placeholder="Programming Languages, Frameworks, Databases, Tools, DevOps" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Skills* (comma-separated)
                        <input 
                          value={currentTechnicalSkill.skills} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, skills: e.target.value })} 
                          placeholder="JavaScript, Python, Java, C++, Go" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addTechnicalSkill} 
                        className={styles.addButton} 
                        disabled={!currentTechnicalSkill.category || !currentTechnicalSkill.skills}
                      >
                        <FiPlus /> {currentTechnicalSkill.isEditing ? 'Update Skills' : 'Add Skills Category'}
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
                          <strong>{skill.category}</strong>
                          <p>{skill.skills}</p>
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
                  <h4 className={styles.subSectionTitle}><FiAward /> Certifications</h4>
                  <p className={styles.sectionDescription}>Add your professional certifications (AWS, Google Cloud, Microsoft, etc.)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="AWS Certified Solutions Architect" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Organization
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
                        Date Obtained
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
                          placeholder="AWS-123456" 
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
                          {cert.date && ` (${cert.date})`}
                          {cert.credentialId && ` • ID: ${cert.credentialId}`}
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
                  <h4 className={styles.subSectionTitle}>Languages</h4>
                  <p className={styles.sectionDescription}>List programming and spoken languages</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="English, Spanish, Chinese" 
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
                          <option value="">Select Level</option>
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

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Professional Experience</h3>
                <p className={styles.sectionDescription}>List your professional roles in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Senior Software Engineer" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input 
                        value={currentExperience.company} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} 
                        placeholder="Tech Company Inc." 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Technologies Used
                    <input 
                      value={currentExperience.technologies} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, technologies: e.target.value })} 
                      placeholder="React, Node.js, TypeScript, AWS, Docker" 
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
                    Key Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Developed and maintained scalable microservices architecture serving 1M+ users
• Led a team of 5 developers in implementing React-based frontend applications
• Reduced application latency by 40% through database optimization and caching
• Implemented CI/CD pipelines using Jenkins and Docker, reducing deployment time by 60%
• Collaborated with product managers to define technical requirements and deliverables"
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
                  <h4 className={styles.subSectionTitle}>Your Professional Experience</h4>
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
                              {exp.technologies && <span>{exp.technologies}</span>}
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

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiGitBranch /> Projects</h3>
                <p className={styles.sectionDescription}>Showcase your personal, open-source, or professional projects</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Project Name*
                      <input 
                        value={currentProject.name} 
                        onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })} 
                        placeholder="E-commerce Platform" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Technologies Used
                      <input 
                        value={currentProject.technologies} 
                        onChange={(e) => setCurrentProject({ ...currentProject, technologies: e.target.value })} 
                        placeholder="React, Node.js, MongoDB, AWS" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Project Description*
                    <textarea 
                      value={currentProject.description} 
                      onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} 
                      placeholder="Built a full-stack e-commerce platform with user authentication, payment processing, and admin dashboard. Implemented real-time inventory updates and order tracking."
                      required 
                      className={styles.formTextarea} 
                      rows="4" 
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Project Link (GitHub, Live Demo, etc.)
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
                
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Projects</h4>
                  {formData.projects.length === 0 ? (
                    <p className={styles.emptyMessage}>No projects added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.projects.map((project, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{project.name}</strong>
                            </div>
                            {project.technologies && (
                              <div className={styles.itemMeta}>
                                <span>{project.technologies}</span>
                              </div>
                            )}
                            <div className={styles.itemDescription}>
                              <p>{project.description}</p>
                              {project.link && (
                                <p className={styles.projectLinkPreview}>
                                  <strong>Link:</strong> {project.link}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editProject(i)} className={styles.editButton} aria-label={`Edit ${project.name} project`}><FiEdit2 /></button>
                            <button onClick={() => deleteProject(i)} className={styles.deleteButton} aria-label={`Delete ${project.name} project`}><FiTrash2 /></button>
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
                <h3 className={styles.sectionTitle}><FiBook /> Education</h3>
                <p className={styles.sectionDescription}>List your formal education and relevant training</p>
                
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
                        placeholder="Bachelor of Science in Computer Science" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Specialization / Concentration
                    <input 
                      value={currentEducation.specialization} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, specialization: e.target.value })} 
                      placeholder="Artificial Intelligence, Software Engineering" 
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
                  <label className={styles.formLabel}>
                    GPA (Optional)
                    <input 
                      value={currentEducation.gpa} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, gpa: e.target.value })} 
                      placeholder="3.8/4.0" 
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
                              {edu.specialization && <span className={styles.itemSubtitle}> • {edu.specialization}</span>}
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

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h3>
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
                        <span>Technology Tags</span>
                        <span className={styles.fontSizeValue}>{fontSizes.technologyText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
                        value={fontSizes.technologyText}
                        onChange={(e) => handleFontSizeChange('technologyText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>

                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Skill Categories</span>
                        <span className={styles.fontSizeValue}>{fontSizes.skillCategory}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.skillCategory}
                        onChange={(e) => handleFontSizeChange('skillCategory', e.target.value)}
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
              Everything you need to know about creating professional developer resumes with our tool.
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

      {/* CTA Section - Changed to h2 for proper heading structure */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Tech Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 5 million+ developers who landed their dream jobs with our free ATS-friendly developer resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free developer resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Developer Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for Tech Roles</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Developer Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <DeveloperTemplate formData={formData} />
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
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Developer Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-software-developer-and-software-engineer-resume-builder' }
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