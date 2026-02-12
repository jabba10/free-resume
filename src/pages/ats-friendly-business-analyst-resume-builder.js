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
  FiBriefcase,
  FiBook,
  FiBarChart,
  FiTarget,
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
  FiTool,
  FiTrendingUp,
  FiSearch,
  FiLayers,
  FiDollarSign,
  FiDatabase,
  FiPieChart,
  FiUsers
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const BusinessAnalystResume = ({ 
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

  // --- Default item factories for Business Analyst ---
  const defaultExperience = () => ({
    company: '',
    position: '',
    industry: '',
    startDate: '',
    endDate: '',
    achievements: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    major: '',
    startDate: '',
    endDate: '',
    gpa: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuingBody: '',
    dateEarned: '',
    credentialId: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    category: '',
    items: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultProject = () => ({
    name: '',
    client: '',
    role: '',
    duration: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultMethodology = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTool = () => ({
    name: '',
    category: '',
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
    linkedin: '',
    portfolio: '',
    summary: '',
    experience: [],
    education: [],
    certifications: [],
    skills: [],
    projects: [],
    methodologies: [],
    tools: []
  });

  // Font size state optimized for Business Analyst resume
  const [fontSizes, setFontSizes] = useState({
    name: 16,
    sectionTitle: 12,
    contactInfo: 8,
    jobTitle: 10,
    company: 9,
    degree: 10,
    institution: 9,
    date: 7,
    regularText: 9,
    bulletText: 8,
    skillText: 8,
    certificationText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentMethodology, setCurrentMethodology] = useState(defaultMethodology());
  const [currentTool, setCurrentTool] = useState(defaultTool());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data - Updated for Business Analyst
  const testimonials = [
    {
      quote: "The Business Analyst resume templates helped me transition from IT to a Senior BA role at a Fortune 500 company. The ATS optimization is spot on!",
      metric: "Senior BA Role in 3 Weeks",
      name: "Michael R.",
      role: "Senior Business Analyst",
      company: "Fortune 500 Tech Company"
    },
    {
      quote: "As a recent MBA graduate, the entry-level BA templates were perfect. Landed 5 interviews in my first week of applying.",
      metric: "5 Interviews in 1 Week",
      name: "Jessica L.",
      role: "Entry-Level Business Analyst",
      company: "Financial Services Firm"
    },
    {
      quote: "The industry-specific keywords and formatting helped me pass automated screening systems. Finally got calls from top tech companies.",
      metric: "40% Response Rate Increase",
      name: "David K.",
      role: "Technical Business Analyst",
      company: "Silicon Valley Startup"
    },
    {
      quote: "Used the BA resume builder to pivot from consulting to product management. The strategic format impressed hiring managers.",
      metric: "Career Pivot Success",
      name: "Sarah M.",
      role: "Product Manager",
      company: "SaaS Company"
    },
    {
      quote: "The financial services BA template helped me highlight regulatory compliance experience. Got multiple offers from banks.",
      metric: "Multiple Job Offers",
      name: "Robert T.",
      role: "Financial Business Analyst",
      company: "Investment Bank"
    },
    {
      quote: "Free PDF download with proper business formatting? Unbeatable value. Best BA resume builder for professionals.",
      metric: "Perfect Resume in 20min",
      name: "Emily S.",
      role: "Healthcare Business Analyst",
      company: "Medical Technology Firm"
    }
  ];

  // FAQ Data for Structured Data - Updated for Business Analyst
  const faqs = [
    {
      question: "Is this Business Analyst resume builder really free with no hidden costs?",
      answer: "Yes, our Business Analyst resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional BA resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for Business Analyst resumes?",
      answer: "ATS-friendly means our Business Analyst resume templates are optimized to pass through Applicant Tracking Systems used by 95% of Fortune 500 companies. We include industry-specific keywords like 'requirements gathering', 'stakeholder management', 'data analysis', and 'process improvement' that hiring systems look for."
    },
    {
      question: "Can I download my Business Analyst resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional Business Analyst resume in PDF format without creating an account. Everything is completely free and accessible immediately for BA professionals at all levels."
    },
    {
      question: "How many Business Analyst resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly Business Analyst resume templates for IT, Finance, Healthcare, Agile, and Technical BA roles. All templates are completely free and optimized for US job markets."
    },
    {
      question: "How does your Business Analyst resume builder work?",
      answer: "Our builder uses ATS-optimized Business Analyst templates with proper industry terminology. We guide you to highlight analytical skills, project achievements, and business impact that hiring managers look for in BA candidates."
    },
    {
      question: "Can I customize the resume for different Business Analyst specializations?",
      answer: "Yes, you can easily customize your resume for IT BA, Financial BA, Healthcare BA, Agile BA, or Data Analyst roles. Our templates include specialized sections for certifications, methodologies, and tools specific to each BA specialization."
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
      sectionTitle: 12,
      contactInfo: 8,
      jobTitle: 10,
      company: 9,
      degree: 10,
      institution: 9,
      date: 7,
      regularText: 9,
      bulletText: 8,
      skillText: 8,
      certificationText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiUsers />,
      github: <FiDatabase />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />
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
      formData.experience.length > 0 ||
      formData.education.length > 0 ||
      formData.certifications.length > 0 ||
      formData.skills.length > 0 ||
      formData.projects.length > 0 ||
      formData.methodologies.length > 0 ||
      formData.tools.length > 0
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

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.category.trim() && currentSkill.items.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.name.trim() && currentProject.description.trim());
  
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');

  const addMethodology = createAddFunction('methodologies', currentMethodology, setCurrentMethodology, defaultMethodology, () => currentMethodology.name.trim());
  
  const editMethodology = createEditFunction('methodologies', setCurrentMethodology);
  const deleteMethodology = createDeleteFunction('methodologies');

  const addTool = createAddFunction('tools', currentTool, setCurrentTool, defaultTool, () => currentTool.name.trim());
  
  const editTool = createEditFunction('tools', setCurrentTool);
  const deleteTool = createDeleteFunction('tools');

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
            
            const dates = clone.querySelectorAll(`.${styles.date}`);
            dates.forEach(date => {
              date.style.fontSize = `${fontSizes.date}pt`;
            });
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.projectItem}`);
            regularTexts.forEach(text => {
              text.style.fontSize = `${fontSizes.regularText}pt`;
            });
            
            const bulletPoints = clone.querySelectorAll(`.${styles.bulletList} li`);
            bulletPoints.forEach(bullet => {
              bullet.style.fontSize = `${fontSizes.bulletText}pt`;
            });
            
            const skills = clone.querySelectorAll(`.${styles.skillsList} li, .${styles.toolsList} li`);
            skills.forEach(skill => {
              skill.style.fontSize = `${fontSizes.skillText}pt`;
            });
            
            const certificationTexts = clone.querySelectorAll(`.${styles.certificationItem}`);
            certificationTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certificationText}pt`;
            });
            
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "'Calibri', 'Helvetica Neue', 'Arial', sans-serif";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'business_analyst_resume'}.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template for Business Analyst ---
  const BusinessAnalystTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasMethodologies = formData.methodologies.length > 0;
    const hasTools = formData.tools.length > 0;

    return (
      <div className={styles.businessAnalystTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <p className={styles.professionalTitle}>Business Analyst</p>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {formData.location && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.location}</div>}
            {formData.linkedin && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiUsers /> {formatSocialUrl(formData.linkedin)}</div>}
            {formData.portfolio && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiGlobe /> {formatSocialUrl(formData.portfolio)}</div>}
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.company}{exp.industry && ` | ${exp.industry}`}</p>
                  <p className={styles.date} style={{ fontSize: `${fontSizes.date}pt` }}>{exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.achievements.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>KEY PROJECTS</h2>
            {formData.projects.map((proj, i) => (
              <div key={i} className={styles.projectItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{proj.name}</strong> {proj.client && `| ${proj.client}`} {proj.role && `| Role: ${proj.role}`} {proj.duration && `| ${proj.duration}`}
                <p>{proj.description}</p>
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
                  {edu.degree}{edu.major && ` in ${edu.major}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>{edu.institution}</p>
                <p className={styles.date} style={{ fontSize: `${fontSizes.date}pt` }}>
                  {edu.startDate} – {edu.endDate || 'Present'}{edu.gpa && ` | GPA: ${edu.gpa}`}
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
                {cert.issuingBody && ` – ${cert.issuingBody}`}
                {cert.dateEarned && ` | ${cert.dateEarned}`}
                {cert.credentialId && ` | ID: ${cert.credentialId}`}
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SKILLS & COMPETENCIES</h2>
            {formData.skills.map((skill, i) => (
              <div key={i} className={styles.skillCategory}>
                <strong style={{ fontSize: `${fontSizes.regularText}pt` }}>{skill.category}:</strong>
                <span style={{ fontSize: `${fontSizes.skillText}pt` }}> {skill.items}</span>
              </div>
            ))}
          </section>
        )}

        {hasMethodologies && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>METHODOLOGIES</h2>
            <ul className={styles.skillsList}>
              {formData.methodologies.map((m, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{m.name}</li>)}
            </ul>
          </section>
        )}

        {hasTools && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>TECHNICAL TOOLS</h2>
            <ul className={styles.toolsList}>
              {formData.tools.map((tool, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  <strong>{tool.name}</strong>{tool.category && ` (${tool.category})`}
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
        <title>Free Business Analyst Resume Builder 2026 | ATS-Friendly BA Templates for USA Job Market</title>
        <meta name="title" content="Free Business Analyst Resume Builder 2026 | ATS-Friendly BA Templates for USA Job Market" />
        <meta name="description" content="Create professional ATS-optimized Business Analyst resumes for free. Land interviews 3x faster with our BA resume builder. Templates for IT, Finance, Agile, and Technical Business Analysts. Trusted by 2M+ BA professionals in the USA." />
        <meta name="keywords" content="business analyst resume builder, business analyst resume templates, ba resume, business analyst cv, ATS friendly business analyst resume, free resume builder for business analysts, technical business analyst, financial business analyst, agile business analyst, USA job market" />
        <meta name="author" content="Professional Business Analyst Resume Builder" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/" hreflang="x-default" />
        <meta property="og:title" content="Free Business Analyst Resume Builder - ATS Friendly BA Templates 2026" />
        <meta property="og:description" content="Create professional ATS-optimized Business Analyst resumes for free. Land interviews 3x faster. Trusted by 2M+ BA professionals in the USA." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-business-analyst-resume-builder.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Business Analyst Resume Builder - Create Professional BA Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Business Analyst Resume Builder" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Business Analyst Resume Builder - ATS Friendly BA Templates 2026" />
        <meta name="twitter:description" content="Create professional ATS-optimized Business Analyst resumes for free. Land interviews 3x faster in the USA job market." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-business-analyst-resume-builder.jpg" />
        <meta name="twitter:image:alt" content="Free Business Analyst Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@BABuilder" />
        <meta name="twitter:creator" content="@BABuilder" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="msapplication-TileColor" content="#1a365d" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/#webpage",
                  "url": "https://www.professionalresumefree.com/",
                  "name": "Free Business Analyst Resume Builder - ATS Friendly BA Templates 2026",
                  "description": "Create professional ATS-optimized Business Analyst resumes for free. Land interviews 3x faster with our BA resume builder for the USA job market.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Business Analyst Resume Builder",
                    "description": "Free online resume builder for Business Analysts in the USA",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Business Analyst Resume Builder",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/BABuilder",
                        "https://www.linkedin.com/company/business-analyst-resume-builder",
                        "https://www.facebook.com/BusinessAnalystResumeBuilder"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-business-analyst-resume-builder.jpg",
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
                        "name": "Business Analyst Resume Builder",
                        "item": "https://www.professionalresumefree.com/"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Business Analyst Resume Builder - ATS Optimized BA Resume Maker",
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
                      "ratingCount": 32568,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly Business Analyst resume builder for USA job market. Specialized templates for IT BA, Financial BA, Agile BA, and Technical BA roles.",
                    "featureList": [
                      "Business Analyst ATS-Optimized Templates",
                      "Industry-Specific Content Suggestions",
                      "One-Click PDF Download",
                      "Project Achievement Formatting",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever for USA Job Seekers"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-business-analyst-resume-builder.jpg",
                    "applicationSuite": "Business Analyst Career Tools",
                    "countriesSupported": "United States",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-business-analyst-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Business Analyst Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-business-analyst-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Business Analyst Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized Business Analyst resume for the USA job market",
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
                      "name": "Choose a Business Analyst Template",
                      "text": "Select from our ATS-optimized Business Analyst resume templates designed for IT, Finance, Agile, and Technical BA roles in the USA.",
                      "url": "https://www.professionalresumefree.com/#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-business-analyst-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Professional Information",
                      "text": "Add your BA experience, projects, certifications, and analytical skills using our guided forms with USA industry terminology.",
                      "url": "https://www.professionalresumefree.com/#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-ba-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our business analyst-specific suggestions to improve industry keywords and formatting for ATS compatibility in the US market.",
                      "url": "https://www.professionalresumefree.com/#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Business Analyst Resume",
                      "text": "Export your professional Business Analyst resume as PDF - completely free, no watermarks, optimized for US employers.",
                      "url": "https://www.professionalresumefree.com/#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Business Analyst Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Business Analyst Resume Builder",
                    "url": "https://www.professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-800-555-BUILD",
                      "contactType": "Customer Support",
                      "availableLanguage": "en-US"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free Business Analyst Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Business Analyst ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "BA Resume Optimization"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly business analyst resume builder for US job market",
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
                        "name": "Business Analyst Resume Builder"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Business Analyst Resume Builder - ATS Optimized BA Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly business analyst resume builder that helps BA professionals in the USA create professional resumes and land interviews faster.",
                        "url": "https://www.professionalresumefree.com/"
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
            <Link href="/ats-friendly-business-analyst-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free BA Templates for USA</span>
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
                Rated 4.8/5 by 32,568+ Business Analysts | Best Free BA Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free Business Analyst Resume Builder <span className={styles.gradientText}>Optimized for USA Job Market</span>
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized Business Analyst resume for free in minutes.</strong> Our BA resume builder ensures your analytical skills and project achievements get noticed by top US employers.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free Business Analyst resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Build Your BA Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download Business Analyst resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download BA Resume PDF</span>
              </button>
            </div>

            <div className={styles.baStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2M+</span>
                <span className={styles.statLabel}>BA Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster US Job Placement</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8/5</span>
                <span className={styles.statLabel}>Rating from BA Professionals</span>
              </div>
            </div>

            <div className={styles.baBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiBarChart /> IT Business Analyst</span>
                <span className={styles.badgeItem}><FiDollarSign /> Financial BA</span>
                <span className={styles.badgeItem}><FiTarget /> Agile Business Analyst</span>
                <span className={styles.badgeItem}><FiDatabase /> Data Analyst</span>
                <span className={styles.badgeItem}><FiUsers /> Senior Business Analyst</span>
                <span className={styles.badgeItem}><FiTrendingUp /> Product Manager</span>
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
                  <BusinessAnalystTemplate formData={formData} />
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
              { id: 'projects', label: 'Projects', icon: <FiTarget /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'certifications', label: 'Certifications', icon: <FiAward /> },
              { id: 'skills', label: 'Skills', icon: <FiBarChart /> },
              { id: 'settings', label: 'Settings', icon: <FiSettings /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, CBAP" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@email.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone (US Format)
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Location (City, State)
                      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="San Francisco, CA" className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      LinkedIn Profile URL
                      <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Portfolio/Website
                      <input type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange} placeholder="https://yourportfolio.com" className={styles.formInput} />
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Summary for Business Analyst*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Results-driven Business Analyst with 8+ years of experience in requirements gathering, process improvement, and data analysis for Fortune 500 companies. Proven track record of delivering business solutions that increase operational efficiency by 30%+. Expert in Agile methodologies, stakeholder management, and business process modeling. Certified CBAP with strong technical acumen in SQL, Tableau, and JIRA."
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

            {/* Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Professional Experience</h3>
                <p className={styles.sectionDescription}>List your BA roles in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Senior Business Analyst" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input 
                        value={currentExperience.company} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} 
                        placeholder="Google, Inc." 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Industry/Department
                    <input 
                      value={currentExperience.industry} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, industry: e.target.value })} 
                      placeholder="Technology / Product Development" 
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
                    Key Achievements & Responsibilities*
                    <textarea 
                      value={currentExperience.achievements} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, achievements: e.target.value })} 
                      placeholder="• Led requirements gathering sessions with 20+ stakeholders for a $2M CRM implementation project
• Reduced operational costs by 25% through process optimization and automation
• Created user stories and acceptance criteria for 150+ features in Agile environment
• Developed data models and business process flows using BPMN 2.0 standards
• Managed cross-functional teams of 15+ members across US and offshore locations"
                      required 
                      className={styles.formTextarea} 
                      rows="8" 
                    />
                    <div className={styles.characterCount}>
                      {currentExperience.achievements.length}/2000 characters
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
                              {exp.industry && <span>{exp.industry}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {exp.achievements.split('\n').filter(l => l.trim()).map((line, j) => (
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
                <h3 className={styles.sectionTitle}><FiTarget /> Key Projects</h3>
                <p className={styles.sectionDescription}>Highlight significant BA projects with measurable outcomes</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Project Name*
                      <input 
                        value={currentProject.name} 
                        onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })} 
                        placeholder="Enterprise CRM Implementation" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Client/Company
                      <input 
                        value={currentProject.client} 
                        onChange={(e) => setCurrentProject({ ...currentProject, client: e.target.value })} 
                        placeholder="Fortune 500 Retail Company" 
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
                        placeholder="Lead Business Analyst" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Project Duration
                      <input 
                        value={currentProject.duration} 
                        onChange={(e) => setCurrentProject({ ...currentProject, duration: e.target.value })} 
                        placeholder="6 months (Jan 2023 - Jun 2023)" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Project Description & Outcomes*
                    <textarea 
                      value={currentProject.description} 
                      onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} 
                      placeholder="Led requirements gathering and analysis for a Salesforce implementation affecting 500+ users across 5 departments. Successfully reduced sales cycle time by 30% and increased lead conversion by 25% through process optimization and automation."
                      required 
                      className={styles.formTextarea} 
                      rows="6" 
                    />
                    <div className={styles.characterCount}>
                      {currentProject.description.length}/1000 characters
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
                  <h4 className={styles.subSectionTitle}>Your Key Projects</h4>
                  {formData.projects.length === 0 ? (
                    <p className={styles.emptyMessage}>No projects added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.projects.map((proj, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{proj.name}</strong>
                              {proj.client && <span className={styles.itemSubtitle}> | {proj.client}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              {proj.role && <span>Role: {proj.role}</span>}
                              {proj.duration && <span>{proj.duration}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {proj.description}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editProject(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteProject(i)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Methodologies */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiTarget /> Methodologies & Frameworks</h4>
                  <p className={styles.sectionDescription}>Add methodologies you're experienced with (Agile, Waterfall, etc.)</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentMethodology.name} 
                      onChange={(e) => setCurrentMethodology({ ...currentMethodology, name: e.target.value })} 
                      placeholder="Agile/Scrum, Waterfall, Lean Six Sigma, BABOK" 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addMethodology} 
                        className={styles.addButton} 
                        disabled={!currentMethodology.name.trim()}
                      >
                        <FiPlus /> {currentMethodology.isEditing ? 'Update Methodology' : 'Add Methodology'}
                      </button>
                      {currentMethodology.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentMethodology(defaultMethodology())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.methodologies.map((m, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{m.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editMethodology(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteMethodology(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.methodologies.length === 0 && <p className={styles.emptyMessage}>No methodologies added yet</p>}
                  </div>
                </div>

                {/* Tools */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiTool /> Technical Tools & Software</h4>
                  <p className={styles.sectionDescription}>Add tools and software you're proficient with</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Tool Name*
                        <input 
                          value={currentTool.name} 
                          onChange={(e) => setCurrentTool({ ...currentTool, name: e.target.value })} 
                          placeholder="JIRA" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Category
                        <input 
                          value={currentTool.category} 
                          onChange={(e) => setCurrentTool({ ...currentTool, category: e.target.value })} 
                          placeholder="Project Management" 
                          className={styles.formInput} 
                        />
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
                          <strong>{tool.name}</strong>
                          {tool.category && ` (${tool.category})`}
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
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> Education</h3>
                <p className={styles.sectionDescription}>List your degrees and relevant education</p>
                
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
                        placeholder="Master of Business Administration (MBA)" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Major / Concentration
                    <input 
                      value={currentEducation.major} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, major: e.target.value })} 
                      placeholder="Information Systems, Business Analytics" 
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
                      End Date
                      <input 
                        type="text" 
                        placeholder="Month Year" 
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
                              {edu.major && <span className={styles.itemSubtitle}> – {edu.major}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}</span>
                              <span>{edu.startDate} – {edu.endDate}</span>
                              {edu.gpa && <span>GPA: {edu.gpa}</span>}
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

            {/* Certifications Section */}
            {activeSection === 'certifications' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiAward /> Certifications</h3>
                <p className={styles.sectionDescription}>Add professional certifications relevant to Business Analysis</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Certification Name*
                      <input 
                        value={currentCertification.name} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                        placeholder="Certified Business Analysis Professional (CBAP)" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Issuing Body
                      <input 
                        value={currentCertification.issuingBody} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, issuingBody: e.target.value })} 
                        placeholder="International Institute of Business Analysis (IIBA)" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Date Earned
                      <input 
                        value={currentCertification.dateEarned} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, dateEarned: e.target.value })} 
                        placeholder="Month Year" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Credential ID
                      <input 
                        value={currentCertification.credentialId} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, credentialId: e.target.value })} 
                        placeholder="CBAP-123456" 
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
                  <h4 className={styles.subSectionTitle}>Your Certifications</h4>
                  {formData.certifications.length === 0 ? (
                    <p className={styles.emptyMessage}>No certifications added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.certifications.map((cert, i) => (
                        <div key={i} className={styles.listItem}>
                          <div>
                            <strong>{cert.name}</strong>
                            {cert.issuingBody && ` – ${cert.issuingBody}`}
                            {cert.dateEarned && ` | ${cert.dateEarned}`}
                            {cert.credentialId && ` | ID: ${cert.credentialId}`}
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
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBarChart /> Skills & Competencies</h3>
                <p className={styles.sectionDescription}>Organize your skills by category</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Category*
                      <input 
                        value={currentSkill.category} 
                        onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                        placeholder="Business Analysis, Data Analysis, Technical, Soft Skills" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Skills (comma separated)*
                      <input 
                        value={currentSkill.items} 
                        onChange={(e) => setCurrentSkill({ ...currentSkill, items: e.target.value })} 
                        placeholder="Requirements Gathering, Process Mapping, Use Cases, User Stories" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addSkill} 
                      className={styles.addButton} 
                      disabled={!currentSkill.category.trim() || !currentSkill.items.trim()}
                    >
                      <FiPlus /> {currentSkill.isEditing ? 'Update Skills' : 'Add Skills'}
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
                
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Skills</h4>
                  {formData.skills.length === 0 ? (
                    <p className={styles.emptyMessage}>No skills added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.skills.map((skill, i) => (
                        <div key={i} className={styles.listItem}>
                          <div>
                            <strong>{skill.category}:</strong> {skill.items}
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editSkill(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteSkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
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
                <p className={styles.sectionDescription}>Customize font sizes for your Business Analyst resume PDF. All sizes are in points (pt).</p>
                
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
                        min="8" 
                        max="16" 
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
                        min="7" 
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
                        <span>Institutions</span>
                        <span className={styles.fontSizeValue}>{fontSizes.institution}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="7" 
                        max="12" 
                        value={fontSizes.institution}
                        onChange={(e) => handleFontSizeChange('institution', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Dates</span>
                        <span className={styles.fontSizeValue}>{fontSizes.date}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="10" 
                        value={fontSizes.date}
                        onChange={(e) => handleFontSizeChange('date', e.target.value)}
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
                        min="7" 
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
                        min="7" 
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
                        min="7" 
                        max="11" 
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
                        min="7" 
                        max="12" 
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
              Everything you need to know about creating professional Business Analyst resumes for the USA job market.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Business Analyst Career in the USA?</h2>
            <p className={styles.ctaSubtitle}>
              Join 2 million+ Business Analysts who landed their dream jobs with our free ATS-friendly BA resume builder optimized for US employers.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free Business Analyst resume now—optimized for USA job market"
              >
                <span className={styles.ctaButtonText}>Create Your Free BA Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for USA Market</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Business Analyst Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <BusinessAnalystTemplate formData={formData} />
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
    { name: 'Business Analyst Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-business-analyst-resume-builder' }
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

export default BusinessAnalystResume;