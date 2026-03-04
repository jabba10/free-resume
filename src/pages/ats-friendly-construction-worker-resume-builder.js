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
  FiTrendingUp,
  FiSearch,
  FiBarChart,
  FiTarget,
  FiLayers,
  FiHeart,
  FiDroplet,
  FiThermometer,
  FiAnchor,
  FiTruck
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
    projectType: '',
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
  
  const defaultSkill = () => ({
    name: '',
    category: '',
    yearsExperience: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuingAuthority: '',
    licenseNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSafety = () => ({
    name: '',
    level: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEquipment = () => ({
    name: '',
    yearsExperience: '',
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
    address: '',
    summary: '',
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    safetyTraining: [],
    equipment: [],
    languages: [],
    socialLinks: [],
    specialization: '',
    yearsExperience: '',
    availability: ''
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
    licenseText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentSafety, setCurrentSafety] = useState(defaultSafety());
  const [currentEquipment, setCurrentEquipment] = useState(defaultEquipment());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Construction Testimonials
  const testimonials = [
    {
      quote: "Created my construction resume in minutes and got callbacks from major contractors. The industry-specific templates are perfect!",
      metric: "Found Job in 1 Week",
      name: "Miguel R.",
      role: "Carpenter Foreman",
      company: "Commercial Construction"
    },
    {
      quote: "Finally a resume builder that understands construction trades. The ATS templates helped me pass contractor screening systems.",
      metric: "3 Interviews in 1 Week",
      name: "James K.",
      role: "Heavy Equipment Operator",
      company: "Infrastructure Projects"
    },
    {
      quote: "As a recent trade school graduate, the entry-level construction templates were perfect. Landed my first union apprenticeship using this builder.",
      metric: "First Union Job After Graduation",
      name: "Alex P.",
      role: "Electrician Apprentice",
      company: "Local 103 IBEW"
    },
    {
      quote: "The construction resume builder saved me - could update my resume between jobs. Professional results without the cost.",
      metric: "Promoted to Supervisor",
      name: "Maria L.",
      role: "Construction Manager",
      company: "General Contractor"
    },
    {
      quote: "Construction ATS-friendly templates actually work! Got callbacks from companies that previously ignored my applications.",
      metric: "5x More Responses",
      name: "David T.",
      role: "Plumbing Foreman",
      company: "Residential Construction"
    },
    {
      quote: "Free PDF download with proper construction formatting? Unbeatable value. Best construction resume builder I've found.",
      metric: "Perfect Resume in 15min",
      name: "Lisa R.",
      role: "Construction Estimator",
      company: "Construction Firm"
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "Is this construction resume builder really free with no hidden costs?",
      answer: "Yes, our construction resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional construction resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for construction resumes?",
      answer: "ATS-friendly means our construction resume templates are optimized to pass through Applicant Tracking Systems used by 85% of construction companies and contractors. This ensures your trade skills and experience are properly scanned and recognized."
    },
    {
      question: "Can I download my construction resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional construction resume in PDF format without creating an account. Everything is completely free and accessible immediately for all construction trades."
    },
    {
      question: "How many construction resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly construction resume templates for carpenters, electricians, plumbers, heavy equipment operators, foremen, supervisors, and all construction trades. All templates are completely free and optimized for construction hiring."
    },
    {
      question: "How does your construction resume builder work?",
      answer: "Our builder uses ATS-optimized construction templates with proper trade terminology formatting. We guide you to highlight construction experience, certifications, safety training, and specialized skills that contractors look for."
    },
    {
      question: "Can I edit my construction resume after downloading it?",
      answer: "Yes, you can always come back and edit your construction resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
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
      licenseText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      portfolio: <FiBriefcase />,
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
      formData.socialLinks.length > 0 ||
      formData.experience.length > 0 ||
      formData.education.length > 0 ||
      formData.skills.length > 0 ||
      formData.certifications.length > 0 ||
      formData.safetyTraining.length > 0 ||
      formData.equipment.length > 0 ||
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

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addSafety = createAddFunction('safetyTraining', currentSafety, setCurrentSafety, defaultSafety, () => currentSafety.name.trim());
  
  const editSafety = createEditFunction('safetyTraining', setCurrentSafety);
  const deleteSafety = createDeleteFunction('safetyTraining');

  const addEquipment = createAddFunction('equipment', currentEquipment, setCurrentEquipment, defaultEquipment, () => currentEquipment.name.trim());
  
  const editEquipment = createEditFunction('equipment', setCurrentEquipment);
  const deleteEquipment = createDeleteFunction('equipment');

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
            
            const licenseTexts = clone.querySelectorAll(`.${styles.certificationItem}`);
            licenseTexts.forEach(license => {
              license.style.fontSize = `${fontSizes.licenseText}pt`;
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

      pdf.save(`${formData.fullName || 'construction_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Construction Resume Template ---
  const ConstructionTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasSafety = formData.safetyTraining.length > 0;
    const hasEquipment = formData.equipment.length > 0;
    const hasLanguages = formData.languages.length > 0;
    const hasSpecialization = formData.specialization;

    return (
      <div className={styles.constructionTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          {hasSpecialization && (
            <div className={styles.specialization} style={{ fontSize: `${fontSizes.jobTitle}pt` }}>
              {formData.specialization}
            </div>
          )}
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.yearsExperience && (
              <>
                <div className={styles.contactSeparator}>•</div>
                <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiClock /> {formData.yearsExperience} years experience</div>
              </>
            )}
            {formData.availability && (
              <>
                <div className={styles.contactSeparator}>•</div>
                <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiCheck /> {formData.availability}</div>
              </>
            )}
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CONSTRUCTION EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.projectType && ` – ${exp.projectType}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>TRADE SKILLS & EXPERTISE</h2>
            <div className={styles.skillsGrid}>
              {formData.skills.map((s, i) => (
                <div key={i} className={styles.skillItem} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  <span className={styles.skillName}>{s.name}</span>
                  {s.category && <span className={styles.skillCategory}> ({s.category})</span>}
                  {s.yearsExperience && <span className={styles.skillExperience}> – {s.yearsExperience} years</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & LICENSES</h2>
            {formData.certifications.map((c, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.licenseText}pt` }}>
                <strong>{c.name}</strong>
                {c.issuingAuthority && ` – ${c.issuingAuthority}`}
                {c.licenseNumber && ` (#${c.licenseNumber})`}
                {c.expiryDate && ` – Valid until: ${c.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasSafety && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SAFETY TRAINING & QUALIFICATIONS</h2>
            <div className={styles.skillsGrid}>
              {formData.safetyTraining.map((s, i) => (
                <div key={i} className={styles.safetyItem} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  <span className={styles.safetyName}>{s.name}</span>
                  {s.level && <span className={styles.safetyLevel}> – {s.level}</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {hasEquipment && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EQUIPMENT OPERATION</h2>
            <div className={styles.equipmentGrid}>
              {formData.equipment.map((e, i) => (
                <div key={i} className={styles.equipmentItem} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  <span className={styles.equipmentName}>{e.name}</span>
                  {e.yearsExperience && <span className={styles.equipmentExperience}> – {e.yearsExperience} years</span>}
                </div>
              ))}
            </div>
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION & TRAINING</h2>
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
        <title>Free Construction Resume Builder 2026 | Trade Templates for Pros</title>
        <meta name="title" content="Free Construction Resume Builder 2026 | Trade Templates for Pros" />
        <meta name="description" content="Create a professional construction resume for free. ATS-friendly trade templates trusted by 3M+ construction pros. Download PDF in minutes. Updated for 2026." />
        <meta name="keywords" content="construction resume builder, construction resume templates, carpenter resume, electrician resume, plumber resume, heavy equipment operator resume, construction worker CV, trade resume, ATS friendly construction resume, free resume builder for construction workers" />
        <meta name="author" content="Professional Construction Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free Construction Resume Builder 2026 | Trade Templates for Pros" />
        <meta property="og:description" content="Create a professional construction resume for free. ATS-friendly trade templates trusted by 3M+ construction pros. Download PDF in minutes. Updated for 2026." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-construction-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Construction Resume Builder - Create Professional Trade Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Construction Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Construction Resume Builder 2026 | Trade Templates for Pros" />
        <meta name="twitter:description" content="Create a professional construction resume for free. ATS-friendly trade templates trusted by 3M+ construction pros. Download PDF in minutes. Updated for 2026." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-construction-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Construction Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="theme-color" content="#2c3e50" />
        <meta name="msapplication-TileColor" content="#2c3e50" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder",
                  "name": "Free Construction Resume Builder 2026 | Trade Templates for Pros",
                  "description": "Create professional ATS-optimized construction resumes for free. Land jobs 3x faster with our construction resume builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Construction Resume Free",
                    "description": "Free online resume builder for construction professionals",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Construction Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/ProResumeFree",
                        "https://www.linkedin.com/company/professional-resume-free",
                        "https://www.facebook.com/ProfessionalResumeFree",
                        "https://www.youtube.com/@ProfessionalResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-construction-resume-builder-preview.jpg",
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
                        "name": "Construction Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Construction Resume Builder - ATS Optimized Trade Resume Maker",
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
                      "ratingCount": 40365,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly construction resume builder for trade professionals, carpenters, electricians, plumbers, and construction staff.",
                    "featureList": [
                      "Construction ATS-Optimized Templates",
                      "Trade Content Suggestions",
                      "One-Click PDF Download",
                      "Construction Experience Formatting",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-construction-resume-builder.jpg",
                    "applicationSuite": "Construction Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Construction Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Construction Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized construction resume for free",
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
                      "name": "Choose a Construction Template",
                      "text": "Select from our ATS-optimized construction resume templates designed for carpenters, electricians, plumbers, operators, and construction staff.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-construction-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Trade Information",
                      "text": "Add your construction experience, education, certifications, safety training, and specialized skills using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-trade-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our construction-specific suggestions to improve trade keywords and formatting for ATS compatibility.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Construction Resume",
                      "text": "Export your professional construction resume as PDF - completely free, no watermarks.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Construction Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Construction Resume Free",
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
                    "name": "Free Construction Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Construction ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Trade Resume Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly construction resume builder for trade professionals worldwide",
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
                        "name": "Professional Construction Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Construction Resume Builder - ATS Optimized Trade Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly construction resume builder that helps trade professionals create professional resumes and land jobs faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder"
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
            <span className={styles.breadcrumbText}>Free Trade Templates</span>
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
                Rated 4.9/5 by 40,365+ Construction Professionals | Best Free Construction Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free Construction Resume Builder 2026
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized construction resume for free in minutes.</strong> Our trade resume builder ensures your construction experience and skills get noticed by contractors and employers globally.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free construction resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Construction Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download construction resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Construction Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3M+</span>
                <span className={styles.statLabel}>Construction Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Job Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster Construction Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Trade Professionals</span>
              </div>
            </div>

            <div className={styles.tradeBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiTool /> Carpenter</span>
                <span className={styles.badgeItem}><FiDroplet /> Plumber</span>
                <span className={styles.badgeItem}><FiThermometer /> Electrician</span>
                <span className={styles.badgeItem}><FiTruck /> Equipment Operator</span>
                <span className={styles.badgeItem}><FiShield /> Construction Laborer</span>
                <span className={styles.badgeItem}><FiBriefcase /> Construction Manager</span>
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
                  <ConstructionTemplate formData={formData} />
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
              { id: 'experience', label: 'Construction Experience', icon: <FiBriefcase /> },
              { id: 'skills', label: 'Trade Skills', icon: <FiTool /> },
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
                <h3 className={styles.sectionTitle}><FiUser /> Personal Information</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, Carpenter Foreman" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@construction.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone*
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} required />
                    </label>
                    <label className={styles.formLabel}>
                      Location*
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, State, Country" className={styles.formInput} required />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Primary Trade/Specialization*
                      <input type="text" name="specialization" value={formData.specialization} onChange={handleInputChange} placeholder="Carpenter Foreman, Licensed Electrician, Heavy Equipment Operator" className={styles.formInput} required />
                    </label>
                    <label className={styles.formLabel}>
                      Years of Experience*
                      <input type="text" name="yearsExperience" value={formData.yearsExperience} onChange={handleInputChange} placeholder="10+ years" className={styles.formInput} required />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Availability/Work Status*
                    <input type="text" name="availability" value={formData.availability} onChange={handleInputChange} placeholder="Available Immediately, Open to Relocation, Seeking Full-Time Position" className={styles.formInput} required />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Construction Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Skilled and safety-conscious Carpenter Foreman with 12+ years of experience in commercial and residential construction. Proven track record of leading teams, managing projects on schedule and budget, and maintaining strict quality standards. Expertise in blueprint reading, framing, finishing work, and training apprentices. Committed to workplace safety and delivering exceptional results."
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
                  <p className={styles.sectionDescription}>Add your professional profiles (LinkedIn, portfolio, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Portfolio">Professional Portfolio</option>
                      <option value="Website">Personal Website</option>
                      <option value="Union">Union Membership</option>
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

            {/* Construction Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Construction Experience</h3>
                <p className={styles.sectionDescription}>List your construction positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Carpenter Foreman, Journeyman Electrician, Equipment Operator" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company/Contractor*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="ABC Construction Company" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Project Type / Sector
                    <input 
                      value={currentExperience.projectType} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, projectType: e.target.value })} 
                      placeholder="Commercial High-Rise, Residential Housing, Infrastructure" 
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
                      placeholder="• Led team of 8 carpenters on $5M commercial project
• Supervised framing, drywall installation, and finish carpentry
• Maintained 100% safety compliance with zero lost-time accidents
• Trained 3 apprentices in proper techniques and safety protocols
• Completed projects 10% under budget through efficient resource management"
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
                      <FiPlus /> {currentExperience.isEditing ? 'Update Construction Experience' : 'Add Construction Experience'}
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
                  <h4 className={styles.subSectionTitle}>Your Construction Experience</h4>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No construction experience added yet</p>
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
                              {exp.projectType && <span>{exp.projectType}</span>}
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

                {/* Education Section */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiBook /> Education & Training</h4>
                  <p className={styles.sectionDescription}>List your trade education, apprenticeships, and relevant training</p>
                  
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution/Trade School*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="ABC Trade School, Local 103 Apprenticeship Program" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree/Certification*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Journeyman Carpenter License, Electrical Apprenticeship" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Program / Specialization
                    <input 
                      value={currentEducation.program} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} 
                      placeholder="Commercial Carpentry, Industrial Electrician" 
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
                        placeholder="Month Year or Completed" 
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
                  <h4 className={styles.subSectionTitle}>Your Education & Training</h4>
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
                              <span>{edu.startDate} – {edu.endDate || 'Completed'}</span>
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

            {/* Skills & Certifications Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTool /> Trade Skills & Certifications</h3>
                
                {/* Trade Skills */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Trade Skills & Expertise</h4>
                  <p className={styles.sectionDescription}>List your construction skills and areas of expertise</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentSkill.name} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                          placeholder="Blueprint Reading, Concrete Forming, Electrical Wiring" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Category
                        <input 
                          value={currentSkill.category} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                          placeholder="Carpentry, Electrical, Plumbing" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Years of Experience
                      <input 
                        value={currentSkill.yearsExperience} 
                        onChange={(e) => setCurrentSkill({ ...currentSkill, yearsExperience: e.target.value })} 
                        placeholder="5+ years" 
                        className={styles.formInput} 
                      />
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
                          {s.yearsExperience && ` – ${s.yearsExperience} years`}
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

                {/* Safety Training */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiShield /> Safety Training & Qualifications</h4>
                  <p className={styles.sectionDescription}>Add your construction safety certifications and training</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Safety Certification*
                        <input 
                          value={currentSafety.name} 
                          onChange={(e) => setCurrentSafety({ ...currentSafety, name: e.target.value })} 
                          placeholder="OSHA 30-Hour, First Aid/CPR, Fall Protection" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Level / Type
                        <input 
                          value={currentSafety.level} 
                          onChange={(e) => setCurrentSafety({ ...currentSafety, level: e.target.value })} 
                          placeholder="Certified, Trained, Licensed" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSafety} 
                        className={styles.addButton} 
                        disabled={!currentSafety.name.trim()}
                      >
                        <FiPlus /> {currentSafety.isEditing ? 'Update Safety Training' : 'Add Safety Training'}
                      </button>
                      {currentSafety.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSafety(defaultSafety())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.safetyTraining.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{s.name}</strong>
                          {s.level && ` – ${s.level}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSafety(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSafety(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.safetyTraining.length === 0 && <p className={styles.emptyMessage}>No safety training added yet</p>}
                  </div>
                </div>

                {/* Equipment Operation */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiTruck /> Equipment Operation</h4>
                  <p className={styles.sectionDescription}>List construction equipment you can operate</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Equipment Name*
                        <input 
                          value={currentEquipment.name} 
                          onChange={(e) => setCurrentEquipment({ ...currentEquipment, name: e.target.value })} 
                          placeholder="Excavator, Forklift, Bulldozer, Crane" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Years of Experience
                        <input 
                          value={currentEquipment.yearsExperience} 
                          onChange={(e) => setCurrentEquipment({ ...currentEquipment, yearsExperience: e.target.value })} 
                          placeholder="3+ years" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addEquipment} 
                        className={styles.addButton} 
                        disabled={!currentEquipment.name.trim()}
                      >
                        <FiPlus /> {currentEquipment.isEditing ? 'Update Equipment' : 'Add Equipment'}
                      </button>
                      {currentEquipment.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentEquipment(defaultEquipment())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.equipment.map((e, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{e.name}</strong>
                          {e.yearsExperience && ` – ${e.yearsExperience} years`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editEquipment(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteEquipment(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.equipment.length === 0 && <p className={styles.emptyMessage}>No equipment added yet</p>}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Languages</h4>
                  <p className={styles.sectionDescription}>List languages you speak (important for international work)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="Spanish, French, Arabic" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <input 
                          value={currentLanguage.proficiency} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                          placeholder="Fluent, Conversational, Basic" 
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

            {/* Certifications Section */}
            {activeSection === 'certifications' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiShield /> Certifications & Licenses</h3>
                
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Professional Certifications & Licenses</h4>
                  <p className={styles.sectionDescription}>Add your professional construction licenses and trade certifications</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        License/Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Journeyman Electrician License, OSHA 500, NCCER Certification" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Authority
                        <input 
                          value={currentCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                          placeholder="State Licensing Board, OSHA, NCCER" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        License Number
                        <input 
                          value={currentCertification.licenseNumber} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, licenseNumber: e.target.value })} 
                          placeholder="EL1234567" 
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
                    {formData.certifications.map((c, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{c.name}</strong>
                          {c.issuingAuthority && ` – ${c.issuingAuthority}`}
                          {c.licenseNumber && ` (#${c.licenseNumber})`}
                          {c.expiryDate && ` – Valid until: ${c.expiryDate}`}
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
                        <span>Degrees/Certifications</span>
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
                        <span className={styles.fontSizeValue}>{fontSizes.licenseText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.licenseText}
                        onChange={(e) => handleFontSizeChange('licenseText', e.target.value)}
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
              Everything you need to know about creating professional construction resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Build Your Construction Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 3 million+ construction professionals who landed their dream jobs with our free ATS-friendly construction resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free construction resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Construction Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • ATS Optimized for Construction • Works Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Construction Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <ConstructionTemplate formData={formData} />
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
    { name: 'Construction Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-construction-worker-resume-builder' }
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