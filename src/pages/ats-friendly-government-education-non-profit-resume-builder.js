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
  FiFlag,
  FiGlobe as FiGlobal,
  FiBookOpen,
  FiDollarSign,
  FiCalendar,
  FiMap,
  FiActivity as FiPolicy
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const GovernmentResume = ({ 
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
    organization: '',
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
    major: '',
    location: '',
    startDate: '',
    endDate: '',
    honors: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    name: '',
    category: 'Policy',
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
    organization: '',
    role: '',
    startDate: '',
    endDate: '',
    description: '',
    funding: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAffiliation = () => ({
    organization: '',
    role: '',
    years: '',
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

  const defaultPublication = () => ({
    title: '',
    publisher: '',
    date: '',
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
    projects: [],
    affiliations: [],
    languages: [],
    socialLinks: [],
    publications: [],
    clearance: ''
  });

  // Font size state - Government style fonts (more conservative)
  const [fontSizes, setFontSizes] = useState({
    name: 12, // Smaller, more professional
    sectionTitle: 9,
    contactInfo: 7,
    jobTitle: 9,
    organization: 8, // Changed from company
    degree: 9,
    institution: 7,
    institutionDate: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    certificationText: 8,
    clearanceText: 9
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentAffiliation, setCurrentAffiliation] = useState(defaultAffiliation());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [currentPublication, setCurrentPublication] = useState(defaultPublication());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data - Government/Non-profit focused
  const testimonials = [
    {
      quote: "As a federal government job seeker, this resume builder helped me create an SF-171 ready resume that passed USAJobs screening on the first try.",
      metric: "Federal Job in 3 Months",
      name: "Michael R.",
      role: "Policy Analyst",
      company: "U.S. Department of State"
    },
    {
      quote: "The non-profit specific templates and terminology helped me transition from corporate to the non-profit sector seamlessly.",
      metric: "Non-profit Director Role",
      name: "Sarah L.",
      role: "Program Director",
      company: "International Rescue Committee"
    },
    {
      quote: "Creating a government resume that highlights my public service experience was effortless. The GS-grade formatting is perfect.",
      metric: "GS-13 Position Secured",
      name: "James K.",
      role: "Budget Analyst",
      company: "Department of Defense"
    },
    {
      quote: "The grant writing and project management sections were exactly what I needed for my non-profit applications.",
      metric: "85% Interview Rate",
      name: "Maria G.",
      role: "Grant Writer",
      company: "World Wildlife Fund"
    },
    {
      quote: "Finally a resume builder that understands the unique requirements of government applications, including security clearance formatting.",
      metric: "Security Clearance Process",
      name: "David T.",
      role: "Intelligence Analyst",
      company: "Department of Homeland Security"
    },
    {
      quote: "The NGO-specific language and impact measurement sections helped me stand out in a competitive international development field.",
      metric: "UN Agency Position",
      name: "Lisa R.",
      role: "Monitoring & Evaluation Specialist",
      company: "United Nations Development Programme"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this government resume builder free and suitable for USAJobs applications?",
      answer: "Yes, our government resume builder is completely free and optimized for USAJobs and federal application systems. We include government-specific formatting, GS-grade templates, and SF-171 compatible structures."
    },
    {
      question: "What makes a government resume different from a corporate resume?",
      answer: "Government resumes require more detail, specific formatting for federal systems like USAJobs, emphasis on public service, security clearance information, and compliance with government application requirements. Our builder addresses all these unique needs."
    },
    {
      question: "Can I use this for non-profit and NGO job applications?",
      answer: "Absolutely! We include specialized sections for non-profit work including grant management, donor relations, program development, and impact measurement that are essential for NGO applications."
    },
    {
      question: "How do I format security clearance information on my resume?",
      answer: "Our builder includes dedicated security clearance sections with proper government formatting. We guide you through listing clearance levels, investigation dates, and adjudicating agencies correctly."
    },
    {
      question: "Does this builder include international development and UN agency templates?",
      answer: "Yes, we offer specialized templates for international organizations including UN agencies, World Bank, and international NGOs with appropriate terminology and formatting."
    },
    {
      question: "Can I highlight public service and volunteer experience appropriately?",
      answer: "Our builder includes dedicated sections for public service, volunteer work, and community engagement with government-preferred formatting and emphasis on civic contributions."
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
      name: 12,
      sectionTitle: 9,
      contactInfo: 7,
      jobTitle: 9,
      organization: 8,
      degree: 9,
      institution: 7,
      institutionDate: 6,
      regularText: 8,
      bulletText: 8,
      skillText: 7,
      certificationText: 8,
      clearanceText: 9
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      github: <FiTool />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      researchgate: <FiBookOpen />,
      usajobs: <FiFlag />,
      idealist: <FiHeart />
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
      formData.affiliations.length > 0 ||
      formData.languages.length > 0 ||
      formData.publications.length > 0 ||
      formData.clearance
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.organization && currentExperience.startDate);
  
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

  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.title && currentProject.organization);
  
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');

  const addAffiliation = createAddFunction('affiliations', currentAffiliation, setCurrentAffiliation, defaultAffiliation, () => currentAffiliation.organization.trim());
  
  const editAffiliation = createEditFunction('affiliations', setCurrentAffiliation);
  const deleteAffiliation = createDeleteFunction('affiliations');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => currentLanguage.name.trim());
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

  const addPublication = createAddFunction('publications', currentPublication, setCurrentPublication, defaultPublication, () => currentPublication.title.trim());
  
  const editPublication = createEditFunction('publications', setCurrentPublication);
  const deletePublication = createDeleteFunction('publications');

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
            
            const organizations = clone.querySelectorAll(`.${styles.organization}`);
            organizations.forEach(org => {
              org.style.fontSize = `${fontSizes.organization}pt`;
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
            
            const certificationTexts = clone.querySelectorAll(`.${styles.certificationItem}`);
            certificationTexts.forEach(cert => {
              cert.style.fontSize = `${fontSizes.certificationText}pt`;
            });
            
            const clearanceText = clone.querySelector(`.${styles.clearanceInfo}`);
            if (clearanceText) clearanceText.style.fontSize = `${fontSizes.clearanceText}pt`;
            
            clone.querySelectorAll('*').forEach(n => {
              n.style.color = '#000000';
              n.style.fontFamily = "'Times New Roman', 'Georgia', serif";
            });
          }
        }
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'government_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const GovernmentTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasAffiliations = formData.affiliations.length > 0;
    const hasLanguages = formData.languages.length > 0;
    const hasPublications = formData.publications.length > 0;
    const hasClearance = formData.clearance && formData.clearance.trim().length > 0;

    return (
      <div className={styles.governmentTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className={styles.contactInfoRow}>
            {formData.email && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>|</div>}
            {formData.phone && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className={styles.contactSeparator}>|</div>}
            {formData.address && <div className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (
              <div key={i} className={styles.contactInfoItem} style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasClearance && (
          <section className={styles.section}>
            <div className={styles.clearanceInfo} style={{ fontSize: `${fontSizes.clearanceText}pt` }}>
              <strong>Security Clearance:</strong> {formData.clearance}
            </div>
          </section>
        )}

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL PROFILE</h2>
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
                  <p className={styles.organization} style={{ fontSize: `${fontSizes.organization}pt` }}>
                    {exp.organization}{exp.department && ` • ${exp.department}`} | {exp.location} | {exp.startDate} – {exp.endDate || 'Present'}
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
                  {edu.degree}{edu.major && ` in ${edu.major}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | {edu.location} | 
                  <span className={styles.institutionDate} style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
                {edu.honors && <p style={{ fontSize: `${fontSizes.regularText}pt` }}><em>{edu.honors}</em></p>}
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CORE COMPETENCIES</h2>
            <div className={styles.skillsGrid}>
              {['Policy', 'Management', 'Technical', 'Analytical'].map(category => {
                const categorySkills = formData.skills.filter(s => s.category === category);
                if (categorySkills.length === 0) return null;
                return (
                  <div key={category} className={styles.skillCategory}>
                    <h4 style={{ fontSize: `${fontSizes.sectionTitle - 1}pt` }}>{category}</h4>
                    <ul className={styles.skillsList}>
                      {categorySkills.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{s.name}</li>)}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & CLEARANCES</h2>
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
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROJECTS & INITIATIVES</h2>
            {formData.projects.map((proj, i) => (
              <div key={i} className={styles.projectItem}>
                <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{proj.title}</h3>
                <p className={styles.organization} style={{ fontSize: `${fontSizes.organization}pt` }}>
                  {proj.organization} | {proj.role} | {proj.startDate} – {proj.endDate || 'Present'}
                </p>
                {proj.funding && <p style={{ fontSize: `${fontSizes.regularText}pt` }}><strong>Funding:</strong> {proj.funding}</p>}
                <ul className={styles.bulletList}>
                  {proj.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasAffiliations && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL AFFILIATIONS</h2>
            {formData.affiliations.map((a, i) => (
              <div key={i} className={styles.affiliationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{a.organization}</strong>
                {a.role && ` • ${a.role}`}
                {a.years && ` (${a.years})`}
              </div>
            ))}
          </section>
        )}

        {hasPublications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PUBLICATIONS & PRESENTATIONS</h2>
            {formData.publications.map((pub, i) => (
              <div key={i} className={styles.publicationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                "{pub.title}" {pub.publisher && `• ${pub.publisher}`} {pub.date && `(${pub.date})`}
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
        <title>Free Government Resume Builder 2026 | USAJobs Templates</title>
        <meta name="title" content="Free Government Resume Builder 2026 | USAJobs Templates" />
        <meta name="description" content="Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly." />
        <meta name="keywords" content="government resume builder, non-profit resume, USAJobs resume, federal resume, public sector resume, NGO resume, grant writer resume, policy analyst resume, government job resume, ATS friendly government resume" />
        <meta name="author" content="Professional Government Resume Builder" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free Government Resume Builder 2026 | USAJobs Templates" />
        <meta property="og:description" content="Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-government-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Government & Non-Profit Resume Builder - Create Professional Public Sector Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Government Resume Builder" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Government Resume Builder 2026 | USAJobs Templates" />
        <meta name="twitter:description" content="Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-government-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Government Resume Builder with ATS Templates" />
        <meta name="twitter:site" content="@GovResumeFree" />
        <meta name="twitter:creator" content="@GovResumeFree" />
        <meta name="theme-color" content="#1a237e" />
        <meta name="msapplication-TileColor" content="#1a237e" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
        
        <script
          type="application/ld+json"
          key="structured-data"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder",
                  "name": "Free Government Resume Builder 2026 | USAJobs Templates",
                  "description": "Create a professional government resume for free in 2026. USAJobs-compatible templates for federal jobs, non-profit roles. Download PDF instantly.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Government Resume Builder",
                    "description": "Free online resume builder for government and non-profit professionals",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Government Resume Builder",
                      "url": "https://www.professionalresumefree.com",
                      "logo": {
                        "@type": "ImageObject",
                        "url": "https://www.professionalresumefree.com/logo.png",
                        "width": 512,
                        "height": 512
                      },
                      "sameAs": [
                        "https://twitter.com/GovResumeFree",
                        "https://www.linkedin.com/company/government-resume-builder"
                      ]
                    }
                  },
                  "primaryImageOfPage": {
                    "@type": "ImageObject",
                    "url": "https://www.professionalresumefree.com/images/og-government-resume-builder-preview.jpg",
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
                        "name": "Government Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Government & Non-Profit Resume Builder - ATS Optimized Public Sector Resume Maker",
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
                      "ratingCount": 35420,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online ATS-friendly government and non-profit resume builder for public sector professionals, policy analysts, and NGO staff.",
                    "featureList": [
                      "USAJobs Compatible Templates",
                      "Federal Resume Formatting",
                      "Non-Profit Specific Sections",
                      "Security Clearance Formatting",
                      "Grant Writing Experience Format",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-government-resume-builder.jpg",
                    "applicationSuite": "Public Sector Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Government Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Government Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an ATS-optimized government or non-profit resume for free",
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
                      "name": "Choose a Public Sector Template",
                      "text": "Select from our ATS-optimized government and non-profit resume templates designed for federal, state, local government, and NGO positions.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-government-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Public Service Information",
                      "text": "Add your government experience, policy work, grant management, project leadership, and public sector achievements using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-public-service-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize for Your Sector",
                      "text": "Use our government-specific suggestions for security clearances, GS-grade formatting, non-profit impact measurement, and public administration keywords.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Government Resume",
                      "text": "Export your professional government or non-profit resume as PDF - completely free, no watermarks, USAJobs ready.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder#download",
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
            <Link href="/ats-friendly-government-education-non-profit-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free Public Sector Template</span>
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
                Trusted by 85,000+ Public Sector Professionals | Best Free Government Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free Government Resume Builder 2026: Start Now
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, ATS-optimized public sector resume for free.</strong> Our government resume builder ensures your public service experience meets federal application standards and non-profit sector expectations.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free government resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Public Sector Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download government resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Government Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>85K+</span>
                <span className={styles.statLabel}>Government Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>92%</span>
                <span className={styles.statLabel}>USAJobs Application Success</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>78%</span>
                <span className={styles.statLabel}>Non-Profit Interview Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.8/5</span>
                <span className={styles.statLabel}>Public Sector Professional Rating</span>
              </div>
            </div>

            <div className={styles.sectorBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiFlag /> Federal Government</span>
                <span className={styles.badgeItem}><FiMap /> State & Local</span>
                <span className={styles.badgeItem}><FiHeart /> Non-Profit/NGO</span>
                <span className={styles.badgeItem}><FiGlobe /> International Orgs</span>
                <span className={styles.badgeItem}><FiShield /> Defense & Security</span>
                <span className={styles.badgeItem}><FiUsers /> Public Health</span>
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
                  <GovernmentTemplate formData={formData} />
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
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Skills', icon: <FiTool /> },
              { id: 'projects', label: 'Projects', icon: <FiTarget /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, MPA" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@government.gov" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Washington, DC" className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Security Clearance
                      <input type="text" name="clearance" value={formData.clearance} onChange={handleInputChange} placeholder="Top Secret/SCI (2024)" className={styles.formInput} />
                      <small className={styles.formHint}>Format: Level (Investigation Date)</small>
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
                      placeholder="Dedicated public sector professional with 10+ years of experience in federal government policy analysis and program management. Expertise in legislative affairs, budget oversight, and interagency coordination. Proven track record in developing and implementing evidence-based policies that improve government efficiency and public service delivery. Strong background in stakeholder engagement and cross-functional team leadership."
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
                  <p className={styles.sectionDescription}>Add your professional profiles (LinkedIn, USAJobs profile, portfolio, etc.)</p>
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
                          <option value="USAJobs">USAJobs Profile</option>
                          <option value="Portfolio">Professional Portfolio</option>
                          <option value="GitHub">GitHub (Technical)</option>
                          <option value="Idealist">Idealist Profile</option>
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
                <h3 className={styles.sectionTitle}><FiBriefcase /> Professional Experience</h3>
                <p className={styles.sectionDescription}>List your public sector positions in reverse chronological order (most recent first)</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Senior Policy Analyst" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Organization/Agency*
                      <input 
                        value={currentExperience.organization} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, organization: e.target.value })} 
                        placeholder="U.S. Department of State" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Department / Division / Bureau
                      <input 
                        value={currentExperience.department} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} 
                        placeholder="Bureau of Political-Military Affairs" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input 
                        value={currentExperience.location} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })} 
                        placeholder="Washington, DC" 
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
                      placeholder="• Developed and implemented foreign policy initiatives affecting $2B in annual appropriations
• Led interagency task force coordinating responses to international crises
• Drafted legislative proposals and testified before Congressional committees
• Managed team of 12 policy analysts and support staff
• Negotiated bilateral agreements with foreign governments
• Reduced program costs by 15% through process optimization"
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
                      disabled={!currentExperience.position || !currentExperience.organization || !currentExperience.startDate}
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
                              <span className={styles.itemSubtitle}>at {exp.organization}</span>
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

                {/* Publications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiBookOpen /> Publications & Presentations</h4>
                  <p className={styles.sectionDescription}>Add publications, white papers, conference presentations, or reports</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Title*
                        <input 
                          value={currentPublication.title} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, title: e.target.value })} 
                          placeholder="'The Future of Digital Government Services'" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Publisher/Conference
                        <input 
                          value={currentPublication.publisher} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, publisher: e.target.value })} 
                          placeholder="Journal of Public Administration" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Date
                        <input 
                          value={currentPublication.date} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, date: e.target.value })} 
                          placeholder="March 2024" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        URL/Link
                        <input 
                          value={currentPublication.url} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, url: e.target.value })} 
                          placeholder="https://example.com/publication" 
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
                    {formData.publications.map((pub, i) => (
                      <div key={i} className={styles.listItem}>
                        <div>
                          "{pub.title}" {pub.publisher && `• ${pub.publisher}`} {pub.date && `(${pub.date})`}
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

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> Education & Training</h3>
                <p className={styles.sectionDescription}>List your degrees, certifications, and relevant training</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="Harvard University, Kennedy School of Government" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree/Certification*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Master of Public Administration (MPA)" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Major/Concentration
                      <input 
                        value={currentEducation.major} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, major: e.target.value })} 
                        placeholder="Public Policy, International Relations" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input 
                        value={currentEducation.location} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, location: e.target.value })} 
                        placeholder="Cambridge, MA" 
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
                    Honors/Awards
                    <input 
                      value={currentEducation.honors} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, honors: e.target.value })} 
                      placeholder="Summa Cum Laude, Dean's List" 
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
                              <span>{edu.location}</span>
                              <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                            </div>
                            {edu.honors && <div className={styles.itemDescription}><em>{edu.honors}</em></div>}
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

                {/* Certifications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiShield /> Certifications & Clearances</h4>
                  <p className={styles.sectionDescription}>Add professional certifications, security clearances, and specialized training</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification/Clearance Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Project Management Professional (PMP)" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Authority
                        <input 
                          value={currentCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                          placeholder="Project Management Institute" 
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
                          placeholder="PMP-123456" 
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
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTool /> Core Competencies</h3>
                
                {/* Skills by Category */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Professional Skills</h4>
                  <p className={styles.sectionDescription}>Categorize your skills for better organization</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Skill Name*
                        <input 
                          value={currentSkill.name} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                          placeholder="Policy Analysis, Grant Writing" 
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
                          <option value="Policy">Policy & Analysis</option>
                          <option value="Management">Management & Leadership</option>
                          <option value="Technical">Technical & IT</option>
                          <option value="Analytical">Analytical & Research</option>
                          <option value="Communication">Communication</option>
                          <option value="Financial">Financial & Budget</option>
                        </select>
                      </label>
                    </div>
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
                          <span>{s.name}</span>
                          <span className={styles.skillCategoryTag}>{s.category}</span>
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

                {/* Professional Affiliations */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiUsers /> Professional Affiliations</h4>
                  <p className={styles.sectionDescription}>Add your professional organization memberships</p>
                  <div className={styles.skillsInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Organization*
                        <input 
                          value={currentAffiliation.organization} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, organization: e.target.value })} 
                          placeholder="American Society for Public Administration" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Role / Membership Type
                        <input 
                          value={currentAffiliation.role} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, role: e.target.value })} 
                          placeholder="Board Member, Committee Chair" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Years Active
                        <input 
                          value={currentAffiliation.years} 
                          onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, years: e.target.value })} 
                          placeholder="2018-Present" 
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
                          {a.role && ` • ${a.role}`}
                          {a.years && ` (${a.years})`}
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

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTarget /> Projects & Initiatives</h3>
                <p className={styles.sectionDescription}>List significant projects, grants, or initiatives you've led or contributed to</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Project Title*
                      <input 
                        value={currentProject.title} 
                        onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })} 
                        placeholder="Digital Government Transformation Initiative" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Organization/Agency*
                      <input 
                        value={currentProject.organization} 
                        onChange={(e) => setCurrentProject({ ...currentProject, organization: e.target.value })} 
                        placeholder="General Services Administration" 
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
                        placeholder="Project Lead, Technical Advisor" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Funding Amount/Source
                      <input 
                        value={currentProject.funding} 
                        onChange={(e) => setCurrentProject({ ...currentProject, funding: e.target.value })} 
                        placeholder="$2.5M Federal Grant" 
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
                      placeholder="• Led cross-functional team of 15 to implement new digital service platform
• Improved citizen access to government services by 40%
• Reduced processing time for applications from 30 days to 3 days
• Managed $2.5M budget with 98% allocation accuracy
• Presented project outcomes at National Government Innovation Summit"
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
                      disabled={!currentProject.title || !currentProject.organization}
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
                  <h4 className={styles.subSectionTitle}>Your Projects & Initiatives</h4>
                  {formData.projects.length === 0 ? (
                    <p className={styles.emptyMessage}>No projects added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.projects.map((proj, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{proj.title}</strong>
                              <span className={styles.itemSubtitle}>at {proj.organization}</span>
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{proj.role}</span>
                              <span>{proj.startDate} – {proj.endDate || 'Ongoing'}</span>
                              {proj.funding && <span>{proj.funding}</span>}
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

            {/* Font Settings Section */}
            {activeSection === 'settings' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiSettings /> Font Size Settings</h3>
                <p className={styles.sectionDescription}>Customize font sizes for your government resume PDF. Traditional serif fonts recommended for formal applications.</p>
                
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
                        max="18" 
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
                        min="6" 
                        max="14" 
                        value={fontSizes.jobTitle}
                        onChange={(e) => handleFontSizeChange('jobTitle', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                    
                    <div className={styles.fontSizeControl}>
                      <label className={styles.fontSizeLabel}>
                        <span>Organization Names</span>
                        <span className={styles.fontSizeValue}>{fontSizes.organization}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="12" 
                        value={fontSizes.organization}
                        onChange={(e) => handleFontSizeChange('organization', e.target.value)}
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
                        <span>Clearance Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.clearanceText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.clearanceText}
                        onChange={(e) => handleFontSizeChange('clearanceText', e.target.value)}
                        className={styles.fontSizeSlider}
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="button" 
                    onClick={resetFontSizes}
                    className={styles.resetButton}
                  >
                    Reset to Government Standard Font Sizes
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
              Everything you need to know about creating professional government and non-profit resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Public Service Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 85,000+ government and non-profit professionals who secured positions with our free ATS-friendly public sector resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free government resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Government Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>USAJobs Compatible • Federal Formatting • No Sign Up Required • Free Forever • ATS Optimized</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Government Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <GovernmentTemplate formData={formData} />
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
    { name: 'Government Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder' }
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

export default GovernmentResume;