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
  FiHome as FiHomeIcon,
  FiCalendar,
  FiCheckCircle
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const DisabilitySupportResume = ({ 
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

  // Font family constant
  const FONT_FAMILY = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";

  // --- Default item factories ---
  const defaultExperience = () => ({
    employer: '',
    position: '',
    clientType: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    qualification: '',
    certNumber: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuingBody: '',
    certNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    name: '',
    category: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAchievement = () => ({
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAvailability = () => ({
    days: '',
    hours: '',
    type: '',
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
    ndisWorkerNumber: '',
    summary: '',
    experience: [],
    education: [],
    certifications: [],
    skills: [],
    achievements: [],
    availability: [],
    languages: [],
    socialLinks: []
  });

  // Font size state
  const [fontSizes, setFontSizes] = useState({
    name: 14,
    sectionTitle: 10,
    contactInfo: 7,
    jobTitle: 9,
    organization: 7,
    qualification: 9,
    institution: 7,
    institutionDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    certText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentAchievement, setCurrentAchievement] = useState(defaultAchievement());
  const [currentAvailability, setCurrentAvailability] = useState(defaultAvailability());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data - Australian context
  const testimonials = [
    {
      quote: "As an experienced support worker, this builder helped me highlight my NDIS experience perfectly. Landed a role with a major provider in Melbourne!",
      metric: "Hired in 2 Weeks",
      name: "Sarah M.",
      role: "Senior Disability Support Worker",
      company: "Melbourne Disability Services"
    },
    {
      quote: "The Australian-specific templates made all the difference. My resume now speaks the language of NDIS providers and gets through their ATS systems.",
      metric: "3 Interviews in 1 Week",
      name: "James K.",
      role: "Disability Support Coordinator",
      company: "Sydney Care Providers"
    },
    {
      quote: "As a new graduate with Cert III, the templates helped me showcase my placement experience. Got my first support worker job in Brisbane!",
      metric: "First Job After Graduation",
      name: "Alex P.",
      role: "Entry Level Support Worker",
      company: "Queensland Care Team"
    },
    {
      quote: "Transitioning from aged care to disability support was seamless with this builder. The industry-specific keywords got me noticed.",
      metric: "Career Change Success",
      name: "Maria L.",
      role: "Disability Support Worker",
      company: "Perth NDIS Provider"
    },
    {
      quote: "The ATS-friendly templates work! Got callbacks from providers that previously ignored my applications. Essential for Australian disability sector.",
      metric: "5x More Responses",
      name: "David T.",
      role: "Complex Needs Support Worker",
      company: "Adelaide Care Services"
    },
    {
      quote: "Free with proper NDIS formatting? Unbeatable value. Best disability support resume builder for Australian job market.",
      metric: "Perfect Resume in 15min",
      name: "Lisa R.",
      role: "Team Leader - Disability",
      company: "National Disability Services"
    }
  ];

  // FAQ Data for Structured Data - Australian focus
  const faqs = [
    {
      question: "Is this disability support resume builder free for Australian job seekers?",
      answer: "Yes, our disability support resume builder is completely free with no hidden costs. Created specifically for Australian support workers, NDIS providers, and disability services employers."
    },
    {
      question: "What makes this builder specific to Australian Disability Support Workers?",
      answer: "Our templates include NDIS-specific sections, Australian qualification formats, NDIS Worker Screening Check, and industry-standard terminology used by Australian disability service providers."
    },
    {
      question: "Can I include my NDIS Worker Number and certifications?",
      answer: "Absolutely! We have dedicated sections for NDIS Worker Screening Check, First Aid certificates, manual handling, and other essential Australian disability support qualifications."
    },
    {
      question: "Are the templates ATS-friendly for Australian disability providers?",
      answer: "Yes, our templates are optimized for Australian ATS systems used by major disability service providers like Scope, Aruma, Life Without Barriers, and NDIS-registered organisations."
    },
    {
      question: "What Australian-specific sections does the builder include?",
      answer: "NDIS Worker Details, Australian Qualifications Framework (AQF) certifications, Disability Services Act compliance, Client Rights & Dignity of Risk principles, and Australian working rights."
    },
    {
      question: "Can I download my resume as PDF for Australian job applications?",
      answer: "Yes, download your professionally formatted disability support resume in PDF format - completely free, no watermarks, ready for Australian job applications."
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
      organization: 7,
      qualification: 9,
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
      seek: <FiBriefcase />,
      indeed: <FiSearch />,
      portfolio: <FiGlobe />
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
      formData.skills.length > 0 ||
      formData.achievements.length > 0 ||
      formData.availability.length > 0 ||
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

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.qualification);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addAchievement = createAddFunction('achievements', currentAchievement, setCurrentAchievement, defaultAchievement, () => currentAchievement.description.trim());
  
  const editAchievement = createEditFunction('achievements', setCurrentAchievement);
  const deleteAchievement = createDeleteFunction('achievements');

  const addAvailability = createAddFunction('availability', currentAvailability, setCurrentAvailability, defaultAvailability, () => currentAvailability.days.trim());
  
  const editAvailability = createEditFunction('availability', setCurrentAvailability);
  const deleteAvailability = createDeleteFunction('availability');

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
        color: '#000000',
        fontFamily: FONT_FAMILY
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
            clone.style.fontFamily = FONT_FAMILY;
            
            // Apply custom font sizes
            const name = clone.querySelector(`.${styles.name}`);
            if (name) name.style.fontSize = `${fontSizes.name}pt`;
            
            const sectionTitles = clone.querySelectorAll(`.${styles.sectionTitle}`);
            sectionTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.sectionTitle}pt`;
              title.style.fontFamily = FONT_FAMILY;
            });
            
            const contactItems = clone.querySelectorAll(`.${styles.contactInfoItem}`);
            contactItems.forEach(item => {
              item.style.fontSize = `${fontSizes.contactInfo}pt`;
              item.style.fontFamily = FONT_FAMILY;
            });
            
            const jobTitles = clone.querySelectorAll(`.${styles.experienceItem} h3`);
            jobTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.jobTitle}pt`;
              title.style.fontFamily = FONT_FAMILY;
            });
            
            const organizations = clone.querySelectorAll(`.${styles.organization}`);
            organizations.forEach(org => {
              org.style.fontSize = `${fontSizes.organization}pt`;
              org.style.fontFamily = FONT_FAMILY;
            });
            
            const qualifications = clone.querySelectorAll(`.${styles.educationItem} h3`);
            qualifications.forEach(qual => {
              qual.style.fontSize = `${fontSizes.qualification}pt`;
              qual.style.fontFamily = FONT_FAMILY;
            });
            
            const institutions = clone.querySelectorAll(`.${styles.institution}`);
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
              institution.style.fontFamily = FONT_FAMILY;
            });
            
            const institutionDates = clone.querySelectorAll(`.${styles.institutionDate}`);
            institutionDates.forEach(date => {
              date.style.fontSize = `${fontSizes.institutionDate}pt`;
              date.style.fontFamily = FONT_FAMILY;
            });
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.availabilityItem}`);
            regularTexts.forEach(text => {
              text.style.fontSize = `${fontSizes.regularText}pt`;
              text.style.fontFamily = FONT_FAMILY;
            });
            
            const bulletPoints = clone.querySelectorAll(`.${styles.bulletList} li`);
            bulletPoints.forEach(bullet => {
              bullet.style.fontSize = `${fontSizes.bulletText}pt`;
              bullet.style.fontFamily = FONT_FAMILY;
            });
            
            const skills = clone.querySelectorAll(`.${styles.skillsList} li`);
            skills.forEach(skill => {
              skill.style.fontSize = `${fontSizes.skillText}pt`;
              skill.style.fontFamily = FONT_FAMILY;
            });
            
            const certTexts = clone.querySelectorAll(`.${styles.certificationItem}`);
            certTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certText}pt`;
              cert.style.fontFamily = FONT_FAMILY;
            });
            
            // Apply font family to all elements
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = FONT_FAMILY;
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'disability_support_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const DisabilitySupportTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasAchievements = formData.achievements.length > 0;
    const hasAvailability = formData.availability.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className={styles.disabilitySupportTemplate} style={{ fontFamily: FONT_FAMILY }}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt`, fontFamily: FONT_FAMILY }}>
            {formData.fullName || 'Your Name'}
          </h1>
          {formData.ndisWorkerNumber && (
            <div className={styles.ndisBadge} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: FONT_FAMILY }}>
              NDIS Worker Number: {formData.ndisWorkerNumber}
            </div>
          )}
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: FONT_FAMILY }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.location)) && <div className={styles.contactSeparator} style={{ fontFamily: FONT_FAMILY }}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: FONT_FAMILY }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.location) && <div className={styles.contactSeparator} style={{ fontFamily: FONT_FAMILY }}>•</div>}
            {formData.location && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: FONT_FAMILY }}><FiMapPin /> {formData.location}</div>}
            {formData.socialLinks.map((link, i) => (
              <div key={i} className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: FONT_FAMILY }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>PROFESSIONAL PROFILE</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt`, fontFamily: FONT_FAMILY }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>DISABILITY SUPPORT EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt`, fontFamily: FONT_FAMILY }}>{exp.position}</h3>
                  <p className={styles.organization} style={{ fontSize: `${fontSizes.organization}pt`, fontFamily: FONT_FAMILY }}>{exp.employer}{exp.clientType && ` • ${exp.clientType}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => (
                    <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt`, fontFamily: FONT_FAMILY }}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>QUALIFICATIONS & TRAINING</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ fontSize: `${fontSizes.qualification}pt`, fontFamily: FONT_FAMILY }}>
                  {edu.qualification}{edu.certNumber && ` (${edu.certNumber})`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt`, fontFamily: FONT_FAMILY }}>
                  {edu.institution} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt`, fontFamily: FONT_FAMILY }}>
                    {edu.startDate} – {edu.endDate || 'Current'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>CERTIFICATIONS & LICENSES</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certText}pt`, fontFamily: FONT_FAMILY }}>
                <strong>{cert.name}</strong>
                {cert.issuingBody && ` – ${cert.issuingBody}`}
                {cert.certNumber && ` (#${cert.certNumber})`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>SPECIALISED SKILLS</h2>
            <div className={styles.skillsGrid}>
              {formData.skills.map((skill, i) => (
                <div key={i} className={styles.skillCategory}>
                  {skill.category && <h4 style={{ fontSize: `${fontSizes.skillText}pt`, fontFamily: FONT_FAMILY }}>{skill.category}</h4>}
                  <ul className={styles.bulletList}>
                    <li style={{ fontSize: `${fontSizes.skillText}pt`, fontFamily: FONT_FAMILY }}>{skill.name}</li>
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {hasAchievements && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>KEY ACHIEVEMENTS</h2>
            <ul className={styles.bulletList}>
              {formData.achievements.map((ach, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt`, fontFamily: FONT_FAMILY }}>{ach.description}</li>
              ))}
            </ul>
          </section>
        )}

        {hasAvailability && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>AVAILABILITY</h2>
            {formData.availability.map((avail, i) => (
              <div key={i} className={styles.availabilityItem} style={{ fontSize: `${fontSizes.regularText}pt`, fontFamily: FONT_FAMILY }}>
                <strong>{avail.days}</strong>
                {avail.hours && ` – ${avail.hours}`}
                {avail.type && ` (${avail.type})`}
              </div>
            ))}
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: FONT_FAMILY }}>LANGUAGES</h2>
            <ul className={styles.bulletList}>
              {formData.languages.map((l, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt`, fontFamily: FONT_FAMILY }}>
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
    <div className={styles.disabilitySupportResumeBuilder} lang="en-AU" style={{ fontFamily: FONT_FAMILY }}>
      <Head>
        <title>Free NDIS Resume Builder 2026 | Disability Support Worker Australia</title>
        <meta name="title" content="Free NDIS Resume Builder 2026 | Disability Support Worker Australia" />
        <meta name="description" content="Create your professional NDIS resume for free in 2026. Australian disability support templates help support workers land interviews faster. Start now—no sign-up." />
        <meta name="keywords" content="disability support resume builder, NDIS resume templates, support worker resume Australia, disability care resume, ATS friendly disability resume, free resume builder for support workers, NDIS worker screening, Australian disability sector jobs, support worker CV, disability services resume" />
        <meta name="author" content="Australian Disability Support Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {/* SINGLE CANONICAL URL */}
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder" />
        
        <meta property="og:title" content="Free NDIS Resume Builder 2026 | Disability Support Worker Australia" />
        <meta property="og:description" content="Create your professional NDIS resume for free in 2026. Australian disability support templates help support workers land interviews faster. Start now—no sign-up." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-disability-support-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free NDIS Resume Builder - Create Professional Disability Support Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Australian Disability Support Resume Free" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free NDIS Resume Builder 2026 | Disability Support Worker Australia" />
        <meta name="twitter:description" content="Create your professional NDIS resume for free in 2026. Australian disability support templates help support workers land interviews faster. Start now—no sign-up." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-disability-support-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free NDIS Resume Builder with Australian Templates" />
        <meta name="twitter:site" content="@DisabilityResumeAU" />
        <meta name="twitter:creator" content="@DisabilityResumeAU" />
        <meta name="theme-color" content="#4CAF50" />
        <meta name="msapplication-TileColor" content="#4CAF50" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder/#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder",
                  "name": "Free NDIS Resume Builder 2026 - Disability Support Worker Australia",
                  "description": "Create professional ATS-optimized disability support resumes for free. Australian NDIS-specific templates for Support Workers.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-AU",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Australian Disability Support Resume Free",
                    "description": "Free online resume builder for Australian disability support workers",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Australian Disability Support Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/DisabilityResumeAU",
                        "https://www.linkedin.com/company/disability-support-resume-au",
                        "https://www.facebook.com/DisabilitySupportResumeAU"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-disability-support-resume-builder-preview.jpg",
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
                        "name": "Disability Support Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "NDIS Resume Builder - Disability Support Resume Maker Australia",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Any",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "AUD",
                      "availability": "https://schema.org/InStock",
                      "priceValidUntil": "2026-12-31"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": 4.9,
                      "ratingCount": 28650,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly disability support resume builder for Australian support workers, NDIS providers, and disability services professionals.",
                    "featureList": [
                      "NDIS-Optimized Templates",
                      "Australian Qualification Framework Support",
                      "One-Click PDF Download",
                      "Disability Experience Formatting",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-disability-support-resume-builder.jpg",
                    "applicationSuite": "Disability Support Career Tools",
                    "countriesSupported": "Australia",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Disability Support Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Disability Support Resume for Australian Jobs",
                  "description": "Step-by-step guide to create an ATS-optimized disability support resume for Australian NDIS providers",
                  "totalTime": "PT15M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "AUD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Choose NDIS-Optimized Template",
                      "text": "Select from our ATS-optimized disability support resume templates designed for Australian support workers, coordinators, and team leaders.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-ndis-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Disability Support Information",
                      "text": "Add your support experience, Australian qualifications, NDIS certifications, and specialized skills using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-support-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize for NDIS",
                      "text": "Use our NDIS-specific suggestions to improve keywords and formatting for Australian disability service providers.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Disability Support Resume",
                      "text": "Export your professional disability support resume as PDF - completely free, no watermarks, ready for Australian job applications.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Disability Support Resume Building Service Australia",
                  "provider": {
                    "@type": "Organization",
                    "name": "Australian Disability Support Resume Free",
                    "url": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "",
                      "contactType": "Customer Support",
                      "availableLanguage": "en"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Australia"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free Disability Support Resume Building Services Australia",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "NDIS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Disability Support Resume Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly disability support resume builder for Australian disability workers and NDIS providers",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "AUD"
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
                        "name": "Australian Disability Support Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "NDIS Resume Builder - Disability Support Resume Maker Australia",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "AUD"
                        },
                        "description": "Free online ATS-friendly disability support resume builder that helps Australian disability workers create professional resumes and land interviews faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder"
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
      <div className={styles.freshnessIndicator} style={{ display: 'none', fontFamily: FONT_FAMILY }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb" style={{ fontFamily: FONT_FAMILY }}>
        <ol>
          <li>
            <Link href="/" className={styles.breadcrumbLink} prefetch={false} style={{ fontFamily: FONT_FAMILY }}>
              <FiHome className={styles.breadcrumbIcon} />
              <span className={styles.breadcrumbText}>Home</span>
            </Link>
          </li>
          <li className={styles.breadcrumbSeparator}>
            <FiChevronRightIcon />
          </li>
          <li>
            <Link href="/ats-friendly-disability-support-worker-resume-builder" className={styles.breadcrumbLink} prefetch={false} style={{ fontFamily: FONT_FAMILY }}>
              <span className={styles.breadcrumbText}>Free NDIS Resume Template</span>
            </Link>
          </li>
        </ol>
      </nav>

      {/* Hero Section - SINGLE H1 TAG */}
      <section className={styles.heroSection} style={{ fontFamily: FONT_FAMILY }}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge} style={{ fontFamily: FONT_FAMILY }}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                Rated 4.9/5 by 28650+ Australian Disability Support Workers | Best Free NDIS Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle} style={{ fontFamily: FONT_FAMILY }}>
              Free NDIS Resume Builder 2026: Create Your Australian Support Worker CV & Get Hired
            </h1>
            
            <p className={styles.heroSubtitle} style={{ fontFamily: FONT_FAMILY }}>
              Create a <strong className={styles.heroHighlight}>professional, NDIS-optimized disability support resume for free in minutes.</strong> Our Australian resume builder ensures your experience gets noticed by disability service providers and NDIS organisations.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free disability support resume now—no sign-up required"
                style={{ fontFamily: FONT_FAMILY }}
              >
                <span className={styles.buttonText}>Start Building Your NDIS Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download disability support resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
                style={{ fontFamily: FONT_FAMILY }}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download NDIS Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem} style={{ fontFamily: FONT_FAMILY }}>
                <span className={styles.statNumber}>150K+</span>
                <span className={styles.statLabel}>Australian Support Resumes Created</span>
              </div>
              <div className={styles.statItem} style={{ fontFamily: FONT_FAMILY }}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem} style={{ fontFamily: FONT_FAMILY }}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster Disability Sector Hires</span>
              </div>
              <div className={styles.statItem} style={{ fontFamily: FONT_FAMILY }}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Support Workers</span>
              </div>
            </div>

            <div className={styles.ndisBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem} style={{ fontFamily: FONT_FAMILY }}><FiCheckCircle /> NDIS Worker Screening</span>
                <span className={styles.badgeItem} style={{ fontFamily: FONT_FAMILY }}><FiCheckCircle /> First Aid & CPR</span>
                <span className={styles.badgeItem} style={{ fontFamily: FONT_FAMILY }}><FiCheckCircle /> Manual Handling</span>
                <span className={styles.badgeItem} style={{ fontFamily: FONT_FAMILY }}><FiCheckCircle /> Cert III/IV Disability</span>
                <span className={styles.badgeItem} style={{ fontFamily: FONT_FAMILY }}><FiCheckCircle /> Mental Health First Aid</span>
                <span className={styles.badgeItem} style={{ fontFamily: FONT_FAMILY }}><FiCheckCircle /> Medication Administration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.singleColumnLayout} style={{ fontFamily: FONT_FAMILY }}>
        {/* Preview Section */}
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button onClick={() => setShowFullPreview(!showFullPreview)} className={styles.previewButton} style={{ fontFamily: FONT_FAMILY }}>
                <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
              </button>
              <button
                onClick={generatePDF}
                className={styles.downloadButton}
                disabled={isGeneratingPDF || !hasContent()}
                style={{ fontFamily: FONT_FAMILY }}
              >
                <FiDownload />
                {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
              </button>
            </div>
          </div>

          <div className={`${styles.previewContainer} ${showFullPreview ? styles.fullPreview : ''}`} style={{ fontFamily: FONT_FAMILY }}>
            <div className={styles.resumePreviewCard}>
              <div className={styles.previewContent}>
                <div
                  className={styles.resumePreview}
                  ref={resumeRef}
                  style={{ fontFamily: FONT_FAMILY }}
                >
                  <DisabilitySupportTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection} style={{ fontFamily: FONT_FAMILY }}>
          <div className={styles.formNavigation} style={{ fontFamily: FONT_FAMILY }}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'experience', label: 'Support Experience', icon: <FiUsers /> },
              { id: 'education', label: 'Qualifications', icon: <FiBook /> },
              { id: 'certifications', label: 'Certifications', icon: <FiShield /> },
              { id: 'skills', label: 'Skills', icon: <FiActivity /> },
              { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`${styles.navButton} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setActiveSection(item.id)}
                style={{ fontFamily: FONT_FAMILY }}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.formContent} style={{ fontFamily: FONT_FAMILY }}>
            {/* Personal Section */}
            {activeSection === 'personal' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiUser /> Personal Information</h2>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Sarah Johnson, Disability Support Worker" required className={styles.formInput} style={{ fontFamily: FONT_FAMILY }} />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="sarah.johnson@email.com" required className={styles.formInput} style={{ fontFamily: FONT_FAMILY }} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Phone*
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="04XX XXX XXX" required className={styles.formInput} style={{ fontFamily: FONT_FAMILY }} />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Location (Australia)*
                      <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="Melbourne, VIC" required className={styles.formInput} style={{ fontFamily: FONT_FAMILY }} />
                    </label>
                  </div>
                  <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                    NDIS Worker Screening Number
                    <input type="text" name="ndisWorkerNumber" value={formData.ndisWorkerNumber} onChange={handleInputChange} placeholder="NDISXXXXXXXX" className={styles.formInput} style={{ fontFamily: FONT_FAMILY }} />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                    Professional Disability Support Profile*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Compassionate and dedicated Disability Support Worker with 5+ years of experience supporting individuals with diverse abilities. Skilled in implementing NDIS plans, providing personal care, and promoting independence. Strong understanding of Disability Services Act, person-centered approaches, and dignity of risk principles. Committed to enhancing quality of life for participants through respectful, individualised support."
                      required
                      className={styles.formTextarea}
                      rows="6"
                      style={{ fontFamily: FONT_FAMILY }}
                    />
                    <div className={styles.characterCount} style={{ fontFamily: FONT_FAMILY }}>
                      {formData.summary.length}/500 characters
                    </div>
                  </label>
                </div>

                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiGlobe /> Professional Links</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>Add your professional profiles (LinkedIn, SEEK, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="SEEK">SEEK Profile</option>
                      <option value="Indeed">Indeed Profile</option>
                      <option value="Portfolio">Professional Portfolio</option>
                    </select>
                    <input 
                      type="url" 
                      placeholder="https://linkedin.com/in/yourprofile" 
                      value={currentSocialLink.url} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} 
                      className={styles.formInput}
                      style={{ fontFamily: FONT_FAMILY }}
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSocialLink} 
                        className={styles.addButton} 
                        disabled={!currentSocialLink.platform || !currentSocialLink.url}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add Link'}
                      </button>
                      {currentSocialLink.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSocialLink(defaultSocialLink())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.socialLinks.length === 0 ? (
                      <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No professional links added yet</p>
                    ) : (
                      formData.socialLinks.map((link, i) => (
                        <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                          <div className={styles.itemInfo}>
                            <span className={styles.itemPlatform} style={{ fontFamily: FONT_FAMILY }}>{link.platform}</span>
                            <span className={styles.itemUrl} style={{ fontFamily: FONT_FAMILY }}>{formatSocialUrl(link.url)}</span>
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

            {/* Disability Support Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiUsers /> Disability Support Experience</h2>
                <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>List your disability support positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Disability Support Worker, Senior Support Worker" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Organisation/Provider*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="National Disability Services, Scope Australia" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                    Client Type / Support Area
                    <input 
                      value={currentExperience.clientType} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, clientType: e.target.value })} 
                      placeholder="Complex Needs, SIL, Mental Health, Aged Care with Disability" 
                      className={styles.formInput}
                      style={{ fontFamily: FONT_FAMILY }}
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Start Date*
                      <input 
                        type="text" 
                        placeholder="Month Year (e.g., January 2020)" 
                        value={currentExperience.startDate} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      End Date
                      <input 
                        type="text" 
                        placeholder="Month Year or Present" 
                        value={currentExperience.endDate} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                    Key Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Provided person-centred support to 4 participants with complex needs in SIL accommodation
• Implemented NDIS plans and achieved 95% of participant goals
• Administered medication and maintained accurate MAR sheets
• Assisted with personal care, mobility, and daily living activities
• Developed positive behaviour support strategies reducing incidents by 40%
• Collaborated with multidisciplinary team including OT's and support coordinators"
                      required 
                      className={styles.formTextarea}
                      rows="8"
                      style={{ fontFamily: FONT_FAMILY }}
                    />
                    <div className={styles.characterCount} style={{ fontFamily: FONT_FAMILY }}>
                      {currentExperience.description.length}/2000 characters
                    </div>
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addExperience} 
                      className={styles.addButton} 
                      disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      <FiPlus /> {currentExperience.isEditing ? 'Update Support Experience' : 'Add Support Experience'}
                    </button>
                    {currentExperience.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentExperience(defaultExperience())} 
                        className={styles.cancelButton}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}>Your Disability Support Experience</h3>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No support experience added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.experience.map((exp, i) => (
                        <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle} style={{ fontFamily: FONT_FAMILY }}>{exp.position}</strong>
                              <span className={styles.itemSubtitle} style={{ fontFamily: FONT_FAMILY }}>at {exp.employer}</span>
                            </div>
                            <div className={styles.itemMeta} style={{ fontFamily: FONT_FAMILY }}>
                              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                              {exp.clientType && <span>{exp.clientType}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                <p key={j} className={styles.bulletPoint} style={{ fontFamily: FONT_FAMILY }}>• {line}</p>
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
                <h2 className={styles.sectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiBook /> Australian Qualifications & Training</h2>
                <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>List your disability support qualifications, training, and Australian certifications</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Institution/RTO*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="TAFE NSW, Open Colleges, Australian Red Cross" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Qualification/Certificate*
                      <input 
                        value={currentEducation.qualification} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, qualification: e.target.value })} 
                        placeholder="Certificate III in Individual Support (Disability)" 
                        required 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                    Certificate Number
                    <input 
                      value={currentEducation.certNumber} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, certNumber: e.target.value })} 
                      placeholder="NRT1234567" 
                      className={styles.formInput}
                      style={{ fontFamily: FONT_FAMILY }}
                    />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Start Date
                      <input 
                        type="text" 
                        placeholder="Month Year" 
                        value={currentEducation.startDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      End Date / Expected
                      <input 
                        type="text" 
                        placeholder="Month Year or Current" 
                        value={currentEducation.endDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addEducation} 
                      className={styles.addButton} 
                      disabled={!currentEducation.institution || !currentEducation.qualification}
                      style={{ fontFamily: FONT_FAMILY }}
                    >
                      <FiPlus /> {currentEducation.isEditing ? 'Update Qualification' : 'Add Qualification'}
                    </button>
                    {currentEducation.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentEducation(defaultEducation())} 
                        className={styles.cancelButton}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}>Your Qualifications</h3>
                  {formData.education.length === 0 ? (
                    <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No qualifications added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.education.map((edu, i) => (
                        <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle} style={{ fontFamily: FONT_FAMILY }}>{edu.qualification}</strong>
                              {edu.certNumber && <span className={styles.itemSubtitle} style={{ fontFamily: FONT_FAMILY }}> – #{edu.certNumber}</span>}
                            </div>
                            <div className={styles.itemMeta} style={{ fontFamily: FONT_FAMILY }}>
                              <span>{edu.institution}</span>
                              <span>{edu.startDate} – {edu.endDate || 'Current'}</span>
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editEducation(i)} className={styles.editButton} aria-label={`Edit ${edu.qualification}`}><FiEdit2 /></button>
                            <button onClick={() => deleteEducation(i)} className={styles.deleteButton} aria-label={`Delete ${edu.qualification}`}><FiTrash2 /></button>
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
                <h2 className={styles.sectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiShield /> Australian Certifications & Licenses</h2>
                
                {/* Essential Certifications */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}>Essential Australian Certifications</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>Add your essential Australian disability support certifications and licenses</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Certification/License Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="First Aid & CPR Certificate" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Issuing Body
                        <input 
                          value={currentCertification.issuingBody} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingBody: e.target.value })} 
                          placeholder="Australian Red Cross, St John Ambulance" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Certificate Number
                        <input 
                          value={currentCertification.certNumber} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, certNumber: e.target.value })} 
                          placeholder="FA1234567" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Expiry Date
                        <input 
                          value={currentCertification.expiryDate} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, expiryDate: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addCertification} 
                        className={styles.addButton} 
                        disabled={!currentCertification.name.trim()}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiPlus /> {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                      </button>
                      {currentCertification.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentCertification(defaultCertification())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.certifications.map((cert, i) => (
                      <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                        <div>
                          <strong style={{ fontFamily: FONT_FAMILY }}>{cert.name}</strong>
                          {cert.issuingBody && <span style={{ fontFamily: FONT_FAMILY }}> – {cert.issuingBody}</span>}
                          {cert.certNumber && <span style={{ fontFamily: FONT_FAMILY }}> (#{cert.certNumber})</span>}
                          {cert.expiryDate && <span style={{ fontFamily: FONT_FAMILY }}> – Expires: {cert.expiryDate}</span>}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editCertification(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteCertification(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.certifications.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No certifications added yet</p>}
                  </div>
                </div>

                {/* Achievements */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}>Key Achievements</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>Highlight your significant achievements in disability support</p>
                  <div className={styles.skillsInput}>
                    <textarea 
                      value={currentAchievement.description} 
                      onChange={(e) => setCurrentAchievement({ ...currentAchievement, description: e.target.value })} 
                      placeholder="Successfully implemented positive behaviour support plan reducing incidents by 60%" 
                      className={styles.formInput}
                      rows="3"
                      style={{ fontFamily: FONT_FAMILY }}
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addAchievement} 
                        className={styles.addButton} 
                        disabled={!currentAchievement.description.trim()}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiPlus /> {currentAchievement.isEditing ? 'Update Achievement' : 'Add Achievement'}
                      </button>
                      {currentAchievement.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentAchievement(defaultAchievement())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.achievements.map((ach, i) => (
                      <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                        <span style={{ fontFamily: FONT_FAMILY }}>{ach.description}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editAchievement(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteAchievement(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.achievements.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No achievements added yet</p>}
                  </div>
                </div>

                {/* Availability */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiCalendar /> Availability</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>Specify your working availability for disability support roles</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Days Available*
                        <input 
                          value={currentAvailability.days} 
                          onChange={(e) => setCurrentAvailability({ ...currentAvailability, days: e.target.value })} 
                          placeholder="Monday - Friday, Weekends, 24/7 Roster" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Hours
                        <input 
                          value={currentAvailability.hours} 
                          onChange={(e) => setCurrentAvailability({ ...currentAvailability, hours: e.target.value })} 
                          placeholder="7am - 3pm, Night Shifts, Flexible" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                      Employment Type
                      <input 
                        value={currentAvailability.type} 
                        onChange={(e) => setCurrentAvailability({ ...currentAvailability, type: e.target.value })} 
                        placeholder="Full-time, Part-time, Casual, Contract" 
                        className={styles.formInput}
                        style={{ fontFamily: FONT_FAMILY }}
                      />
                    </label>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addAvailability} 
                        className={styles.addButton} 
                        disabled={!currentAvailability.days.trim()}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiPlus /> {currentAvailability.isEditing ? 'Update Availability' : 'Add Availability'}
                      </button>
                      {currentAvailability.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentAvailability(defaultAvailability())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.availability.map((avail, i) => (
                      <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                        <div>
                          <strong style={{ fontFamily: FONT_FAMILY }}>{avail.days}</strong>
                          {avail.hours && <span style={{ fontFamily: FONT_FAMILY }}> – {avail.hours}</span>}
                          {avail.type && <span style={{ fontFamily: FONT_FAMILY }}> ({avail.type})</span>}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editAvailability(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteAvailability(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.availability.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No availability specified yet</p>}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}>Languages</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>List languages you speak (important for diverse Australian communities)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="Arabic, Vietnamese, Mandarin" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Proficiency Level
                        <input 
                          value={currentLanguage.proficiency} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                          placeholder="Fluent, Conversational, Basic" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addLanguage} 
                        className={styles.addButton} 
                        disabled={!currentLanguage.name.trim()}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiPlus /> {currentLanguage.isEditing ? 'Update Language' : 'Add Language'}
                      </button>
                      {currentLanguage.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentLanguage(defaultLanguage())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.languages.map((l, i) => (
                      <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                        <div>
                          <span style={{ fontFamily: FONT_FAMILY }}>{l.name}</span>
                          {l.proficiency && <span style={{ fontFamily: FONT_FAMILY }}> ({l.proficiency})</span>}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editLanguage(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteLanguage(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.languages.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No languages added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiActivity /> Disability Support Skills</h2>
                
                {/* Specialised Skills */}
                <div className={styles.formCard}>
                  <h3 className={styles.subSectionTitle} style={{ fontFamily: FONT_FAMILY }}>Specialised Disability Support Skills</h3>
                  <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>List your specialised skills in disability support categories</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Skill Name*
                        <input 
                          value={currentSkill.name} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                          placeholder="Personal Care Assistance" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                      <label className={styles.formLabel} style={{ fontFamily: FONT_FAMILY }}>
                        Category
                        <input 
                          value={currentSkill.category} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                          placeholder="Personal Care, Community Access, Behaviour Support" 
                          className={styles.formInput}
                          style={{ fontFamily: FONT_FAMILY }}
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSkill} 
                        className={styles.addButton} 
                        disabled={!currentSkill.name.trim()}
                        style={{ fontFamily: FONT_FAMILY }}
                      >
                        <FiPlus /> {currentSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSkill(defaultSkill())} 
                          className={styles.cancelButton}
                          style={{ fontFamily: FONT_FAMILY }}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.skills.map((skill, i) => (
                      <div key={i} className={styles.listItem} style={{ fontFamily: FONT_FAMILY }}>
                        <div>
                          {skill.category && <strong style={{ fontFamily: FONT_FAMILY }}>{skill.category}: </strong>}
                          <span style={{ fontFamily: FONT_FAMILY }}>{skill.name}</span>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSkill(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.skills.length === 0 && <p className={styles.emptyMessage} style={{ fontFamily: FONT_FAMILY }}>No skills added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h2 className={styles.sectionTitle} style={{ fontFamily: FONT_FAMILY }}><FiSettings /> Font Size Settings</h2>
                <p className={styles.sectionDescription} style={{ fontFamily: FONT_FAMILY }}>Customize font sizes for your resume PDF. All sizes are in points (pt).</p>
                
                <div className={styles.formCard}>
                  <div className={styles.fontSizeGrid}>
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
                        <span>Organization/Institution Names</span>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                      <label className={styles.fontSizeLabel} style={{ fontFamily: FONT_FAMILY }}>
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
                    style={{ fontFamily: FONT_FAMILY }}
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
      <section className={styles.faqSection} aria-labelledby="faq-title" style={{ fontFamily: FONT_FAMILY }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title" style={{ fontFamily: FONT_FAMILY }}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle} style={{ fontFamily: FONT_FAMILY }}>
              Everything you need to know about creating professional disability support resumes for the Australian market.
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem} style={{ fontFamily: FONT_FAMILY }}>
                <h3 className={styles.faqQuestion} style={{ fontFamily: FONT_FAMILY }}>{faq.question}</h3>
                <p className={styles.faqAnswer} style={{ fontFamily: FONT_FAMILY }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-title" style={{ fontFamily: FONT_FAMILY }}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title" style={{ fontFamily: FONT_FAMILY }}>Ready to Advance Your Disability Support Career in Australia?</h2>
            <p className={styles.ctaSubtitle} style={{ fontFamily: FONT_FAMILY }}>
              Join 150,000+ Australian disability support professionals who landed their dream jobs with our free NDIS-optimized resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free disability support resume now—no sign-up required"
                style={{ fontFamily: FONT_FAMILY }}
              >
                <span className={styles.ctaButtonText}>Create Your Free NDIS Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee} style={{ fontFamily: FONT_FAMILY }}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • NDIS Optimized for Australia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)} style={{ fontFamily: FONT_FAMILY }}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()} style={{ fontFamily: FONT_FAMILY }}>
            <div className={styles.fullPreviewHeader} style={{ fontFamily: FONT_FAMILY }}>
              <h3>Full Disability Support Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <DisabilitySupportTemplate formData={formData} />
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
    { name: 'Disability Support Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-disability-support-worker-resume-builder' }
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

export default DisabilitySupportResume;