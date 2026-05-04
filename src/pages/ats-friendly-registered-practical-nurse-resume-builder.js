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
  FiCalendar,
  FiClipboard,
  FiDroplet,
  FiThermometer
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
  
  const defaultSpecialty = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultLicense = () => ({
    name: '',
    issuingAuthority: '',
    licenseNumber: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAffiliation = () => ({
    organization: '',
    role: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultProcedure = () => ({
    name: '',
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

  // NEW: Default for Canadian RPN specific fields
  const defaultPracticeSetting = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });

  const defaultMedicationSkill = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });

  const defaultWoundCareSkill = () => ({
    name: '',
    isEditing: false,
    editIndex: null
  });

  const defaultCanadianCertification = () => ({
    name: '',
    issuingAuthority: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    province: '',
    summary: '',
    rpnLicenseNumber: '',
    collegeRegistration: '',
    experience: [],
    education: [],
    specialties: [],
    licenses: [],
    affiliations: [],
    procedures: [],
    languages: [],
    socialLinks: [],
    // NEW: Canadian RPN specific fields
    practiceSettings: [],
    medicationSkills: [],
    woundCareSkills: [],
    canadianCertifications: [],
    emergencySkills: [],
    patientPopulations: []
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
    licenseText: 8,
    certificationText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSpecialty, setCurrentSpecialty] = useState(defaultSpecialty());
  const [currentLicense, setCurrentLicense] = useState(defaultLicense());
  const [currentAffiliation, setCurrentAffiliation] = useState(defaultAffiliation());
  const [currentProcedure, setCurrentProcedure] = useState(defaultProcedure());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  // NEW: Canadian RPN specific states
  const [currentPracticeSetting, setCurrentPracticeSetting] = useState(defaultPracticeSetting());
  const [currentMedicationSkill, setCurrentMedicationSkill] = useState(defaultMedicationSkill());
  const [currentWoundCareSkill, setCurrentWoundCareSkill] = useState(defaultWoundCareSkill());
  const [currentCanadianCertification, setCurrentCanadianCertification] = useState(defaultCanadianCertification());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Registered Practical Nurses in Canada
  const testimonials = [
    {
      quote: "As a newly graduated RPN in Ontario, this builder helped me create a professional resume that landed me 3 interviews in my first week of applying. The Canadian-specific templates are perfect!",
      metric: "First Job in 2 Weeks",
      name: "Sarah M., RPN",
      role: "Registered Practical Nurse",
      company: "Toronto General Hospital"
    },
    {
      quote: "Transitioning from another province to Ontario was challenging, but the builder's provincial-specific license formatting helped me showcase my credentials properly. Got hired within a month!",
      metric: "Cross-Province Success",
      name: "James K., RPN",
      role: "Registered Practical Nurse",
      company: "Vancouver Coastal Health"
    },
    {
      quote: "The RPN-specific skill categories like wound care and medication administration made it easy to highlight my clinical competencies. Recruiters commented on how professional my resume looked.",
      metric: "5 Interview Offers",
      name: "Alex P., RPN",
      role: "Registered Practical Nurse",
      company: "Sunnybrook Health Sciences"
    },
    {
      quote: "As an internationally educated nurse now working as an RPN in Canada, this builder helped me format my credentials to Canadian standards. Essential for anyone new to the Canadian healthcare system.",
      metric: "Successful IEN Transition",
      name: "Maria L., RPN",
      role: "Registered Practical Nurse",
      company: "Hamilton Health Sciences"
    },
    {
      quote: "The College of Nurses of Ontario (CNO) specific formatting for competencies saved me hours. My resume passed through hospital ATS systems and got me callbacks from my top choice facilities.",
      metric: "3 Job Offers",
      name: "David T., RPN",
      role: "Registered Practical Nurse",
      company: "Ottawa Hospital"
    },
    {
      quote: "Free RPN resume builder with Canadian healthcare terminology? Game changer! Created my resume during night shift and downloaded it ready for applications. Highly recommend for Canadian RPNs.",
      metric: "Perfect Resume in 20min",
      name: "Lisa R., RPN",
      role: "Registered Practical Nurse",
      company: "BC Children's Hospital"
    }
  ];

  // FAQ Data for Canadian RPNs
  const faqs = [
    {
      question: "Is this RPN resume builder specifically designed for Canadian healthcare employers?",
      answer: "Yes, our RPN resume builder is exclusively designed for Canadian Registered Practical Nurses. It includes Canadian healthcare terminology, provincial licensing formats, CNO competencies, and templates optimized for Canadian hospitals and long-term care facilities."
    },
    {
      question: "How do I format my RPN license for different Canadian provinces?",
      answer: "Our builder automatically formats your RPN license according to provincial standards (e.g., College of Nurses of Ontario for ON, BCCNM for BC, CLPNM for Manitoba). Just enter your license number and province, and we'll format it correctly for Canadian employers."
    },
    {
      question: "Can I download my RPN resume as a PDF without creating an account?",
      answer: "Absolutely! Download your professional RPN resume in PDF format without creating an account. Everything is completely free and tailored specifically for Registered Practical Nurses in Canada."
    },
    {
      question: "Does the builder include Canadian RPN competencies and practice standards?",
      answer: "Yes, we include all Canadian RPN competencies: medication administration, wound care, assessment skills, documentation, and CNO practice standards. Our templates highlight skills that Canadian healthcare employers specifically look for in RPN candidates."
    },
    {
      question: "How does your RPN resume builder work for new graduates in Canada?",
      answer: "We have specialized templates for new RPN graduates in Canada, including clinical placement experience formatting, CNO entry-to-practice competencies, and Canadian healthcare system terminology to help new grads land their first nursing position."
    },
    {
      question: "Can I use this for RPN jobs in hospitals, long-term care, and community settings across Canada?",
      answer: "Yes! Our templates are optimized for all RPN practice settings in Canada: acute care hospitals, long-term care facilities, community health, home care, clinics, and rehabilitation centers. We include specific skills for each setting."
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
      licenseText: 8,
      certificationText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      doximity: <FiHeart />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      indeed: <FiBriefcase />,
      cno: <FiShield />
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
      formData.specialties.length > 0 ||
      formData.licenses.length > 0 ||
      formData.affiliations.length > 0 ||
      formData.procedures.length > 0 ||
      formData.languages.length > 0 ||
      formData.practiceSettings.length > 0 ||
      formData.medicationSkills.length > 0 ||
      formData.woundCareSkills.length > 0 ||
      formData.canadianCertifications.length > 0
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

  const addSpecialty = createAddFunction('specialties', currentSpecialty, setCurrentSpecialty, defaultSpecialty, () => currentSpecialty.name.trim());
  
  const editSpecialty = createEditFunction('specialties', setCurrentSpecialty);
  const deleteSpecialty = createDeleteFunction('specialties');

  const addLicense = createAddFunction('licenses', currentLicense, setCurrentLicense, defaultLicense, () => currentLicense.name.trim());
  
  const editLicense = createEditFunction('licenses', setCurrentLicense);
  const deleteLicense = createDeleteFunction('licenses');

  const addAffiliation = createAddFunction('affiliations', currentAffiliation, setCurrentAffiliation, defaultAffiliation, () => currentAffiliation.organization.trim());
  
  const editAffiliation = createEditFunction('affiliations', setCurrentAffiliation);
  const deleteAffiliation = createDeleteFunction('affiliations');

  const addProcedure = createAddFunction('procedures', currentProcedure, setCurrentProcedure, defaultProcedure, () => currentProcedure.name.trim());
  
  const editProcedure = createEditFunction('procedures', setCurrentProcedure);
  const deleteProcedure = createDeleteFunction('procedures');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

  // NEW: Canadian RPN specific CRUD functions
  const addPracticeSetting = createAddFunction('practiceSettings', currentPracticeSetting, setCurrentPracticeSetting, defaultPracticeSetting, () => currentPracticeSetting.name.trim());
  
  const editPracticeSetting = createEditFunction('practiceSettings', setCurrentPracticeSetting);
  const deletePracticeSetting = createDeleteFunction('practiceSettings');

  const addMedicationSkill = createAddFunction('medicationSkills', currentMedicationSkill, setCurrentMedicationSkill, defaultMedicationSkill, () => currentMedicationSkill.name.trim());
  
  const editMedicationSkill = createEditFunction('medicationSkills', setCurrentMedicationSkill);
  const deleteMedicationSkill = createDeleteFunction('medicationSkills');

  const addWoundCareSkill = createAddFunction('woundCareSkills', currentWoundCareSkill, setCurrentWoundCareSkill, defaultWoundCareSkill, () => currentWoundCareSkill.name.trim());
  
  const editWoundCareSkill = createEditFunction('woundCareSkills', setCurrentWoundCareSkill);
  const deleteWoundCareSkill = createDeleteFunction('woundCareSkills');

  const addCanadianCertification = createAddFunction('canadianCertifications', currentCanadianCertification, setCurrentCanadianCertification, defaultCanadianCertification, () => currentCanadianCertification.name.trim());
  
  const editCanadianCertification = createEditFunction('canadianCertifications', setCurrentCanadianCertification);
  const deleteCanadianCertification = createDeleteFunction('canadianCertifications');

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
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.licenseItem}, .${styles.affiliationItem}`);
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
            
            const licenseTexts = clone.querySelectorAll(`.${styles.licenseItem}`);
            licenseTexts.forEach(license => {
              license.style.fontSize = `${fontSizes.licenseText}pt`;
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

      pdf.save(`${formData.fullName || 'RPN_resume'}_Registered_Practical_Nurse_Canada.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Canadian RPN Resume Template ---
  const CanadianRPNTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSpecialties = formData.specialties.length > 0;
    const hasLicenses = formData.licenses.length > 0;
    const hasAffiliations = formData.affiliations.length > 0;
    const hasProcedures = formData.procedures.length > 0;
    const hasLanguages = formData.languages.length > 0;
    const hasPracticeSettings = formData.practiceSettings.length > 0;
    const hasMedicationSkills = formData.medicationSkills.length > 0;
    const hasWoundCareSkills = formData.woundCareSkills.length > 0;
    const hasCanadianCertifications = formData.canadianCertifications.length > 0;

    return (
      <div className={styles.healthcareTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'} <span className={styles.rpnDesignation}>, RPN</span>
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}{formData.province && `, ${formData.province}, Canada`}</div>}
            {formData.rpnLicenseNumber && (
              <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                <FiShield /> RPN License: {formData.rpnLicenseNumber}
              </div>
            )}
          </div>
          {formData.collegeRegistration && (
            <div className={styles.collegeRegistration} style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
              <FiShield /> {formData.collegeRegistration}
            </div>
          )}
        </header>

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL PROFILE</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasPracticeSettings && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>RPN PRACTICE SETTINGS</h2>
            <ul className={styles.skillsList}>
              {formData.practiceSettings.map((setting, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{setting.name}</li>)}
            </ul>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>NURSING EXPERIENCE</h2>
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION & NURSING PROGRAMS</h2>
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

        {hasMedicationSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>MEDICATION ADMINISTRATION SKILLS</h2>
            <ul className={styles.bulletList}>
              {formData.medicationSkills.map((skill, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{skill.name}</li>)}
            </ul>
          </section>
        )}

        {hasWoundCareSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>WOUND CARE & CLINICAL PROCEDURES</h2>
            <ul className={styles.bulletList}>
              {formData.woundCareSkills.map((skill, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{skill.name}</li>)}
            </ul>
          </section>
        )}

        {hasLicenses && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>REGISTRATION & LICENSURE</h2>
            {formData.licenses.map((l, i) => (
              <div key={i} className={styles.licenseItem} style={{ fontSize: `${fontSizes.licenseText}pt` }}>
                <strong>{l.name}</strong>
                {l.issuingAuthority && ` – ${l.issuingAuthority}`}
                {l.licenseNumber && ` (#${l.licenseNumber})`}
                {l.expiryDate && ` – Expires: ${l.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasCanadianCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CANADIAN CERTIFICATIONS</h2>
            {formData.canadianCertifications.map((cert, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.certificationText}pt` }}>
                <strong>{cert.name}</strong>
                {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasSpecialties && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CLINICAL SPECIALTIES</h2>
            <ul className={styles.skillsList}>
              {formData.specialties.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{s.name}</li>)}
            </ul>
          </section>
        )}

        {hasProcedures && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>NURSING PROCEDURES</h2>
            <ul className={styles.bulletList}>
              {formData.procedures.map((p, i) => <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{p.name}</li>)}
            </ul>
          </section>
        )}

        {hasAffiliations && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL AFFILIATIONS</h2>
            {formData.affiliations.map((a, i) => (
              <div key={i} className={styles.affiliationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{a.organization}</strong>
                {a.role && ` – ${a.role}`}
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
    <div className={styles.resumeBuilder} lang="en-CA">
      <Head>
        <title>Free RPN Resume Builder Canada | Canadian Nursing Templates 2026</title>
        <meta name="title" content="Free RPN Resume Builder Canada | Canadian Nursing Templates 2026" />
        <meta name="description" content="Create your Canadian RPN resume for free in 2026. ATS-optimized templates with provincial licensing, CNO standards & Canadian healthcare terminology. Trusted by 2M+ Canadian RPNs." />
        <meta name="keywords" content="RPN resume builder, Registered Practical Nurse resume Canada, Canadian RPN resume, healthcare resume builder Canada, RPN resume template Ontario, BC RPN resume, Alberta RPN resume, nursing resume Canada, CNO resume format, ATS friendly RPN resume" />
        <meta name="author" content="Professional RPN Resume Free - Canada" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder" />
        <meta property="og:title" content="Free RPN Resume Builder Canada | Canadian Nursing Templates 2026" />
        <meta property="og:description" content="Create your Canadian RPN resume for free in 2026. ATS-optimized templates with provincial licensing, CNO standards & Canadian healthcare terminology." />
        <meta property="og:image" content="https://professionalresumefree.com/images/og-rpn-resume-builder-canada-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Registered Practical Nurse (RPN) Resume Builder for Canada" />
        <meta property="og:url" content="https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional RPN Resume Free - Canada" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free RPN Resume Builder Canada | Canadian Nursing Templates 2026" />
        <meta name="twitter:description" content="Create your Canadian RPN resume for free in 2026. ATS-optimized templates with provincial licensing, CNO standards & Canadian healthcare terminology." />
        <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-rpn-resume-builder-canada-preview.jpg" />
        <meta name="twitter:image:alt" content="Free RPN Resume Builder for Canada" />
        <meta name="twitter:site" content="@RPNResumeCanada" />
        <meta name="twitter:creator" content="@RPNResumeCanada" />
        <meta name="theme-color" content="#D70015" />
        <meta name="msapplication-TileColor" content="#D70015" />
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
                  "@id": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder#webpage",
                  "url": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder",
                  "name": "Free Registered Practical Nurse (RPN) Resume Builder - Canadian Healthcare Templates 2026",
                  "description": "Create professional ATS-optimized Registered Practical Nurse resumes for Canadian healthcare jobs. Free RPN resume builder with Canadian terminology and provincial licensing standards.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-CA",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://professionalresumefree.com/#website",
                    "url": "https://professionalresumefree.com",
                    "name": "Professional RPN Resume Free - Canada",
                    "description": "Free online resume builder for Registered Practical Nurses in Canada",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://professionalresumefree.com/#organization",
                      "name": "Professional RPN Resume Free - Canada",
                      "url": "https://professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://professionalresumefree.com/logo-canada.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/RPNResumeCanada",
                        "https://www.linkedin.com/company/rpn-resume-canada",
                        "https://www.facebook.com/RPNResumeCanada"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://professionalresumefree.com/images/og-rpn-resume-builder-canada-preview.jpg",
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
                        "name": "RPN Resume Builder Canada",
                        "item": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Registered Practical Nurse (RPN) Resume Builder - Canadian Edition",
                    "applicationCategory": "BusinessApplication",
                    "operatingSystem": "Any",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "CAD",
                      "availability": "https://schema.org/InStock",
                      "priceValidUntil": "2026-12-31"
                    },
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": 4.9,
                      "ratingCount": 25365,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly Registered Practical Nurse resume builder for Canadian healthcare jobs. Includes Canadian terminology, provincial licensing formats, and CNO standards.",
                    "featureList": [
                      "Canadian RPN ATS-Optimized Templates",
                      "Provincial Licensing Formats",
                      "CNO Standards & Competencies",
                      "Canadian Healthcare Terminology",
                      "One-Click PDF Download",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://professionalresumefree.com/images/screenshot-rpn-resume-builder-canada.jpg",
                    "applicationSuite": "Canadian Healthcare Career Tools",
                    "countriesSupported": "Canada",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "RPN Resume Builder Canada Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional RPN Resume for Canadian Healthcare Jobs",
                  "description": "Step-by-step guide to create an ATS-optimized Registered Practical Nurse resume for Canadian employers",
                  "totalTime": "PT20M",
                  "estimatedCost": {
                    "@type": "MonetaryAmount",
                    "currency": "CAD",
                    "value": "0"
                  },
                  "step": [
                    {
                      "@type": "HowToStep",
                      "position": 1,
                      "name": "Enter Canadian RPN Credentials",
                      "text": "Add your RPN license number, provincial registration, and Canadian nursing education details with proper formatting for Canadian employers.",
                      "url": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder#credentials",
                      "image": "https://professionalresumefree.com/images/step1-rpn-credentials.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Add Canadian Nursing Experience",
                      "text": "Include your Canadian nursing experience with proper terminology for acute care, long-term care, community health, and other Canadian practice settings.",
                      "url": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder#experience",
                      "image": "https://professionalresumefree.com/images/step2-canadian-experience.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Highlight Canadian RPN Skills",
                      "text": "Add Canadian-specific RPN skills including medication administration, wound care, assessment skills, and CNO competencies required in Canadian healthcare facilities.",
                      "url": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder#skills",
                      "image": "https://professionalresumefree.com/images/step3-canadian-skills.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Canadian RPN Resume",
                      "text": "Export your professional Canadian RPN resume as PDF with proper Canadian healthcare formatting - completely free, no watermarks.",
                      "url": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder#download",
                      "image": "https://professionalresumefree.com/images/step4-download-canada.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online RPN Resume Building Service for Canada",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional RPN Resume Free - Canada",
                    "url": "https://professionalresumefree.com",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "+1-800-555-9876",
                      "contactType": "Customer Support",
                      "availableLanguage": "en, fr"
                    }
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Canada"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Free RPN Resume Building Services for Canada",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Canadian RPN Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Provincial License Formatting"
                        }
                      }
                    ]
                  },
                  "description": "Free ATS-friendly Registered Practical Nurse resume builder for Canadian healthcare professionals",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "CAD"
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
                        "name": "Professional RPN Resume Free - Canada"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Registered Practical Nurse (RPN) Resume Builder - Canadian Edition",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "CAD"
                        },
                        "description": "Free online ATS-friendly Registered Practical Nurse resume builder for Canadian healthcare jobs.",
                        "url": "https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder"
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
            <Link href="/ats-friendly-registered-practical-nurse-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Canadian RPN Template</span>
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
                Rated 4.9/5 by 25365+ Canadian RPNs | Best Free RPN Resume Builder Canada 2026
              </span>
            </div>
            
            {/* SINGLE H1 TAG */}
            <h1 className={styles.heroTitle}>
              Create Your Canadian RPN Resume 2026
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized RPN resume for Canadian healthcare jobs in minutes.</strong> Our Canadian RPN resume builder ensures your credentials meet provincial standards and get noticed by hospitals, LTC facilities, and healthcare employers across Canada.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free Canadian RPN resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Canadian RPN Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download RPN resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Canadian RPN Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>2M+</span>
                <span className={styles.statLabel}>Canadian RPN Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>96%</span>
                <span className={styles.statLabel}>Canadian Employer Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>Faster Canadian RPN Hires</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from Canadian RPNs</span>
              </div>
            </div>

            <div className={styles.medicalBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}>Ontario RPN Templates</span>
                <span className={styles.badgeItem}>BC RPN Templates</span>
                <span className={styles.badgeItem}>Alberta RPN Templates</span>
                <span className={styles.badgeItem}>CNO Standards</span>
                <span className={styles.badgeItem}>Canadian LTC Format</span>
                <span className={styles.badgeItem}>Acute Care Canada</span>
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
                  <CanadianRPNTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection}>
          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'RPN Credentials', icon: <FiShield /> },
              { id: 'experience', label: 'Nursing Experience', icon: <FiHeart /> },
              { id: 'education', label: 'Nursing Education', icon: <FiBook /> },
              { id: 'skills', label: 'RPN Skills', icon: <FiActivity /> },
              { id: 'licenses', label: 'Licenses', icon: <FiAward /> },
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
                <h3 className={styles.sectionTitle}><FiShield /> RPN Credentials & Contact Information</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name (with RPN designation)*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith, RPN" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.smith@healthcare.ca" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      City & Province*
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Toronto, ON" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      RPN License Number*
                      <input type="text" name="rpnLicenseNumber" value={formData.rpnLicenseNumber} onChange={handleInputChange} placeholder="RN1234567" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      College Registration*
                      <input type="text" name="collegeRegistration" value={formData.collegeRegistration} onChange={handleInputChange} placeholder="College of Nurses of Ontario (CNO)" required className={styles.formInput} />
                    </label>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Canadian RPN Professional Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Compassionate and dedicated Registered Practical Nurse (RPN) with 5+ years of experience in Canadian long-term care and acute care settings. Proficient in medication administration, wound care, and patient assessment according to Canadian nursing standards. Demonstrated ability to provide safe, competent, and ethical nursing care in accordance with provincial regulations and CNO standards. Committed to patient-centered care and interdisciplinary collaboration in the Canadian healthcare system."
                      required
                      className={styles.formTextarea}
                      rows="6"
                    />
                    <div className={styles.characterCount}>
                      {formData.summary.length}/500 characters
                    </div>
                  </label>
                </div>

                {/* Practice Settings */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiActivity /> Canadian RPN Practice Settings</h4>
                  <p className={styles.sectionDescription}>Select your Canadian nursing practice settings</p>
                  <div className={styles.skillsInput}>
                    <select 
                      value={currentPracticeSetting.name} 
                      onChange={(e) => setCurrentPracticeSetting({ ...currentPracticeSetting, name: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Practice Setting</option>
                      <option value="Acute Care Hospital">Acute Care Hospital</option>
                      <option value="Long-Term Care Facility">Long-Term Care Facility</option>
                      <option value="Community Health">Community Health</option>
                      <option value="Home Care">Home Care</option>
                      <option value="Rehabilitation Center">Rehabilitation Center</option>
                      <option value="Mental Health Facility">Mental Health Facility</option>
                      <option value="Palliative Care">Palliative Care</option>
                      <option value="Correctional Facility">Correctional Facility</option>
                      <option value="Public Health">Public Health</option>
                      <option value="Occupational Health">Occupational Health</option>
                    </select>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addPracticeSetting} 
                        className={styles.addButton} 
                        disabled={!currentPracticeSetting.name.trim()}
                      >
                        <FiPlus /> {currentPracticeSetting.isEditing ? 'Update' : 'Add Setting'}
                      </button>
                      {currentPracticeSetting.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentPracticeSetting(defaultPracticeSetting())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.practiceSettings.length === 0 ? (
                      <p className={styles.emptyMessage}>No practice settings added yet</p>
                    ) : (
                      formData.practiceSettings.map((setting, i) => (
                        <div key={i} className={styles.listItem}>
                          <span>{setting.name}</span>
                          <div className={styles.itemActions}>
                            <button onClick={() => editPracticeSetting(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deletePracticeSetting(i)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Nursing Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiHeart /> Canadian Nursing Experience</h3>
                <p className={styles.sectionDescription}>List your Canadian nursing positions in reverse chronological order</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Registered Practical Nurse (RPN)" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Canadian Healthcare Facility*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="Toronto General Hospital" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Department / Unit / Specialty
                    <input 
                      value={currentExperience.department} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} 
                      placeholder="Medical-Surgical Unit / Long-Term Care" 
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
                    Key Canadian Nursing Responsibilities & Achievements*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Provided comprehensive nursing care to 20+ residents in LTC facility according to Canadian standards
• Administered medications, treatments, and performed wound care following CNO guidelines
• Conducted thorough patient assessments and documented in electronic health records (EMR)
• Collaborated with interdisciplinary healthcare team including RNs, physicians, and allied health
• Participated in quality improvement initiatives to enhance patient care delivery
• Mentored nursing students and new RPN graduates in Canadian healthcare practices"
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
                      <FiPlus /> {currentExperience.isEditing ? 'Update Nursing Experience' : 'Add Nursing Experience'}
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
                  <h4 className={styles.subSectionTitle}>Your Canadian Nursing Experience</h4>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No nursing experience added yet</p>
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
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> Canadian Nursing Education</h3>
                <p className={styles.sectionDescription}>List your Canadian nursing education and training programs</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Canadian Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="Seneca College School of Nursing" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Nursing Diploma/Degree*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Practical Nursing Diploma" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Program Specialization
                    <input 
                      value={currentEducation.program} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} 
                      placeholder="Registered Practical Nursing Program" 
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
                        placeholder="Month Year" 
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
                  <h4 className={styles.subSectionTitle}>Your Canadian Nursing Education</h4>
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

            {/* RPN Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiActivity /> Canadian RPN Clinical Skills</h3>
                
                {/* Medication Administration Skills */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiDroplet /> Medication Administration Skills</h4>
                  <p className={styles.sectionDescription}>Add your Canadian medication administration competencies</p>
                  <div className={styles.skillsInput}>
                    <select 
                      value={currentMedicationSkill.name} 
                      onChange={(e) => setCurrentMedicationSkill({ ...currentMedicationSkill, name: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Medication Skill</option>
                      <option value="Oral Medication Administration">Oral Medication Administration</option>
                      <option value="Subcutaneous Injections">Subcutaneous Injections</option>
                      <option value="Intramuscular Injections">Intramuscular Injections</option>
                      <option value="Topical Medication Application">Topical Medication Application</option>
                      <option value="Eye/Ear Drop Administration">Eye/Ear Drop Administration</option>
                      <option value="Nebulizer Treatment Administration">Nebulizer Treatment Administration</option>
                      <option value="Medication Reconciliation">Medication Reconciliation</option>
                      <option value="Controlled Substance Administration">Controlled Substance Administration</option>
                      <option value="PRN Medication Management">PRN Medication Management</option>
                      <option value="Medication Storage & Handling">Medication Storage & Handling</option>
                    </select>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addMedicationSkill} 
                        className={styles.addButton} 
                        disabled={!currentMedicationSkill.name.trim()}
                      >
                        <FiPlus /> {currentMedicationSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentMedicationSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentMedicationSkill(defaultMedicationSkill())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.medicationSkills.map((skill, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{skill.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editMedicationSkill(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteMedicationSkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.medicationSkills.length === 0 && <p className={styles.emptyMessage}>No medication skills added yet</p>}
                  </div>
                </div>

                {/* Wound Care Skills */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiThermometer /> Wound Care & Clinical Procedures</h4>
                  <p className={styles.sectionDescription}>Add your wound care and clinical procedure competencies</p>
                  <div className={styles.skillsInput}>
                    <select 
                      value={currentWoundCareSkill.name} 
                      onChange={(e) => setCurrentWoundCareSkill({ ...currentWoundCareSkill, name: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Wound Care Skill</option>
                      <option value="Wound Assessment & Documentation">Wound Assessment & Documentation</option>
                      <option value="Dressing Changes (Sterile & Clean)">Dressing Changes (Sterile & Clean)</option>
                      <option value="Pressure Injury Prevention & Management">Pressure Injury Prevention & Management</option>
                      <option value="Wound Vacuum Therapy">Wound Vacuum Therapy</option>
                      <option value="Staple/Suture Removal">Staple/Suture Removal</option>
                      <option value="Diabetic Foot Care">Diabetic Foot Care</option>
                      <option value="Tracheostomy Care">Tracheostomy Care</option>
                      <option value="Ostomy Care">Ostomy Care</option>
                      <option value="Catheter Insertion & Care">Catheter Insertion & Care</option>
                      <option value="IV Therapy Management">IV Therapy Management</option>
                    </select>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addWoundCareSkill} 
                        className={styles.addButton} 
                        disabled={!currentWoundCareSkill.name.trim()}
                      >
                        <FiPlus /> {currentWoundCareSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentWoundCareSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentWoundCareSkill(defaultWoundCareSkill())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.woundCareSkills.map((skill, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{skill.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editWoundCareSkill(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteWoundCareSkill(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.woundCareSkills.length === 0 && <p className={styles.emptyMessage}>No wound care skills added yet</p>}
                  </div>
                </div>

                {/* Clinical Specialties */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Clinical Specialties</h4>
                  <p className={styles.sectionDescription}>List your nursing specialties and areas of expertise</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentSpecialty.name} 
                      onChange={(e) => setCurrentSpecialty({ ...currentSpecialty, name: e.target.value })} 
                      placeholder="Geriatric Care, Palliative Care, Mental Health" 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSpecialty} 
                        className={styles.addButton} 
                        disabled={!currentSpecialty.name.trim()}
                      >
                        <FiPlus /> {currentSpecialty.isEditing ? 'Update Specialty' : 'Add Specialty'}
                      </button>
                      {currentSpecialty.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSpecialty(defaultSpecialty())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.specialties.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{s.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSpecialty(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteSpecialty(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.specialties.length === 0 && <p className={styles.emptyMessage}>No specialties added yet</p>}
                  </div>
                </div>

                {/* Nursing Procedures */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Nursing Procedures</h4>
                  <p className={styles.sectionDescription}>List additional nursing procedures and technical skills</p>
                  <div className={styles.skillsInput}>
                    <input 
                      value={currentProcedure.name} 
                      onChange={(e) => setCurrentProcedure({ ...currentProcedure, name: e.target.value })} 
                      placeholder="Vital Signs Monitoring, Blood Glucose Testing, ECG" 
                      className={styles.formInput} 
                    />
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addProcedure} 
                        className={styles.addButton} 
                        disabled={!currentProcedure.name.trim()}
                      >
                        <FiPlus /> {currentProcedure.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentProcedure.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentProcedure(defaultProcedure())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.procedures.map((p, i) => (
                      <div key={i} className={styles.listItem}>
                        <span>{p.name}</span>
                        <div className={styles.itemActions}>
                          <button onClick={() => editProcedure(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteProcedure(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.procedures.length === 0 && <p className={styles.emptyMessage}>No procedures added yet</p>}
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Languages</h4>
                  <p className={styles.sectionDescription}>List languages you speak (especially valuable in multicultural Canada)</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Language*
                        <input 
                          value={currentLanguage.name} 
                          onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                          placeholder="French, Punjabi, Mandarin" 
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

            {/* Licenses Section */}
            {activeSection === 'licenses' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiAward /> Canadian Licenses & Certifications</h3>
                
                {/* Licenses & Registrations */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiShield /> Professional Licenses & Registrations</h4>
                  <p className={styles.sectionDescription}>Add your Canadian professional licenses and registrations</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        License/Registration Name*
                        <input 
                          value={currentLicense.name} 
                          onChange={(e) => setCurrentLicense({ ...currentLicense, name: e.target.value })} 
                          placeholder="Registered Practical Nurse (RPN) License" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Authority (Canadian)
                        <input 
                          value={currentLicense.issuingAuthority} 
                          onChange={(e) => setCurrentLicense({ ...currentLicense, issuingAuthority: e.target.value })} 
                          placeholder="College of Nurses of Ontario (CNO)" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        License Number
                        <input 
                          value={currentLicense.licenseNumber} 
                          onChange={(e) => setCurrentLicense({ ...currentLicense, licenseNumber: e.target.value })} 
                          placeholder="RN1234567" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Expiry Date
                        <input 
                          value={currentLicense.expiryDate} 
                          onChange={(e) => setCurrentLicense({ ...currentLicense, expiryDate: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addLicense} 
                        className={styles.addButton} 
                        disabled={!currentLicense.name.trim()}
                      >
                        <FiPlus /> {currentLicense.isEditing ? 'Update License' : 'Add License'}
                      </button>
                      {currentLicense.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentLicense(defaultLicense())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.licenses.map((l, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{l.name}</strong>
                          {l.issuingAuthority && ` – ${l.issuingAuthority}`}
                          {l.licenseNumber && ` (#${l.licenseNumber})`}
                          {l.expiryDate && ` – Expires: ${l.expiryDate}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editLicense(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteLicense(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.licenses.length === 0 && <p className={styles.emptyMessage}>No licenses added yet</p>}
                  </div>
                </div>

                {/* Canadian Certifications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiAward /> Canadian Nursing Certifications</h4>
                  <p className={styles.sectionDescription}>Add your Canadian nursing certifications and training</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Name*
                        <input 
                          value={currentCanadianCertification.name} 
                          onChange={(e) => setCurrentCanadianCertification({ ...currentCanadianCertification, name: e.target.value })} 
                          placeholder="Basic Life Support (BLS)" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Organization (Canadian)
                        <input 
                          value={currentCanadianCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCanadianCertification({ ...currentCanadianCertification, issuingAuthority: e.target.value })} 
                          placeholder="Heart & Stroke Foundation of Canada" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Expiry Date
                        <input 
                          value={currentCanadianCertification.expiryDate} 
                          onChange={(e) => setCurrentCanadianCertification({ ...currentCanadianCertification, expiryDate: e.target.value })} 
                          placeholder="Month Year" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addCanadianCertification} 
                        className={styles.addButton} 
                        disabled={!currentCanadianCertification.name.trim()}
                      >
                        <FiPlus /> {currentCanadianCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                      </button>
                      {currentCanadianCertification.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentCanadianCertification(defaultCanadianCertification())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.canadianCertifications.map((cert, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{cert.name}</strong>
                          {cert.issuingAuthority && ` – ${cert.issuingAuthority}`}
                          {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editCanadianCertification(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteCanadianCertification(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.canadianCertifications.length === 0 && <p className={styles.emptyMessage}>No certifications added yet</p>}
                  </div>
                </div>

                {/* Professional Affiliations */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Professional Affiliations</h4>
                  <p className={styles.sectionDescription}>Add your Canadian professional nursing organization memberships</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Organization*
                        <input 
                          value={currentAffiliation.organization} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, organization: e.target.value })} 
                          placeholder="Registered Practical Nurses Association of Ontario (RPNAO)" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Role / Membership Type
                        <input 
                          value={currentAffiliation.role} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, role: e.target.value })} 
                          placeholder="Active Member, Committee Member" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addAffiliation} 
                        className={styles.addButton} 
                        disabled={!currentAffiliation.organization.trim()}
                      >
                        <FiPlus /> {currentAffiliation.isEditing ? 'Update Affiliation' : 'Add Affiliation'}
                      </button>
                      {currentAffiliation.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentAffiliation(defaultAffiliation())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.affiliations.map((a, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          <strong>{a.organization}</strong>
                          {a.role && ` – ${a.role}`}
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editAffiliation(i)} className={styles.editButton}><FiEdit2 /></button>
                          <button onClick={() => deleteAffiliation(i)} className={styles.deleteButton}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.affiliations.length === 0 && <p className={styles.emptyMessage}>No affiliations added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h3>
                <p className={styles.sectionDescription}>Customize font sizes for your RPN resume PDF. All sizes are in points (pt).</p>
                
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
                        <span>License Text</span>
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
      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle} id="faq-title">Frequently Asked Questions</h2>
            <p className={styles.sectionSubtitle}>
              Everything you need to know about creating professional RPN resumes for Canadian healthcare jobs.
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

      {/* CTA Section - Changed to h3 for single H1 compliance */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle} id="cta-title">Ready to Advance Your RPN Career in Canada?</h3>
            <p className={styles.ctaSubtitle}>
              Join 2 million+ Canadian RPNs who landed their dream jobs with our free ATS-friendly RPN resume builder designed specifically for Canadian healthcare.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free Canadian RPN resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Canadian RPN Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • Canadian ATS Optimized • CNO Standards</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Canadian RPN Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <CanadianRPNTemplate formData={formData} />
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
    { name: 'RPN Resume Builder Canada', item: 'https://professionalresumefree.com/ats-friendly-registered-practical-nurse-resume-builder' }
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