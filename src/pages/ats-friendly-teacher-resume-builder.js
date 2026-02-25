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
  FiBookOpen,
  FiVideo,
  FiGrid,
  FiCalendar,
  FiBookmark
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const TeacherResume = ({ 
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
    school: '',
    position: '',
    gradeLevel: '',
    subjects: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    major: '',
    certifications: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSpecialization = () => ({
    name: '',
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
  
  const defaultProfessionalDevelopment = () => ({
    name: '',
    provider: '',
    hours: '',
    date: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTeachingMethod = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTechnologySkill = () => ({
    name: '',
    proficiency: '',
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
    specializations: [],
    certifications: [],
    professionalDevelopment: [],
    teachingMethods: [],
    technologySkills: [],
    languages: [],
    socialLinks: []
  });

  // Font size state
  const [fontSizes, setFontSizes] = useState({
    name: 14,
    sectionTitle: 10,
    contactInfo: 7,
    jobTitle: 9,
    school: 7,
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
  const [currentSpecialization, setCurrentSpecialization] = useState(defaultSpecialization());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProfessionalDevelopment, setCurrentProfessionalDevelopment] = useState(defaultProfessionalDevelopment());
  const [currentTeachingMethod, setCurrentTeachingMethod] = useState(defaultTeachingMethod());
  const [currentTechnologySkill, setCurrentTechnologySkill] = useState(defaultTechnologySkill());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data
  const testimonials = [
    {
      quote: "Created my teaching resume in 10 minutes and landed interviews the same week. The education-specific templates are incredible!",
      metric: "Found Teaching Position in 2 Weeks",
      name: "Sarah M.",
      role: "Elementary Teacher",
      school: "Sunrise Elementary School"
    },
    {
      quote: "Finally a resume builder that understands education credentials. The ATS templates helped me pass school district screening systems.",
      metric: "3 Interviews in 1 Week",
      name: "James K.",
      role: "High School Math Teacher",
      school: "Lincoln High School"
    },
    {
      quote: "As a recent education graduate, the entry-level teaching templates were perfect. Landed my first teaching job using this builder.",
      metric: "First Job After Graduation",
      name: "Alex P.",
      role: "New Graduate Teacher",
      school: "Community School District"
    },
    {
      quote: "The teacher resume builder saved me - could update my CV between classes. Professional results without the cost.",
      metric: "Career Advancement Success",
      name: "Maria L.",
      role: "Special Education Teacher",
      school: "Learning Center"
    },
    {
      quote: "Education ATS-friendly templates actually work! Got callbacks from schools that previously ignored my applications.",
      metric: "5x More Responses",
      name: "David T.",
      role: "Science Teacher",
      school: "STEM Academy"
    },
    {
      quote: "Free PDF download with proper education formatting? Unbeatable value. Best teacher resume builder I've found.",
      metric: "Perfect Resume in 15min",
      name: "Lisa R.",
      role: "School Administrator",
      school: "Education District"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this teacher resume builder really free with no hidden costs?",
      answer: "Yes, our teacher resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional teaching resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for teacher resumes?",
      answer: "ATS-friendly means our teacher resume templates are optimized to pass through Applicant Tracking Systems used by 95% of school districts and educational institutions worldwide. This ensures your teaching experience and credentials are properly scanned and recognized."
    },
    {
      question: "Can I download my teacher resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional teaching resume in PDF format without creating an account. Everything is completely free and accessible immediately for teachers, professors, and education professionals globally."
    },
    {
      question: "How many teacher resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly teacher resume templates for all education levels: preschool, elementary, middle school, high school, special education, ESL, and university professors. All templates are completely free and optimized for education hiring worldwide."
    },
    {
      question: "How does your teacher resume builder work?",
      answer: "Our builder uses ATS-optimized education templates with proper teaching terminology formatting. We guide you to highlight classroom experience, teaching certifications, pedagogical skills, and student outcomes that schools look for globally."
    },
    {
      question: "Can I edit my teacher resume after downloading it?",
      answer: "Yes, you can always come back and edit your teacher resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
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
      school: 7,
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
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      researchgate: <FiBook />,
      orcid: <FiBook />,
      googleScholar: <FiBook />
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
      formData.specializations.length > 0 ||
      formData.certifications.length > 0 ||
      formData.professionalDevelopment.length > 0 ||
      formData.teachingMethods.length > 0 ||
      formData.technologySkills.length > 0 ||
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.school && currentExperience.startDate);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addSpecialization = createAddFunction('specializations', currentSpecialization, setCurrentSpecialization, defaultSpecialization, () => currentSpecialization.name.trim());
  
  const editSpecialization = createEditFunction('specializations', setCurrentSpecialization);
  const deleteSpecialization = createDeleteFunction('specializations');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addProfessionalDevelopment = createAddFunction('professionalDevelopment', currentProfessionalDevelopment, setCurrentProfessionalDevelopment, defaultProfessionalDevelopment, () => currentProfessionalDevelopment.name.trim());
  
  const editProfessionalDevelopment = createEditFunction('professionalDevelopment', setCurrentProfessionalDevelopment);
  const deleteProfessionalDevelopment = createDeleteFunction('professionalDevelopment');

  const addTeachingMethod = createAddFunction('teachingMethods', currentTeachingMethod, setCurrentTeachingMethod, defaultTeachingMethod, () => currentTeachingMethod.name.trim());
  
  const editTeachingMethod = createEditFunction('teachingMethods', setCurrentTeachingMethod);
  const deleteTeachingMethod = createDeleteFunction('teachingMethods');

  const addTechnologySkill = createAddFunction('technologySkills', currentTechnologySkill, setCurrentTechnologySkill, defaultTechnologySkill, () => currentTechnologySkill.name.trim());
  
  const editTechnologySkill = createEditFunction('technologySkills', setCurrentTechnologySkill);
  const deleteTechnologySkill = createDeleteFunction('technologySkills');

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
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
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
            clone.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
            
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
            
            const schools = clone.querySelectorAll(`.${styles.school}`);
            schools.forEach(school => {
              school.style.fontSize = `${fontSizes.school}pt`;
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
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.professionalDevItem}`);
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
              n.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'teacher_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const TeacherTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSpecializations = formData.specializations.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProfessionalDevelopment = formData.professionalDevelopment.length > 0;
    const hasTeachingMethods = formData.teachingMethods.length > 0;
    const hasTechnologySkills = formData.technologySkills.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className={styles.teacherTemplate} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (
              <div key={i} className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>PROFESSIONAL SUMMARY</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>TEACHING EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{exp.position}</h3>
                  <p className={styles.school} style={{ fontSize: `${fontSizes.school}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                    {exp.school} | {exp.gradeLevel && `${exp.gradeLevel} • `}{exp.subjects} | {exp.startDate} – {exp.endDate || 'Present'}
                  </p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>EDUCATION & QUALIFICATIONS</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className={styles.educationItem}>
                <h3 style={{ fontSize: `${fontSizes.degree}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                  {edu.degree}{edu.major && ` in ${edu.major}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                  {edu.institution} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                  {edu.certifications && ` • ${edu.certifications}`}
                </p>
              </div>
            ))}
          </section>
        )}

        {hasSpecializations && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>TEACHING SPECIALIZATIONS</h2>
            <ul className={styles.skillsList}>
              {formData.specializations.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{s.name}</li>)}
            </ul>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>TEACHING CERTIFICATIONS</h2>
            {formData.certifications.map((c, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certificationText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <strong>{c.name}</strong>
                {c.issuingAuthority && ` – ${c.issuingAuthority}`}
                {c.certificationNumber && ` (Certification #: ${c.certificationNumber})`}
                {c.expiryDate && ` – Expires: ${c.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasProfessionalDevelopment && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>PROFESSIONAL DEVELOPMENT</h2>
            {formData.professionalDevelopment.map((pd, i) => (
              <div key={i} className={styles.professionalDevItem} style={{ fontSize: `${fontSizes.regularText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <strong>{pd.name}</strong>
                {pd.provider && ` – ${pd.provider}`}
                {pd.hours && ` (${pd.hours} hours)`}
                {pd.date && ` – ${pd.date}`}
              </div>
            ))}
          </section>
        )}

        {hasTeachingMethods && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>PEDAGOGICAL APPROACHES</h2>
            <ul className={styles.bulletList}>
              {formData.teachingMethods.map((tm, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{tm.name}</li>)}
            </ul>
          </section>
        )}

        {hasTechnologySkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>EDUCATIONAL TECHNOLOGY SKILLS</h2>
            <ul className={styles.skillsList}>
              {formData.technologySkills.map((ts, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                  {ts.name}{ts.proficiency && ` (${ts.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>LANGUAGES</h2>
            <ul className={styles.bulletList}>
              {formData.languages.map((l, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt`, fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
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
    <div className={styles.teacherResumeBuilder} lang="en-US" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      <Head>
        <title>Free Teacher Resume Builder 2026 | ATS Education Templates</title>
        <meta name="title" content="Free Teacher Resume Builder 2026 | ATS Education Templates" />
        <meta name="description" content="Create a professional teacher resume for free in 2026. ATS-optimized education templates for educators worldwide. Download PDF instantly." />
        <meta name="keywords" content="teacher resume builder, education resume templates, teacher resume builder free, educator resume, ATS friendly teacher resume, free resume builder for teachers, teaching resume, education CV, school teacher resume, international teacher resume" />
        <meta name="author" content="Professional Teacher Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="en-NZ" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="en-IN" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free Teacher Resume Builder 2026 | ATS Education Templates" />
        <meta property="og:description" content="Create a professional teacher resume for free in 2026. ATS-optimized education templates for educators worldwide. Download PDF instantly." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-teacher-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Teacher Resume Builder - Create Professional Education Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Teacher Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:locale:alternate" content="en_NZ" />
        <meta property="og:locale:alternate" content="en_IN" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Teacher Resume Builder 2026 | ATS Education Templates" />
        <meta name="twitter:description" content="Create a professional teacher resume for free in 2026. ATS-optimized education templates for educators worldwide. Download PDF instantly." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-teacher-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Teacher Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@ProTeacherResume" />
        <meta name="twitter:creator" content="@ProTeacherResume" />
        <meta name="theme-color" content="#1976D2" />
        <meta name="msapplication-TileColor" content="#1976D2" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder",
                  "name": "Free Teacher Resume Builder 2026 | ATS Education Templates",
                  "description": "Create a professional teacher resume for free in 2026. ATS-optimized education templates for educators worldwide. Download PDF instantly.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Teacher Resume Free",
                    "description": "Free online resume builder for education professionals worldwide",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Teacher Resume Free",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/ProTeacherResume",
                        "https://www.linkedin.com/company/professional-teacher-resume-free",
                        "https://www.facebook.com/ProfessionalTeacherResumeFree",
                        "https://www.youtube.com/@ProfessionalTeacherResumeFree"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-teacher-resume-builder-preview.jpg",
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
                        "name": "Teacher Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Teacher Resume Builder - ATS Optimized Education Resume Maker",
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
                      "ratingCount": 42365,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly teacher resume builder for education professionals, teachers, professors, and educators worldwide.",
                    "featureList": [
                      "Education ATS-Optimized Templates",
                      "Teacher Content Suggestions",
                      "One-Click PDF Download",
                      "Teaching Experience Formatting",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-teacher-resume-builder.jpg",
                    "applicationSuite": "Education Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Teacher Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Teacher Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized teacher resume for free",
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
                      "name": "Choose a Teacher Template",
                      "text": "Select from our ATS-optimized teacher resume templates designed for all education levels: elementary, secondary, special education, ESL, and university teaching.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-teacher-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Teaching Information",
                      "text": "Add your teaching experience, education, certifications, teaching methods, and pedagogical skills using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-teaching-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our education-specific suggestions to improve teaching keywords and formatting for ATS compatibility in schools worldwide.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Teacher Resume",
                      "text": "Export your professional teacher resume as PDF - completely free, no watermarks, ready for international applications.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Teacher Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Teacher Resume Free",
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
                    "name": "Free Teacher Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Education ATS Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Teacher Resume Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly teacher resume builder for education professionals worldwide",
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
                        "name": "Professional Teacher Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Teacher Resume Builder - ATS Optimized Education Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online ATS-friendly teacher resume builder that helps education professionals create professional resumes and land teaching jobs faster worldwide.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder"
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
      <div className={styles.freshnessIndicator} style={{ display: 'none', fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <meta name="build-timestamp" content={buildTimestamp} />
        <meta name="content-freshness" content={freshnessIndicator} />
      </div>

      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
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
            <Link href="/ats-friendly-teacher-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free Education Resume Template</span>
            </Link>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <section className={styles.heroSection} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.trustBadge}>
              <FiStar className={styles.starIcon} />
              <span className={styles.trustBadgeText}>
                Rated 4.9/5 by 42,365+ Education Professionals | Best Free Teacher Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
              Free Teacher Resume Builder 2026: Start Now
            </h1>
            
            <p className={styles.heroSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized teacher resume for free in minutes.</strong> Our education resume builder ensures your teaching experience and credentials get noticed by schools and educational institutions globally.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free teacher resume now—no sign-up required"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                <span className={styles.buttonText}>Start Building Your Teacher Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download teacher resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Teacher Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>3M+</span>
                <span className={styles.statLabel}>Teacher Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster Education Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Teachers</span>
              </div>
            </div>

            <div className={styles.educationBadges} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiBookOpen /> Elementary Teacher</span>
                <span className={styles.badgeItem}><FiUsers /> High School Teacher</span>
                <span className={styles.badgeItem}><FiHeart /> Special Education</span>
                <span className={styles.badgeItem}><FiGlobe /> ESL Teacher</span>
                <span className={styles.badgeItem}><FiBook /> University Professor</span>
                <span className={styles.badgeItem}><FiVideo /> Online Instructor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className={styles.singleColumnLayout} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        {/* Preview Section */}
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button onClick={() => setShowFullPreview(!showFullPreview)} className={styles.previewButton} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
              </button>
              <button
                onClick={generatePDF}
                className={styles.downloadButton}
                disabled={isGeneratingPDF || !hasContent()}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
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
                  style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
                >
                  <TeacherTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'experience', label: 'Teaching Experience', icon: <FiUsers /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'certifications', label: 'Certifications', icon: <FiShield /> },
              { id: 'skills', label: 'Teaching Skills', icon: <FiActivity /> },
              { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`${styles.navButton} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setActiveSection(item.id)}
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                {item.icon} <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className={styles.formContent}>
            {/* Personal Section */}
            {activeSection === 'personal' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <h3 className={styles.sectionTitle}><FiUser /> Personal Information</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith, M.Ed." required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.smith@education.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, State, Country" className={styles.formInput} />
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Professional Teaching Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Passionate and dedicated educator with 8+ years of experience in elementary education and curriculum development. Skilled in differentiated instruction, classroom management, and fostering inclusive learning environments. Proven track record of improving student achievement through innovative teaching methods and data-driven instruction."
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
                  <p className={styles.sectionDescription}>Add your professional education profiles (LinkedIn, portfolio, research profiles, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Portfolio">Teaching Portfolio</option>
                      <option value="Website">Personal Website</option>
                      <option value="ResearchGate">ResearchGate</option>
                      <option value="Google Scholar">Google Scholar</option>
                      <option value="ORCID">ORCID</option>
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

            {/* Teaching Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <h3 className={styles.sectionTitle}><FiUsers /> Teaching Experience</h3>
                <p className={styles.sectionDescription}>List your teaching positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Elementary Teacher, Grade 4" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      School/Institution*
                      <input 
                        value={currentExperience.school} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, school: e.target.value })} 
                        placeholder="Sunrise Elementary School" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Grade Level
                      <input 
                        value={currentExperience.gradeLevel} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, gradeLevel: e.target.value })} 
                        placeholder="Grade 4, K-5, 9-12" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Subjects/Areas
                      <input 
                        value={currentExperience.subjects} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, subjects: e.target.value })} 
                        placeholder="Mathematics, Science, Literacy" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input 
                        type="text" 
                        placeholder="Month Year (e.g., August 2020)" 
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
                    Key Teaching Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Developed and implemented differentiated lesson plans for 25+ students
• Integrated technology tools (Google Classroom, Kahoot!) to enhance engagement
• Collaborated with special education team to implement IEP accommodations
• Led after-school math club, improving student participation by 40%
• Parent-teacher conference participation rate increased to 95%"
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
                      disabled={!currentExperience.position || !currentExperience.school || !currentExperience.startDate}
                    >
                      <FiPlus /> {currentExperience.isEditing ? 'Update Teaching Experience' : 'Add Teaching Experience'}
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
                  <h4 className={styles.subSectionTitle}>Your Teaching Experience</h4>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No teaching experience added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.experience.map((exp, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{exp.position}</strong>
                              <span className={styles.itemSubtitle}>at {exp.school}</span>
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                              {exp.gradeLevel && <span>Grade: {exp.gradeLevel}</span>}
                              {exp.subjects && <span>Subjects: {exp.subjects}</span>}
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
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <h3 className={styles.sectionTitle}><FiBook /> Education & Qualifications</h3>
                <p className={styles.sectionDescription}>List your education degrees, certifications, and relevant training</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="University of Education" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree/Certification*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Master of Education (M.Ed.)" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Major / Concentration / Specialization
                    <input 
                      value={currentEducation.major} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, major: e.target.value })} 
                      placeholder="Elementary Education, Curriculum & Instruction" 
                      className={styles.formInput} 
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Teaching Credentials / Certifications Earned
                    <input 
                      value={currentEducation.certifications} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, certifications: e.target.value })} 
                      placeholder="State Teaching License, ESL Endorsement" 
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
                              {edu.major && <span className={styles.itemSubtitle}> in {edu.major}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}</span>
                              <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                              {edu.certifications && <span>Credentials: {edu.certifications}</span>}
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

            {/* Certifications & Skills Section */}
            {activeSection === 'certifications' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <h3 className={styles.sectionTitle}><FiShield /> Teaching Certifications</h3>
                
                {/* Teaching Certifications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Teaching Certifications & Licenses</h4>
                  <p className={styles.sectionDescription}>Add your teaching certifications, licenses, and endorsements</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification/License Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="State Teaching License" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Authority
                        <input 
                          value={currentCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                          placeholder="State Department of Education" 
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
                          placeholder="TEACH-1234567" 
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
                          {c.certificationNumber && ` (#${c.certificationNumber})`}
                          {c.expiryDate && ` – Expires: ${c.expiryDate}`}
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

                {/* Professional Development */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Professional Development & Training</h4>
                  <p className={styles.sectionDescription}>Add workshops, conferences, and ongoing professional learning</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Workshop/Course Name*
                        <input 
                          value={currentProfessionalDevelopment.name} 
                          onChange={(e) => setCurrentProfessionalDevelopment({ ...currentProfessionalDevelopment, name: e.target.value })} 
                          placeholder="Differentiated Instruction Workshop" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Provider/Organization
                        <input 
                          value={currentProfessionalDevelopment.provider} 
                          onChange={(e) => setCurrentProfessionalDevelopment({ ...currentProfessionalDevelopment, provider: e.target.value })} 
                          placeholder="National Education Association" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Hours/Duration
                        <input 
                          value={currentProfessionalDevelopment.hours} 
                          onChange={(e) => setCurrentProfessionalDevelopment({ ...currentProfessionalDevelopment, hours: e.target.value })} 
                          placeholder="15 hours" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Completion Date
                        <input 
                          value={currentProfessionalDevelopment.date} 
                          onChange={(e) => setCurrentProfessionalDevelopment({ ...currentProfessionalDevelopment, date: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addProfessionalDevelopment} 
                        className={styles.addButton} 
                        disabled={!currentProfessionalDevelopment.name.trim()}
                      >
                        <FiPlus /> {currentProfessionalDevelopment.isEditing ? 'Update Training' : 'Add Training'}
                      </button>
                      {currentProfessionalDevelopment.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentProfessionalDevelopment(defaultProfessionalDevelopment())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.professionalDevelopment.map((pd, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{pd.name}</strong>
                          {pd.provider && ` – ${pd.provider}`}
                          {pd.hours && ` (${pd.hours})`}
                          {pd.date && ` – ${pd.date}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editProfessionalDevelopment(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteProfessionalDevelopment(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.professionalDevelopment.length === 0 && <p className={styles.emptyMessage}>No professional development added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Teaching Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <h3 className={styles.sectionTitle}><FiActivity /> Teaching Skills & Specializations</h3>
                
                {/* Teaching Specializations */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Teaching Specializations</h4>
                  <p className={styles.sectionDescription}>List your teaching specialties and areas of expertise</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentSpecialization.name} 
                      onChange={(e) => setCurrentSpecialization({ ...currentSpecialization, name: e.target.value })} 
                      placeholder="Differentiated Instruction, Classroom Management, STEM Education" 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSpecialization} 
                        className={styles.addButton} 
                        disabled={!currentSpecialization.name.trim()}
                      >
                        <FiPlus /> {currentSpecialization.isEditing ? 'Update Specialization' : 'Add Specialization'}
                      </button>
                      {currentSpecialization.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSpecialization(defaultSpecialization())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.specializations.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{s.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSpecialization(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSpecialization(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.specializations.length === 0 && <p className={styles.emptyMessage}>No specializations added yet</p>}
                  </div>
                </div>

                {/* Teaching Methods */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Pedagogical Approaches & Teaching Methods</h4>
                  <p className={styles.sectionDescription}>List your teaching methodologies and instructional approaches</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentTeachingMethod.name} 
                      onChange={(e) => setCurrentTeachingMethod({ ...currentTeachingMethod, name: e.target.value })} 
                      placeholder="Project-Based Learning, Flipped Classroom, Inquiry-Based Learning" 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addTeachingMethod} 
                        className={styles.addButton} 
                        disabled={!currentTeachingMethod.name.trim()}
                      >
                        <FiPlus /> {currentTeachingMethod.isEditing ? 'Update Method' : 'Add Method'}
                      </button>
                      {currentTeachingMethod.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentTeachingMethod(defaultTeachingMethod())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.teachingMethods.map((tm, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{tm.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editTeachingMethod(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteTeachingMethod(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.teachingMethods.length === 0 && <p className={styles.emptyMessage}>No teaching methods added yet</p>}
                  </div>
                </div>

                {/* Technology Skills */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Educational Technology Skills</h4>
                  <p className={styles.sectionDescription}>List your proficiency with educational technology tools and platforms</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Technology Tool*
                        <input 
                          value={currentTechnologySkill.name} 
                          onChange={(e) => setCurrentTechnologySkill({ ...currentTechnologySkill, name: e.target.value })} 
                          placeholder="Google Classroom, Zoom, Kahoot!" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Proficiency Level
                        <input 
                          value={currentTechnologySkill.proficiency} 
                          onChange={(e) => setCurrentTechnologySkill({ ...currentTechnologySkill, proficiency: e.target.value })} 
                          placeholder="Advanced, Intermediate, Basic" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addTechnologySkill} 
                        className={styles.addButton} 
                        disabled={!currentTechnologySkill.name.trim()}
                      >
                        <FiPlus /> {currentTechnologySkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentTechnologySkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentTechnologySkill(defaultTechnologySkill())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.technologySkills.map((ts, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          {ts.name}{ts.proficiency && ` (${ts.proficiency})`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editTechnologySkill(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteTechnologySkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.technologySkills.length === 0 && <p className={styles.emptyMessage}>No technology skills added yet</p>}
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
                          placeholder="Spanish, French, Mandarin" 
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

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
                <h3 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h3>
                <p className={styles.sectionDescription}>Customize font sizes for your teacher resume PDF. All sizes are in points (pt).</p>
                
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
                        <span>School/Institution Names</span>
                        <span className={styles.fontSizeValue}>{fontSizes.school}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.school}
                        onChange={(e) => handleFontSizeChange('school', e.target.value)}
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
      <section className={styles.faqSection} aria-labelledby="faq-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
              Everything you need to know about creating professional teacher resumes with our tool.
            </p>
          </div>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{faq.question}</h3>
                <p className={styles.faqAnswer} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection} aria-labelledby="cta-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle} id="cta-title" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>Ready to Advance Your Teaching Career?</h2>
            <p className={styles.ctaSubtitle} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
              Join 3 million+ education professionals worldwide who landed their dream teaching jobs with our free ATS-friendly teacher resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free teacher resume now—no sign-up required"
                style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
              >
                <span className={styles.ctaButtonText}>Create Your Free Teacher Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>No credit card required • Free forever • Download in minutes • ATS Optimized for Education • Works Worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()} style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Teacher Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <TeacherTemplate formData={formData} />
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
    { name: 'Teacher Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-teacher-resume-builder' }
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

export default TeacherResume;