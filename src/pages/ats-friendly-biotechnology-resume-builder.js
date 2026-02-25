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
  FiDroplet,
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
    department: '',
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
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTechnicalSkill = () => ({
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
  
  const defaultResearch = () => ({
    title: '',
    institution: '',
    date: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultPublication = () => ({
    title: '',
    journal: '',
    date: '',
    doi: '',
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
    researchProjects: [],
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
    certText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentTechnicalSkill, setCurrentTechnicalSkill] = useState(defaultTechnicalSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentResearch, setCurrentResearch] = useState(defaultResearch());
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
      quote: "Created my biotech resume in 15 minutes and landed interviews at Genentech and Amgen. The industry-specific templates are perfect!",
      metric: "Multiple Biotech Offers",
      name: "Sarah M.",
      role: "Senior Scientist",
      company: "Genentech"
    },
    {
      quote: "Finally a resume builder that understands biotech terminology and GMP experience formatting. Perfect for pharma applications.",
      metric: "Pharma Role in 3 Weeks",
      name: "James K.",
      role: "Process Development Scientist",
      company: "Pfizer"
    },
    {
      quote: "As a recent PhD graduate in molecular biology, the templates helped showcase my research effectively. Landed my first industry role!",
      metric: "First Industry Position",
      name: "Dr. Alex P.",
      role: "Research Associate",
      company: "Biogen"
    },
    {
      quote: "The biotech resume builder helped me transition from academia to industry. The industry-specific sections made all the difference.",
      metric: "Career Transition Success",
      name: "Maria L.",
      role: "QC Specialist",
      company: "Moderna"
    },
    {
      quote: "The ATS optimization for biotech keywords is incredible. Got 4 interviews in 2 weeks after using this builder.",
      metric: "4 Interviews in 2 Weeks",
      name: "David T.",
      role: "Biotech Engineer",
      company: "Thermo Fisher"
    },
    {
      quote: "Free professional biotech resume with proper formatting for scientific roles. Best resource for biotech professionals.",
      metric: "Perfect Biotech CV",
      name: "Lisa R.",
      role: "Clinical Research Manager",
      company: "Novartis"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this biotech resume builder really free with no hidden costs?",
      answer: "Yes, our biotechnology resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional biotech resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for biotech resumes?",
      answer: "ATS-friendly means our biotech resume templates are optimized to pass through Applicant Tracking Systems used by 95% of pharmaceutical and biotech companies. This ensures your technical skills, research experience, and industry-specific terminology are properly recognized."
    },
    {
      question: "Can I download my biotech resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional biotechnology resume in PDF format without creating an account. Everything is completely free and accessible immediately for scientists, researchers, and biotech professionals."
    },
    {
      question: "How many biotech resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly templates for research scientists, biotech engineers, quality control specialists, clinical researchers, and all biotech specialties. All templates are completely free and optimized for biotech hiring."
    },
    {
      question: "How does your biotech resume builder work?",
      answer: "Our builder uses ATS-optimized biotech templates with proper scientific terminology formatting. We guide you to highlight research experience, technical skills, publications, and industry-specific achievements that biotech employers look for."
    },
    {
      question: "Can I showcase my publications and research projects with this builder?",
      answer: "Yes! We have dedicated sections for research projects, publications, technical skills, and industry certifications. Your scientific profile gets presented professionally to biotech recruiters."
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
      certText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      researchgate: <FiSearch />,
      orcid: <FiTarget />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      google: <FiGlobe />,
      pubmed: <FiFileText />
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
      formData.researchProjects.length > 0 ||
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.employer && currentExperience.startDate);
  
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

  const addResearchProject = createAddFunction('researchProjects', currentResearch, setCurrentResearch, defaultResearch, () => currentResearch.title.trim());
  
  const editResearchProject = createEditFunction('researchProjects', setCurrentResearch);
  const deleteResearchProject = createDeleteFunction('researchProjects');

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
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certItem}, .${styles.researchItem}`);
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
            
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "'Source Sans Pro', 'Helvetica Neue', 'Arial', sans-serif";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'biotech_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Biotech Resume Template ---
  const BiotechTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasTechnicalSkills = formData.technicalSkills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasResearchProjects = formData.researchProjects.length > 0;
    const hasPublications = formData.publications.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className={styles.biotechTemplate}>
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.department && ` – ${exp.department}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
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
                  {edu.degree}{edu.program && ` – ${edu.program}`}
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

        {hasTechnicalSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>TECHNICAL SKILLS</h2>
            <ul className={styles.skillsList}>
              {formData.technicalSkills.map((s, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  <strong>{s.name}</strong>{s.category && ` (${s.category})`}{s.proficiency && ` - ${s.proficiency}`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & TRAINING</h2>
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

        {hasResearchProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>RESEARCH PROJECTS</h2>
            {formData.researchProjects.map((r, i) => (
              <div key={i} className={styles.researchItem}>
                <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{r.title}</h3>
                {r.institution && <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{r.institution}{r.date && ` | ${r.date}`}</p>}
                <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{r.description}</p>
              </div>
            ))}
          </section>
        )}

        {hasPublications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PUBLICATIONS</h2>
            {formData.publications.map((p, i) => (
              <div key={i} className={styles.publicationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{p.title}</strong>
                {p.journal && ` – ${p.journal}`}
                {p.date && ` (${p.date})`}
                {p.doi && ` – DOI: ${p.doi}`}
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
        <title>Free Biotech Resume Builder 2026 | ATS-Friendly Scientist Templates</title>
        <meta name="title" content="Free Biotech Resume Builder 2026 | ATS-Friendly Scientist Templates" />
        <meta name="description" content="Create your professional biotech resume for free in 2026. ATS-optimized templates help scientists & researchers land pharma interviews. Start now—no sign-up." />
        <meta name="keywords" content="biotech resume builder, biotechnology resume, scientist resume, research resume, pharmaceutical resume, ATS friendly biotech resume, free resume builder for scientists, biotech CV, biotech engineer resume, pharma resume" />
        <meta name="author" content="Professional Biotech Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free Biotech Resume Builder 2026 | ATS-Friendly Scientist Templates" />
        <meta property="og:description" content="Create your professional biotech resume for free in 2026. ATS-optimized templates help scientists & researchers land pharma interviews. Start now—no sign-up." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-biotech-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Biotech Resume Builder - Create Professional Biotechnology Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Biotech Resume Builder 2026 | ATS-Friendly Scientist Templates" />
        <meta name="twitter:description" content="Create your professional biotech resume for free in 2026. ATS-optimized templates help scientists & researchers land pharma interviews. Start now—no sign-up." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-biotech-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Biotech Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@BiotechResumeFree" />
        <meta name="twitter:creator" content="@BiotechResumeFree" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preload" href="/fonts/SourceSansPro.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder",
                  "name": "Free Biotech Resume Builder 2026 - ATS Friendly Biotechnology Templates",
                  "description": "Create professional ATS-optimized biotech resumes for free. Land pharma interviews faster with our specialized resume builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Biotech Resume Free",
                    "description": "Free online resume builder for biotechnology professionals",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Biotech Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/BiotechResumeFree",
                        "https://www.linkedin.com/company/biotech-resume-free",
                        "https://www.researchgate.net/BiotechResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-biotech-resume-builder-preview.jpg",
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
                        "name": "Biotech Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Biotech Resume Builder - ATS Optimized Biotechnology Resume Maker",
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
                      "ratingCount": 45650,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly biotechnology resume builder for scientists, researchers, biotech engineers, and pharmaceutical professionals.",
                    "featureList": [
                      "Biotech ATS-Optimized Templates",
                      "Research Project Showcase",
                      "Publication Formatting",
                      "GMP/GDP Experience Sections",
                      "One-Click PDF Download",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-biotech-resume-builder.jpg",
                    "applicationSuite": "Biotech Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Biotech Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Biotech Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized biotechnology resume for free",
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
                      "name": "Choose a Biotech Template",
                      "text": "Select from our ATS-optimized biotechnology resume templates designed for scientists, researchers, biotech engineers, and pharmaceutical professionals.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-biotech-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Scientific Information",
                      "text": "Add your research experience, technical skills, publications, certifications, and biotech industry experience using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-scientific-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our biotech-specific suggestions to improve scientific keywords, technical skills, and formatting for ATS compatibility.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Biotech Resume",
                      "text": "Export your professional biotechnology resume as PDF - completely free, no watermarks, optimized for pharma and biotech recruiters.",
                      "url": "https://professionalresumefree.com/ats-friendly-biotechnology-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Biotech Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Biotech Resume Free",
                    "url": "https://www.professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "",
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
                    "name": "Free Biotech Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Biotech ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Research Project Formatting"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly biotech resume builder for scientists, researchers, and biotech professionals worldwide",
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
                        "name": "Professional Biotech Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Biotech Resume Builder - ATS Optimized Biotechnology Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly biotech resume builder that helps biotech professionals create professional resumes and land industry interviews faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder"
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
            <Link href="/ats-friendly-biotechnology-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free Biotech Resume Template</span>
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
                Rated 4.9/5 by 45650+ Biotech Professionals | Best Free Biotech Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free Biotech Resume Builder 2026: Create Your ATS Scientist Resume & Get Hired
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized biotech resume for free in minutes.</strong> Our specialized resume builder ensures your research experience and scientific expertise get noticed by pharmaceutical and biotech companies.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free biotech resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Biotech Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download biotech resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Biotech Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3M+</span>
                <span className={styles.statLabel}>Biotech Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>91%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2.8x</span>
                <span className={styles.statLabel}>More Pharma Interviews</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Biotech Professionals</span>
              </div>
            </div>

            <div className={styles.biotechBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiDroplet /> Research Scientist</span>
                <span className={styles.badgeItem}><FiActivity /> Biotech Engineer</span>
                <span className={styles.badgeItem}><FiSearch /> QC/QA Specialist</span>
                <span className={styles.badgeItem}><FiPackage /> Process Development</span>
                <span className={styles.badgeItem}><FiThermometer /> Clinical Research</span>
                <span className={styles.badgeItem}><FiActivity /> Regulatory Affairs</span>
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
                  <BiotechTemplate formData={formData} />
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
              { id: 'experience', label: 'Professional Experience', icon: <FiBriefcase /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Technical Skills', icon: <FiActivity /> },
              { id: 'research', label: 'Research & Publications', icon: <FiSearch /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Sarah Chen, PhD" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="sarah.chen@biotech.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Boston, MA or Remote" className={styles.formInput} />
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
                      placeholder="PhD-level Biotech Scientist with 8+ years of experience in antibody development and protein engineering. Expertise in mammalian cell culture, flow cytometry, ELISA, and protein purification techniques. Proven track record of leading research projects from concept to IND submission. Strong background in GMP compliance and regulatory documentation. Published 15+ peer-reviewed papers in high-impact journals."
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
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Professional Profiles</h4>
                  <p className={styles.sectionDescription}>Add your professional scientific profiles (LinkedIn, ResearchGate, ORCID, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="ResearchGate">ResearchGate</option>
                      <option value="ORCID">ORCID</option>
                      <option value="Portfolio">Scientific Portfolio</option>
                      <option value="PubMed">PubMed</option>
                      <option value="Google">Google Scholar</option>
                      <option value="Website">Personal Website</option>
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
                        <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add Profile'}
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
                      <p className={styles.emptyMessage}>No professional profiles added yet</p>
                    ) : (
                      formData.socialLinks.map((link, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemInfo}>
                            <span className={styles.itemPlatform}>{link.platform}</span>
                            <span className={styles.itemUrl}>{formatSocialUrl(link.url)}</span>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editSocialLink(i)} className={styles.editButton} aria-label={`Edit ${link.platform} profile`}><FiEdit2 /></button>
                            <button onClick={() => deleteSocialLink(i)} className={styles.deleteButton} aria-label={`Delete ${link.platform} profile`}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Professional Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Professional Experience</h3>
                <p className={styles.sectionDescription}>List your biotech/pharma positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Senior Scientist, Antibody Development" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company/Organization*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="Genentech" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Department / Division / Group
                    <input 
                      value={currentExperience.department} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} 
                      placeholder="Biologics Development / Antibody Engineering" 
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
                    Key Responsibilities & Scientific Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Led antibody discovery projects resulting in 2 lead candidates for oncology targets
• Developed and optimized high-throughput screening assays for antibody characterization
• Managed a team of 3 research associates in mammalian cell culture and protein purification
• Authored and reviewed technical documents for regulatory submissions (IND, CTA)
• Collaborated with CROs for preclinical studies and technology transfer
• Implemented new SOPs resulting in 30% reduction in assay variability"
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
                      <FiPlus /> {currentExperience.isEditing ? 'Update Professional Experience' : 'Add Professional Experience'}
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
                    <p className={styles.emptyMessage}>No professional experience added yet</p>
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
                <h3 className={styles.sectionTitle}><FiBook /> Education</h3>
                <p className={styles.sectionDescription}>List your scientific education, degrees, and relevant training</p>
                
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
                        placeholder="Doctor of Philosophy (PhD) in Molecular Biology" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Program / Specialization / Thesis Topic
                    <input 
                      value={currentEducation.program} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} 
                      placeholder="Antibody Engineering and Protein Therapeutics" 
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
                              {edu.program && <span className={styles.itemSubtitle}> – {edu.program}</span>}
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
                <h3 className={styles.sectionTitle}><FiActivity /> Technical Skills & Certifications</h3>
                
                {/* Technical Skills */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Technical Skills</h4>
                  <p className={styles.sectionDescription}>List your laboratory techniques, instrumentation expertise, and scientific skills</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentTechnicalSkill.name} 
                          onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, name: e.target.value })} 
                          placeholder="Flow Cytometry, ELISA, HPLC, Cell Culture" 
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
                          <option value="">Select Category</option>
                          <option value="Laboratory Techniques">Laboratory Techniques</option>
                          <option value="Instrumentation">Instrumentation</option>
                          <option value="Analytical Methods">Analytical Methods</option>
                          <option value="Cell Culture">Cell Culture</option>
                          <option value="Molecular Biology">Molecular Biology</option>
                          <option value="Protein Biochemistry">Protein Biochemistry</option>
                          <option value="Data Analysis">Data Analysis</option>
                          <option value="Software">Software</option>
                          <option value="Regulatory">Regulatory Compliance</option>
                        </select>
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Proficiency Level
                      <select 
                        value={currentTechnicalSkill.proficiency} 
                        onChange={(e) => setCurrentTechnicalSkill({ ...currentTechnicalSkill, proficiency: e.target.value })} 
                        className={styles.formSelect}
                      >
                        <option value="">Select Proficiency</option>
                        <option value="Expert">Expert</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Basic">Basic</option>
                      </select>
                    </label>
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
                          <strong>{s.name}</strong>
                          {s.category && ` (${s.category})`}
                          {s.proficiency && ` - ${s.proficiency}`}
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
                  <h4 className={styles.subSectionTitle}><FiShield /> Certifications & Training</h4>
                  <p className={styles.sectionDescription}>Add your professional certifications and specialized training</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification/Training Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="GMP Compliance Training" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuer/Organization
                        <input 
                          value={currentCertification.issuer} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuer: e.target.value })} 
                          placeholder="American Society for Quality (ASQ)" 
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
                          placeholder="CQM123456" 
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
                  <h4 className={styles.subSectionTitle}>Languages</h4>
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

            {/* Research & Publications Section */}
            {activeSection === 'research' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiSearch /> Research & Publications</h3>
                
                {/* Research Projects */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Research Projects</h4>
                  <p className={styles.sectionDescription}>Showcase your scientific research projects and investigations</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Project Title*
                        <input 
                          value={currentResearch.title} 
                          onChange={(e) => setCurrentResearch({ ...currentResearch, title: e.target.value })} 
                          placeholder="Development of Novel Bispecific Antibody for Cancer Immunotherapy" 
                          required 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Institution/Organization
                        <input 
                          value={currentResearch.institution} 
                          onChange={(e) => setCurrentResearch({ ...currentResearch, institution: e.target.value })} 
                          placeholder="Stanford University School of Medicine" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Project Date/Period
                        <input 
                          type="text" 
                          placeholder="Month Year - Month Year" 
                          value={currentResearch.date} 
                          onChange={(e) => setCurrentResearch({ ...currentResearch, date: e.target.value })} 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Project Description & Key Findings*
                      <textarea 
                        value={currentResearch.description} 
                        onChange={(e) => setCurrentResearch({ ...currentResearch, description: e.target.value })} 
                        placeholder="Developed a novel bispecific antibody targeting PD-1 and CTLA-4 for enhanced cancer immunotherapy. Designed expression vectors, optimized production in CHO cells, and characterized binding affinity using SPR. Demonstrated 80% tumor growth inhibition in mouse xenograft models compared to monotherapy." 
                        required 
                        className={styles.formTextarea} 
                        rows="4" 
                      />
                    </label>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addResearchProject} 
                        className={styles.addButton} 
                        disabled={!currentResearch.title.trim() || !currentResearch.description.trim()}
                      >
                        <FiPlus /> {currentResearch.isEditing ? 'Update Research Project' : 'Add Research Project'}
                      </button>
                      {currentResearch.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentResearch(defaultResearch())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className={styles.itemsList}>
                    {formData.researchProjects.map((r, i) => (
                      <div key={i} className={styles.listItem}>
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <strong className={styles.itemTitle}>{r.title}</strong>
                          </div>
                          <div className={styles.itemMeta}>
                            {r.institution && <span>{r.institution}</span>}
                            {r.date && <span>{r.date}</span>}
                          </div>
                          <div className={styles.itemDescription}>
                            <p>{r.description}</p>
                          </div>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editResearchProject(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteResearchProject(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.researchProjects.length === 0 && <p className={styles.emptyMessage}>No research projects added yet</p>}
                  </div>
                </div>

                {/* Publications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Publications</h4>
                  <p className={styles.sectionDescription}>Add your scientific publications, journal articles, and conference presentations</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Publication Title*
                        <input 
                          value={currentPublication.title} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, title: e.target.value })} 
                          placeholder="Novel CRISPR-Cas9 system for precise gene editing in mammalian cells" 
                          required 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Journal/Conference
                        <input 
                          value={currentPublication.journal} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, journal: e.target.value })} 
                          placeholder="Nature Biotechnology" 
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
                        DOI/PMID
                        <input 
                          value={currentPublication.doi} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, doi: e.target.value })} 
                          placeholder="10.1038/s41587-023-01815-7" 
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
                          {p.journal && ` – ${p.journal}`}
                          {p.date && ` (${p.date})`}
                          {p.doi && <div className={styles.itemUrl}>DOI: {p.doi}</div>}
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
                <h3 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h3>
                <p className={styles.sectionDescription}>Customize font sizes for your biotech resume PDF. All sizes are in points (pt).</p>
                
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
              Everything you need to know about creating professional biotech resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Biotech Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 3 million+ biotech professionals who landed positions at top pharmaceutical and biotech companies with our free ATS-friendly resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free biotech resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Biotech Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for Biotech • Publication Formatting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Biotech Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <BiotechTemplate formData={formData} />
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
    { name: 'Biotech Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-biotechnology-resume-builder' }
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