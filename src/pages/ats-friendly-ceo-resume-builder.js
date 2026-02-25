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
  FiTrendingUp,
  FiAward,
  FiGlobe,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiCheck,
  FiStar,
  FiArrowRight,
  FiClock,
  FiHome,
  FiChevronRight as FiChevronRightIcon,
  FiTarget,
  FiTool,
  FiBarChart,
  FiLayers,
  FiDollarSign,
  FiUsers,
  FiSettings,
  FiThumbsUp,
  FiZap,
  FiActivity,
  FiFlag
} from 'react-icons/fi';
import Link from 'next/link';
import styles from './Resume.module.css';

const CeoResume = ({ 
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
    location: '',
    startDate: '',
    endDate: '',
    description: '',
    achievements: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    program: '',
    location: '',
    startDate: '',
    endDate: '',
    honors: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultExpertise = () => ({
    name: '',
    category: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuingAuthority: '',
    year: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultBoardPosition = () => ({
    organization: '',
    position: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAchievement = () => ({
    title: '',
    description: '',
    metrics: '',
    year: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultPublication = () => ({
    title: '',
    publisher: '',
    year: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSpeakingEngagement = () => ({
    event: '',
    organization: '',
    year: '',
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
    title: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    expertise: [],
    certifications: [],
    boardPositions: [],
    achievements: [],
    publications: [],
    speakingEngagements: [],
    socialLinks: []
  });

  // Font size state - Executive level sizing
  const [fontSizes, setFontSizes] = useState({
    name: 16,
    title: 10,
    sectionTitle: 10,
    contactInfo: 7,
    jobTitle: 10,
    company: 8,
    degree: 9,
    institution: 8,
    date: 7,
    regularText: 8,
    bulletText: 8,
    skillText: 8,
    achievementText: 9
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentExpertise, setCurrentExpertise] = useState(defaultExpertise());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentBoardPosition, setCurrentBoardPosition] = useState(defaultBoardPosition());
  const [currentAchievement, setCurrentAchievement] = useState(defaultAchievement());
  const [currentPublication, setCurrentPublication] = useState(defaultPublication());
  const [currentSpeakingEngagement, setCurrentSpeakingEngagement] = useState(defaultSpeakingEngagement());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  // Testimonials for Structured Data (CEO/Business Leaders)
  const testimonials = [
    {
      quote: "This executive resume builder helped me land a CEO position at a Fortune 500 company. The strategic focus and board-level formatting made all the difference.",
      metric: "CEO Position Secured in 45 Days",
      name: "Michael R.",
      role: "Chief Executive Officer",
      company: "Fortune 500 Tech Company"
    },
    {
      quote: "Finally a resume tool that understands C-suite metrics. Quantified my achievements properly and impressed the board interview committee.",
      metric: "25% Compensation Increase",
      name: "Sarah K.",
      role: "COO",
      company: "Global Manufacturing Corp"
    },
    {
      quote: "As an aspiring board member, the director-level template showcased my governance experience perfectly. Landed my first board seat within 3 months.",
      metric: "First Public Board Appointment",
      name: "David P.",
      role: "Independent Director",
      company: "NYSE Listed Company"
    },
    {
      quote: "The executive summary templates are exceptional. Recruiters told me it was the most polished CEO resume they'd ever seen.",
      metric: "5 Board Interviews in 2 Weeks",
      name: "Jessica L.",
      role: "President & CEO",
      company: "Healthcare Organization"
    },
    {
      quote: "Turnaround specialists need specific metrics - this builder helped me showcase $500M in value creation perfectly.",
      metric: "$500M Value Creation Highlighted",
      name: "Robert T.",
      role: "Turnaround CEO",
      company: "Private Equity Portfolio"
    },
    {
      quote: "International executive roles require sophisticated formatting. This tool delivered a globally-recognized executive CV.",
      metric: "Global CEO Role Secured",
      name: "Amanda R.",
      role: "Managing Director EMEA",
      company: "Multinational Corporation"
    }
  ];

  // FAQ Data for Structured Data (CEO/Business Leaders)
  const faqs = [
    {
      question: "Is this executive resume builder truly free for C-suite professionals?",
      answer: "Yes, our executive resume builder is completely free with no hidden costs. Create, edit, and download your professional CEO/C-suite resume in PDF format without any payment required. We believe in empowering business leaders with professional tools."
    },
    {
      question: "What makes this builder different for executive-level resumes?",
      answer: "Our executive resume builder is specifically designed for C-suite professionals with board-level formatting, strategic focus areas, achievement quantification, and proper executive summary structuring that search committees and boards expect."
    },
    {
      question: "Can I download my executive resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional executive resume in PDF format without creating an account. Everything is completely free and accessible immediately for CEOs, board members, and senior executives."
    },
    {
      question: "How many executive resume templates are available?",
      answer: "We offer professionally designed executive resume templates for CEOs, CFOs, COOs, board directors, managing directors, and all C-suite positions. All templates feature board-level formatting and strategic presentation."
    },
    {
      question: "How does your executive resume builder work?",
      answer: "Our builder uses executive-optimized templates with proper C-suite terminology formatting. We guide you to highlight strategic leadership, P&L experience, board governance, and quantifiable achievements that board search committees look for."
    },
    {
      question: "Can I edit my executive resume after downloading it?",
      answer: "Yes, you can always come back and edit your executive resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free. Perfect for ongoing career management."
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
      title: 10,
      sectionTitle: 10,
      contactInfo: 7,
      jobTitle: 10,
      company: 8,
      degree: 9,
      institution: 8,
      date: 7,
      regularText: 8,
      bulletText: 8,
      skillText: 8,
      achievementText: 9
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      twitter: <FiGlobe />,
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
      formData.title ||
      formData.summary ||
      formData.socialLinks.length > 0 ||
      formData.experience.length > 0 ||
      formData.education.length > 0 ||
      formData.expertise.length > 0 ||
      formData.certifications.length > 0 ||
      formData.boardPositions.length > 0 ||
      formData.achievements.length > 0 ||
      formData.publications.length > 0 ||
      formData.speakingEngagements.length > 0
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.employer);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addExpertise = createAddFunction('expertise', currentExpertise, setCurrentExpertise, defaultExpertise, () => currentExpertise.name.trim());
  
  const editExpertise = createEditFunction('expertise', setCurrentExpertise);
  const deleteExpertise = createDeleteFunction('expertise');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addBoardPosition = createAddFunction('boardPositions', currentBoardPosition, setCurrentBoardPosition, defaultBoardPosition, () => currentBoardPosition.organization.trim());
  
  const editBoardPosition = createEditFunction('boardPositions', setCurrentBoardPosition);
  const deleteBoardPosition = createDeleteFunction('boardPositions');

  const addAchievement = createAddFunction('achievements', currentAchievement, setCurrentAchievement, defaultAchievement, () => currentAchievement.title.trim());
  
  const editAchievement = createEditFunction('achievements', setCurrentAchievement);
  const deleteAchievement = createDeleteFunction('achievements');

  const addPublication = createAddFunction('publications', currentPublication, setCurrentPublication, defaultPublication, () => currentPublication.title.trim());
  
  const editPublication = createEditFunction('publications', setCurrentPublication);
  const deletePublication = createDeleteFunction('publications');

  const addSpeakingEngagement = createAddFunction('speakingEngagements', currentSpeakingEngagement, setCurrentSpeakingEngagement, defaultSpeakingEngagement, () => currentSpeakingEngagement.event.trim());
  
  const editSpeakingEngagement = createEditFunction('speakingEngagements', setCurrentSpeakingEngagement);
  const deleteSpeakingEngagement = createDeleteFunction('speakingEngagements');

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
            
            const title = clone.querySelector(`.${styles.title}`);
            if (title) title.style.fontSize = `${fontSizes.title}pt`;
            
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
            
            const regularTexts = clone.querySelectorAll(`.${styles.summaryText}, .${styles.certificationItem}, .${styles.boardItem}`);
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
            
            const achievements = clone.querySelectorAll(`.${styles.achievementItem}`);
            achievements.forEach(achievement => {
              achievement.style.fontSize = `${fontSizes.achievementText}pt`;
            });
            
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

      pdf.save(`${formData.fullName || 'executive_resume'}_resume.pdf`);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const ExecutiveTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasExpertise = formData.expertise.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasBoardPositions = formData.boardPositions.length > 0;
    const hasAchievements = formData.achievements.length > 0;
    const hasPublications = formData.publications.length > 0;
    const hasSpeakingEngagements = formData.speakingEngagements.length > 0;

    return (
      <div className={styles.executiveTemplate}>
        <header className={styles.resumeHeader}>
          <h1 className={styles.name} style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          {formData.title && <h2 className={styles.title} style={{ fontSize: `${fontSizes.title}pt` }}>{formData.title}</h2>}
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

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EXECUTIVE PROFILE</h2>
            <p className={styles.summaryText} style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EXECUTIVE EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className={styles.company} style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.location && `, ${exp.location}`}</p>
                  <p className={styles.date} style={{ fontSize: `${fontSizes.date}pt` }}>{exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className={styles.bulletList}>
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
                {exp.achievements && (
                  <>
                    <h4 className={styles.achievementTitle}>Key Achievements:</h4>
                    <ul className={styles.bulletList}>
                      {exp.achievements.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                    </ul>
                  </>
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
                  {edu.degree}{edu.program && `, ${edu.program}`}
                </h3>
                <p className={styles.institution} style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution}{edu.location && `, ${edu.location}`}
                </p>
                <p className={styles.date} style={{ fontSize: `${fontSizes.date}pt` }}>
                  {edu.startDate} – {edu.endDate || 'Present'}{edu.honors && ` • ${edu.honors}`}
                </p>
              </div>
            ))}
          </section>
        )}

        {hasExpertise && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CORE COMPETENCIES</h2>
            <div className={styles.expertiseGrid}>
              {Object.entries(
                formData.expertise.reduce((acc, expertise, i) => {
                  const category = expertise.category || 'General';
                  if (!acc[category]) acc[category] = [];
                  acc[category].push(expertise.name);
                  return acc;
                }, {})
              ).map(([categoryName, category]) => (
                <div key={categoryName} className={styles.expertiseCategory}>
                  <h3 className={styles.expertiseCategoryTitle}>{categoryName}</h3>
                  <ul className={styles.skillsList}>
                    {category.map((skill, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {hasAchievements && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SELECT ACHIEVEMENTS</h2>
            <ul className={styles.bulletList}>
              {formData.achievements.map((a, i) => (
                <li key={i} className={styles.achievementItem} style={{ fontSize: `${fontSizes.achievementText}pt` }}>
                  <strong>{a.title}:</strong> {a.description} {a.metrics && `(${a.metrics})`} {a.year && `• ${a.year}`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasBoardPositions && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>BOARD APPOINTMENTS & GOVERNANCE</h2>
            {formData.boardPositions.map((b, i) => (
              <div key={i} className={styles.boardItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{b.position}</strong> • {b.organization} • {b.startDate} – {b.endDate || 'Present'}
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL CERTIFICATIONS</h2>
            {formData.certifications.map((c, i) => (
              <div key={i} className={styles.certificationItem} style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong>{c.name}</strong>
                {c.issuingAuthority && ` • ${c.issuingAuthority}`}
                {c.year && ` • ${c.year}`}
              </div>
            ))}
          </section>
        )}

        {hasPublications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PUBLICATIONS & THOUGHT LEADERSHIP</h2>
            <ul className={styles.bulletList}>
              {formData.publications.map((p, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>
                  "{p.title}" • {p.publisher} • {p.year}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasSpeakingEngagements && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle} style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SPEAKING ENGAGEMENTS</h2>
            <ul className={styles.bulletList}>
              {formData.speakingEngagements.map((s, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>
                  {s.event} • {s.organization} • {s.year}
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
        <title>Free Executive Resume Builder 2026 | CEO/C-Suite Templates</title>
        <meta name="title" content="Free Executive Resume Builder 2026 | CEO/C-Suite Templates" />
        <meta name="description" content="Create a professional executive resume for free. CEO-optimized templates trusted by 25K+ business leaders. Download PDF in minutes. Updated for 2026." />
        <meta name="keywords" content="executive resume builder, CEO resume templates, C-suite resume builder, board resume, executive CV, free resume builder for business leaders, senior executive resume, managing director CV, board director resume, leadership resume" />
        <meta name="author" content="Professional Executive Resume Free" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="date" content={safeCurrentDate} />
        <meta name="last-modified" content={safeLastModifiedDate} />
        <meta name="revisit-after" content="1 days" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="canonical" href="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" hreflang="en" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" hreflang="en-US" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" hreflang="en-GB" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" hreflang="en-CA" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" hreflang="en-AU" />
        <link rel="alternate" href="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" hreflang="x-default" />
        <meta property="og:title" content="Free Executive Resume Builder 2026 | CEO/C-Suite Templates" />
        <meta property="og:description" content="Create a professional executive resume for free. CEO-optimized templates trusted by 25K+ business leaders. Download PDF in minutes. Updated for 2026." />
        <meta property="og:image" content="https://www.professionalresumefree.com/images/og-executive-resume-builder-preview.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Free Executive Resume Builder - Create Professional CEO Resumes Online" />
        <meta property="og:url" content="https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Executive Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="en_GB" />
        <meta property="og:locale:alternate" content="en_CA" />
        <meta property="og:locale:alternate" content="en_AU" />
        <meta property="og:updated_time" content={safeLastModifiedDate} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Free Executive Resume Builder 2026 | CEO/C-Suite Templates" />
        <meta name="twitter:description" content="Create a professional executive resume for free. CEO-optimized templates trusted by 25K+ business leaders. Download PDF in minutes. Updated for 2026." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/images/twitter-executive-resume-builder-preview.jpg" />
        <meta name="twitter:image:alt" content="Free Executive Resume Builder with Board-Level Templates" />
        <meta name="twitter:site" content="@ProResumeFree" />
        <meta name="twitter:creator" content="@ProResumeFree" />
        <meta name="theme-color" content="#1A1A2E" />
        <meta name="msapplication-TileColor" content="#1A1A2E" />
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
                  "@id": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder#webpage",
                  "url": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder",
                  "name": "Free Executive Resume Builder 2026 | CEO/C-Suite Templates",
                  "description": "Create professional executive resumes for free. Land board-level interviews with our CEO resume builder.",
                  "datePublished": "2026-01-01",
                  "dateModified": safeLastModifiedDate,
                  "inLanguage": "en-US",
                  "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://www.professionalresumefree.com/#website",
                    "url": "https://www.professionalresumefree.com",
                    "name": "Professional Executive Resume Free",
                    "description": "Free online resume builder for business leaders and executives",
                    "publisher": {
                      "@type": "Organization",
                      "@id": "https://www.professionalresumefree.com/#organization",
                      "name": "Professional Executive Resume Free",
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
                    "url": "https://www.professionalresumefree.com/images/og-executive-resume-builder-preview.jpg",
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
                        "name": "Executive Resume Builder",
                        "item": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder"
                      }
                    ]
                  },
                  "mainEntity": {
                    "@type": "SoftwareApplication",
                    "name": "Executive Resume Builder - CEO/C-Suite Resume Maker",
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
                      "ratingCount": 50365,
                      "bestRating": 5,
                      "worstRating": 1
                    },
                    "description": "Free online executive resume builder for CEOs, C-suite executives, board directors, and senior business leaders.",
                    "featureList": [
                      "Executive Board-Level Templates",
                      "Strategic Leadership Formatting",
                      "One-Click PDF Download",
                      "Achievement Quantification",
                      "Mobile-Friendly Editor",
                      "No Sign Up Required",
                      "Free Forever"
                    ],
                    "softwareVersion": "2026.1.0",
                    "screenshot": "https://www.professionalresumefree.com/images/screenshot-executive-resume-builder.jpg",
                    "applicationSuite": "Executive Career Tools",
                    "countriesSupported": "Global",
                    "fileSize": "Web Application"
                  }
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder#faqpage",
                  "mainEntity": faqs.map((faq, index) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer,
                      "datePublished": safeFaqDates[index] || safeCurrentDate,
                      "author": {
                        "@type": "Person",
                        "name": "Executive Resume Builder Support Team"
                      }
                    },
                    "mainEntityOfPage": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder#webpage"
                  }))
                },
                {
                  "@type": "HowTo",
                  "name": "How to Create a Professional Executive Resume with Our Free Builder",
                  "description": "Step-by-step guide to create an executive-level resume for free",
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
                      "name": "Choose an Executive Template",
                      "text": "Select from our executive-level resume templates designed for CEOs, CFOs, COOs, board directors, and senior leaders.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder#templates",
                      "image": "https://www.professionalresumefree.com/images/step1-executive-template.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 2,
                      "name": "Enter Your Executive Information",
                      "text": "Add your leadership experience, education, board positions, certifications, and strategic achievements using our guided forms.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder#editor",
                      "image": "https://www.professionalresumefree.com/images/step2-executive-info.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 3,
                      "name": "Customize and Optimize",
                      "text": "Use our executive-specific suggestions to improve leadership keywords and strategic formatting for board-level review.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder#optimize",
                      "image": "https://www.professionalresumefree.com/images/step3-optimize.jpg"
                    },
                    {
                      "@type": "HowToStep",
                      "position": 4,
                      "name": "Download Your Executive Resume",
                      "text": "Export your professional executive resume as PDF, Word, or plain text - completely free, no watermarks.",
                      "url": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder#download",
                      "image": "https://www.professionalresumefree.com/images/step4-download.jpg"
                    }
                  ]
                },
                {
                  "@type": "Service",
                  "serviceType": "Online Executive Resume Building Service",
                  "provider": {
                    "@type": "Organization",
                    "name": "Professional Executive Resume Free",
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
                    "name": "Free Executive Resume Building Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Executive Board Resume Templates"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "C-Suite Resume Editing"
                        }
                      }
                    ]
                  },
                  "description": "Free executive resume builder for business leaders and senior executives worldwide",
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
                        "name": "Professional Executive Resume Free"
                      },
                      "itemReviewed": {
                        "@type": "SoftwareApplication",
                        "name": "Executive Resume Builder - CEO/C-Suite Resume Maker",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Any",
                        "offers": {
                          "@type": "Offer",
                          "price": "0",
                          "priceCurrency": "USD"
                        },
                        "description": "Free online executive resume builder that helps business leaders create professional resumes and land board-level interviews faster.",
                        "url": "https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder"
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
            <Link href="/ats-friendly-ceo-resume-builder" className={styles.breadcrumbLink} prefetch={false}>
              <span className={styles.breadcrumbText}>Free C-Suite Template</span>
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
                Rated 4.9/5 by 50,365+ Executives | Best Free Executive Resume Builder 2026
              </span>
            </div>
            
            <h1 className={styles.heroTitle}>
              Free Executive Resume Builder 2026
            </h1>
            
            <p className={styles.heroSubtitle}>
              Create a <strong className={styles.heroHighlight}>professional, board-level executive resume for free in minutes.</strong> Our CEO resume builder ensures your leadership experience and strategic achievements get noticed by boards and search committees.
            </p>

            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.primaryButton}
                aria-label="Start building your free executive resume now—no sign-up required"
              >
                <span className={styles.buttonText}>Start Building Your Executive Resume Now</span>
                <FiArrowRight className={styles.buttonIcon} />
                <div className={styles.buttonPulse}></div>
              </button>
              
              <button
                onClick={generatePDF}
                className={styles.secondaryButton}
                aria-label="Download executive resume as PDF"
                disabled={isGeneratingPDF || !hasContent()}
              >
                <FiDownload className={styles.buttonIcon} />
                <span className={styles.buttonText}>Download Executive Resume PDF</span>
              </button>
            </div>

            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>25K+</span>
                <span className={styles.statLabel}>Executive Resumes Created</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>88%</span>
                <span className={styles.statLabel}>Board Interview Success Rate</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>$500K+</span>
                <span className={styles.statLabel}>Average Compensation Increase</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4.9/5</span>
                <span className={styles.statLabel}>Rating from C-Suite Leaders</span>
              </div>
            </div>

            <div className={styles.executiveBadges}>
              <div className={styles.badgeGrid}>
                <span className={styles.badgeItem}><FiBriefcase /> CEO Resume Templates</span>
                <span className={styles.badgeItem}><FiDollarSign /> CFO Resume Templates</span>
                <span className={styles.badgeItem}><FiTrendingUp /> COO Resume Templates</span>
                <span className={styles.badgeItem}><FiUsers /> Board Director CVs</span>
                <span className={styles.badgeItem}><FiGlobe /> Managing Director</span>
                <span className={styles.badgeItem}><FiTarget /> Senior Vice President</span>
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
                  <ExecutiveTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection}>
          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Executive Profile', icon: <FiUser /> },
              { id: 'experience', label: 'Executive Experience', icon: <FiBriefcase /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'expertise', label: 'Core Competencies', icon: <FiTarget /> },
              { id: 'achievements', label: 'Key Achievements', icon: <FiAward /> },
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
                <h3 className={styles.sectionTitle}><FiUser /> Executive Profile</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John A. Smith" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Current/Desired Title*
                      <input type="text" name="title" value={formData.title} onChange={handleInputChange} placeholder="Chief Executive Officer" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@executive.com" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Location
                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="New York, NY | Open to Relocation" className={styles.formInput} />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <label className={styles.formLabel}>
                    Executive Summary*
                    <textarea
                      name="summary"
                      value={formData.summary}
                      onChange={handleInputChange}
                      placeholder="Results-driven Chief Executive Officer with 20+ years of P&L leadership experience in Fortune 500 technology companies. Proven track record of delivering shareholder value through strategic transformation, digital innovation, and operational excellence. Led 3 successful turnarounds with cumulative $2.5B in value creation. Expert in global market expansion, M&A integration, and building high-performance executive teams. Board experience includes public company directorships and private equity portfolio oversight."
                      required
                      className={styles.formTextarea}
                      rows="6"
                    />
                    <div className={styles.characterCount}>
                      {formData.summary.length}/800 characters
                    </div>
                  </label>
                </div>

                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Professional Links</h4>
                  <p className={styles.sectionDescription}>Add your executive profiles (LinkedIn, board bio, portfolio, etc.)</p>
                  <div className={styles.socialInput}>
                    <select 
                      value={currentSocialLink.platform} 
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn Profile</option>
                      <option value="BoardBio">Board Bio/Profile</option>
                      <option value="Portfolio">Executive Portfolio</option>
                      <option value="Website">Personal Website</option>
                      <option value="Forbes">Forbes Profile</option>
                      <option value="Twitter">Executive Twitter</option>
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

            {/* Executive Experience Section */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Executive Experience</h3>
                <p className={styles.sectionDescription}>List your executive positions in reverse chronological order. Focus on strategic leadership and P&L impact.</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position Title*
                      <input 
                        value={currentExperience.position} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                        placeholder="Chief Executive Officer" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company/Organization*
                      <input 
                        value={currentExperience.employer} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                        placeholder="Global Technology Corporation" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Location
                      <input 
                        value={currentExperience.location} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })} 
                        placeholder="New York, NY" 
                        className={styles.formInput} 
                      />
                    </label>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Start Date
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentExperience.startDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
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
                  </div>
                  <label className={styles.formLabel}>
                    Key Responsibilities & Scope*
                    <textarea 
                      value={currentExperience.description} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                      placeholder="• Led global organization of 5,000+ employees with $2B annual revenue
• Full P&L responsibility for North American and EMEA operations
• Reported directly to Board of Directors and shareholders
• Directed corporate strategy, M&A, and capital allocation
• Built and led executive team of 12 direct reports"
                      required 
                      className={styles.formTextarea} 
                      rows="6" 
                    />
                    <div className={styles.characterCount}>
                      {currentExperience.description.length}/1500 characters
                    </div>
                  </label>
                  <label className={styles.formLabel}>
                    Key Strategic Achievements
                    <textarea 
                      value={currentExperience.achievements} 
                      onChange={(e) => setCurrentExperience({ ...currentExperience, achievements: e.target.value })} 
                      placeholder="• Led digital transformation increasing EBITDA by 35% over 3 years
• Executed strategic acquisition integrating $500M revenue business
• Expanded into Asian markets achieving 25% market share in 2 years
• Implemented ESG initiatives improving corporate sustainability rating by 40%
• Developed succession plan promoting 5 internal executives to C-suite roles"
                      className={styles.formTextarea} 
                      rows="6" 
                    />
                    <div className={styles.characterCount}>
                      {currentExperience.achievements?.length || 0}/2000 characters
                    </div>
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addExperience} 
                      className={styles.addButton} 
                      disabled={!currentExperience.position || !currentExperience.employer}
                    >
                      <FiPlus /> {currentExperience.isEditing ? 'Update Executive Experience' : 'Add Executive Experience'}
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
                  <h4 className={styles.subSectionTitle}>Your Executive Experience</h4>
                  {formData.experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No executive experience added yet</p>
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
                              <span>{exp.location}</span>
                              <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                            </div>
                            <div className={styles.itemDescription}>
                              <h4>Responsibilities:</h4>
                              {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                <p key={j} className={styles.bulletPoint}>• {line}</p>
                              ))}
                              {exp.achievements && (
                                <>
                                  <h4>Achievements:</h4>
                                  {exp.achievements.split('\n').filter(l => l.trim()).map((line, j) => (
                                    <p key={j} className={styles.bulletPoint}>• {line}</p>
                                  ))}
                                </>
                              )}
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

                {/* Board Positions */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiUsers /> Board Appointments & Governance</h4>
                  <p className={styles.sectionDescription}>List your board directorships, advisory roles, and governance experience</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Organization*
                        <input 
                          value={currentBoardPosition.organization} 
                          onChange={(e) => setCurrentBoardPosition({ ...currentBoardPosition, organization: e.target.value })} 
                          placeholder="XYZ Corporation (NYSE: XYZ)" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Position/Role*
                        <input 
                          value={currentBoardPosition.position} 
                          onChange={(e) => setCurrentBoardPosition({ ...currentBoardPosition, position: e.target.value })} 
                          placeholder="Independent Director, Audit Committee Chair" 
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
                          value={currentBoardPosition.startDate} 
                          onChange={(e) => setCurrentBoardPosition({ ...currentBoardPosition, startDate: e.target.value })} 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        End Date
                        <input 
                          type="text" 
                          placeholder="Month Year or Present" 
                          value={currentBoardPosition.endDate} 
                          onChange={(e) => setCurrentBoardPosition({ ...currentBoardPosition, endDate: e.target.value })} 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addBoardPosition} 
                        className={styles.addButton} 
                        disabled={!currentBoardPosition.organization.trim() || !currentBoardPosition.position.trim()}
                      >
                        <FiPlus /> {currentBoardPosition.isEditing ? 'Update Board Position' : 'Add Board Position'}
                      </button>
                      {currentBoardPosition.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentBoardPosition(defaultBoardPosition())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className={styles.itemsList}>
                    {formData.boardPositions.map((b, i) => (
                      <div key={i} className={styles.listItem}>
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <strong className={styles.itemTitle}>{b.position}</strong>
                          </div>
                          <div className={styles.itemMeta}>
                            <span>{b.organization}</span>
                            <span>{b.startDate} – {b.endDate || 'Present'}</span>
                          </div>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editBoardPosition(i)} className={styles.editButton} aria-label={`Edit ${b.position}`}><FiEdit2 /></button>
                          <button onClick={() => deleteBoardPosition(i)} className={styles.deleteButton} aria-label={`Delete ${b.position}`}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.boardPositions.length === 0 && <p className={styles.emptyMessage}>No board positions added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> Education</h3>
                <p className={styles.sectionDescription}>List your advanced degrees, executive education, and relevant training</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input 
                        value={currentEducation.institution} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                        placeholder="Harvard Business School" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree/Certification*
                      <input 
                        value={currentEducation.degree} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                        placeholder="Master of Business Administration (MBA)" 
                        required 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Program / Concentration / Focus
                      <input 
                        value={currentEducation.program} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} 
                        placeholder="Strategic Management, Finance" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Location
                      <input 
                        value={currentEducation.location} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, location: e.target.value })} 
                        placeholder="Boston, MA" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date
                      <input 
                        type="text" 
                        placeholder="Year" 
                        value={currentEducation.startDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      End Date / Expected
                      <input 
                        type="text" 
                        placeholder="Year" 
                        value={currentEducation.endDate} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Honors / Distinctions
                    <input 
                      value={currentEducation.honors} 
                      onChange={(e) => setCurrentEducation({ ...currentEducation, honors: e.target.value })} 
                      placeholder="Baker Scholar, Summa Cum Laude" 
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
                              {edu.program && <span className={styles.itemSubtitle}> – {edu.program}</span>}
                            </div>
                            <div className={styles.itemMeta}>
                              <span>{edu.institution}{edu.location && `, ${edu.location}`}</span>
                              <span>{edu.startDate} – {edu.endDate || 'Present'}{edu.honors && ` • ${edu.honors}`}</span>
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

                {/* Certifications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiAward /> Professional Certifications</h4>
                  <p className={styles.sectionDescription}>Add your executive certifications, professional designations, and board certifications</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Certified Board Director (CBD)" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Issuing Authority
                        <input 
                          value={currentCertification.issuingAuthority} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingAuthority: e.target.value })} 
                          placeholder="National Association of Corporate Directors" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Year Obtained
                      <input 
                        value={currentCertification.year} 
                        onChange={(e) => setCurrentCertification({ ...currentCertification, year: e.target.value })} 
                        placeholder="2020" 
                        className={styles.formInput} 
                      />
                    </label>
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
                          {c.issuingAuthority && ` • ${c.issuingAuthority}`}
                          {c.year && ` • ${c.year}`}
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

            {/* Core Competencies Section */}
            {activeSection === 'expertise' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiTarget /> Core Competencies</h3>
                
                {/* Areas of Expertise */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Areas of Executive Expertise</h4>
                  <p className={styles.sectionDescription}>List your core competencies by category (Strategic Leadership, Financial Management, etc.)</p>
                  <div className={styles.expertiseInput}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Expertise/Skill Name*
                        <input 
                          value={currentExpertise.name} 
                          onChange={(e) => setCurrentExpertise({ ...currentExpertise, name: e.target.value })} 
                          placeholder="Corporate Governance" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Category
                        <select 
                          value={currentExpertise.category} 
                          onChange={(e) => setCurrentExpertise({ ...currentExpertise, category: e.target.value })} 
                          className={styles.formSelect}
                        >
                          <option value="">Select Category</option>
                          <option value="Strategic Leadership">Strategic Leadership</option>
                          <option value="Financial Management">Financial Management</option>
                          <option value="Operational Excellence">Operational Excellence</option>
                          <option value="Digital Transformation">Digital Transformation</option>
                          <option value="M&A & Integration">M&A & Integration</option>
                          <option value="Global Expansion">Global Expansion</option>
                          <option value="Risk Management">Risk Management</option>
                          <option value="ESG & Sustainability">ESG & Sustainability</option>
                          <option value="Talent Development">Talent Development</option>
                        </select>
                      </label>
                    </div>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addExpertise} 
                        className={styles.addButton} 
                        disabled={!currentExpertise.name.trim()}
                      >
                        <FiPlus /> {currentExpertise.isEditing ? 'Update Expertise' : 'Add Expertise'}
                      </button>
                      {currentExpertise.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentExpertise(defaultExpertise())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {Object.entries(
                      formData.expertise.reduce((acc, expertise, i) => {
                        const category = expertise.category || 'General';
                        if (!acc[category]) acc[category] = [];
                        acc[category].push({...expertise, index: i});
                        return acc;
                      }, {})
                    ).map(([categoryName, category]) => (
                      <div key={categoryName} className={styles.expertiseCategory}>
                        <h4 className={styles.expertiseCategoryTitle}>{categoryName}</h4>
                        <div className={styles.expertiseItems}>
                          {category.map((exp, i) => (
                            <div key={i} className={styles.listItem}>
                              <span>{exp.name}</span>
                              <div className={styles.itemActions}>
                                <button onClick={() => editExpertise(exp.index)} className={styles.editButton}><FiEdit2 /></button>
                                <button onClick={() => deleteExpertise(exp.index)} className={styles.deleteButton}><FiTrash2 /></button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    {formData.expertise.length === 0 && <p className={styles.emptyMessage}>No expertise added yet</p>}
                  </div>
                </div>

                {/* Publications */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiBook /> Publications & Thought Leadership</h4>
                  <p className={styles.sectionDescription}>Add your published articles, books, white papers, and thought leadership</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Publication Title*
                        <input 
                          value={currentPublication.title} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, title: e.target.value })} 
                          placeholder="The Future of Digital Transformation in Global Enterprises" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Publisher/Journal
                        <input 
                          value={currentPublication.publisher} 
                          onChange={(e) => setCurrentPublication({ ...currentPublication, publisher: e.target.value })} 
                          placeholder="Harvard Business Review" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Year
                      <input 
                        value={currentPublication.year} 
                        onChange={(e) => setCurrentPublication({ ...currentPublication, year: e.target.value })} 
                        placeholder="2023" 
                        className={styles.formInput} 
                      />
                    </label>
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
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <strong className={styles.itemTitle}>"{p.title}"</strong>
                          </div>
                          <div className={styles.itemMeta}>
                            <span>{p.publisher}</span>
                            <span>{p.year}</span>
                          </div>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editPublication(i)} className={styles.editButton} aria-label={`Edit "${p.title}"`}><FiEdit2 /></button>
                          <button onClick={() => deletePublication(i)} className={styles.deleteButton} aria-label={`Delete "${p.title}"`}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.publications.length === 0 && <p className={styles.emptyMessage}>No publications added yet</p>}
                  </div>
                </div>

                {/* Speaking Engagements */}
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiActivity /> Speaking Engagements</h4>
                  <p className={styles.sectionDescription}>Add your conference speaking engagements, keynotes, and panel participations</p>
                  
                  <div className={styles.formCard}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        Event/Conference Name*
                        <input 
                          value={currentSpeakingEngagement.event} 
                          onChange={(e) => setCurrentSpeakingEngagement({ ...currentSpeakingEngagement, event: e.target.value })} 
                          placeholder="World Economic Forum Annual Meeting" 
                          className={styles.formInput} 
                        />
                      </label>
                      <label className={styles.formLabel}>
                        Host Organization
                        <input 
                          value={currentSpeakingEngagement.organization} 
                          onChange={(e) => setCurrentSpeakingEngagement({ ...currentSpeakingEngagement, organization: e.target.value })} 
                          placeholder="World Economic Forum" 
                          className={styles.formInput} 
                        />
                      </label>
                    </div>
                    <label className={styles.formLabel}>
                      Year
                      <input 
                        value={currentSpeakingEngagement.year} 
                        onChange={(e) => setCurrentSpeakingEngagement({ ...currentSpeakingEngagement, year: e.target.value })} 
                        placeholder="2024" 
                        className={styles.formInput} 
                      />
                    </label>
                    <div className={styles.formActions}>
                      <button 
                        type="button" 
                        onClick={addSpeakingEngagement} 
                        className={styles.addButton} 
                        disabled={!currentSpeakingEngagement.event.trim()}
                      >
                        <FiPlus /> {currentSpeakingEngagement.isEditing ? 'Update Speaking Engagement' : 'Add Speaking Engagement'}
                      </button>
                      {currentSpeakingEngagement.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSpeakingEngagement(defaultSpeakingEngagement())} 
                          className={styles.cancelButton}
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className={styles.itemsList}>
                    {formData.speakingEngagements.map((s, i) => (
                      <div key={i} className={styles.listItem}>
                        <div className={styles.itemContent}>
                          <div className={styles.itemHeader}>
                            <strong className={styles.itemTitle}>{s.event}</strong>
                          </div>
                          <div className={styles.itemMeta}>
                            <span>{s.organization}</span>
                            <span>{s.year}</span>
                          </div>
                        </div>
                        <div className={styles.itemActions}>
                          <button onClick={() => editSpeakingEngagement(i)} className={styles.editButton} aria-label={`Edit ${s.event}`}><FiEdit2 /></button>
                          <button onClick={() => deleteSpeakingEngagement(i)} className={styles.deleteButton} aria-label={`Delete ${s.event}`}><FiTrash2 /></button>
                        </div>
                      </div>
                    ))}
                    {formData.speakingEngagements.length === 0 && <p className={styles.emptyMessage}>No speaking engagements added yet</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Key Achievements Section */}
            {activeSection === 'achievements' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiAward /> Key Achievements</h3>
                <p className={styles.sectionDescription}>Highlight your most significant executive achievements with quantifiable metrics</p>
                
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Achievement Title*
                      <input 
                        value={currentAchievement.title} 
                        onChange={(e) => setCurrentAchievement({ ...currentAchievement, title: e.target.value })} 
                        placeholder="Led Digital Transformation Initiative" 
                        className={styles.formInput} 
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Year
                      <input 
                        value={currentAchievement.year} 
                        onChange={(e) => setCurrentAchievement({ ...currentAchievement, year: e.target.value })} 
                        placeholder="2020-2023" 
                        className={styles.formInput} 
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Achievement Description*
                    <textarea 
                      value={currentAchievement.description} 
                      onChange={(e) => setCurrentAchievement({ ...currentAchievement, description: e.target.value })} 
                      placeholder="Spearheaded enterprise-wide digital transformation across global operations" 
                      className={styles.formTextarea} 
                      rows="3" 
                    />
                  </label>
                  <label className={styles.formLabel}>
                    Quantifiable Metrics/Results
                    <input 
                      value={currentAchievement.metrics} 
                      onChange={(e) => setCurrentAchievement({ ...currentAchievement, metrics: e.target.value })} 
                      placeholder="35% EBITDA increase, $500M cost savings, 40% faster time-to-market" 
                      className={styles.formInput} 
                    />
                  </label>
                  <div className={styles.formActions}>
                    <button 
                      type="button" 
                      onClick={addAchievement} 
                      className={styles.addButton} 
                      disabled={!currentAchievement.title.trim() || !currentAchievement.description.trim()}
                    >
                      <FiPlus /> {currentAchievement.isEditing ? 'Update Achievement' : 'Add Achievement'}
                    </button>
                    {currentAchievement.isEditing && (
                      <button 
                        type="button" 
                        onClick={() => setCurrentAchievement(defaultAchievement())} 
                        className={styles.cancelButton}
                      >
                        <FiX /> Cancel
                      </button>
                    )}
                  </div>
                </div>
                
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Key Achievements</h4>
                  {formData.achievements.length === 0 ? (
                    <p className={styles.emptyMessage}>No achievements added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {formData.achievements.map((a, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemContent}>
                            <div className={styles.itemHeader}>
                              <strong className={styles.itemTitle}>{a.title}</strong>
                              {a.year && <span className={styles.itemSubtitle}> • {a.year}</span>}
                            </div>
                            <div className={styles.itemDescription}>
                              {a.description}
                              {a.metrics && <div className={styles.itemMetrics}><strong>Results:</strong> {a.metrics}</div>}
                            </div>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editAchievement(i)} className={styles.editButton} aria-label={`Edit ${a.title}`}><FiEdit2 /></button>
                            <button onClick={() => deleteAchievement(i)} className={styles.deleteButton} aria-label={`Delete ${a.title}`}><FiTrash2 /></button>
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
                <p className={styles.sectionDescription}>Customize font sizes for your executive resume PDF. All sizes are in points (pt).</p>
                
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
                        <span>Title</span>
                        <span className={styles.fontSizeValue}>{fontSizes.title}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="18" 
                        value={fontSizes.title}
                        onChange={(e) => handleFontSizeChange('title', e.target.value)}
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
                        max="16" 
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
                        min="6" 
                        max="14" 
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
                        max="14" 
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
                        min="4" 
                        max="12" 
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
                        <span>Achievement Text</span>
                        <span className={styles.fontSizeValue}>{fontSizes.achievementText}pt</span>
                      </label>
                      <input 
                        type="range" 
                        min="6" 
                        max="14" 
                        value={fontSizes.achievementText}
                        onChange={(e) => handleFontSizeChange('achievementText', e.target.value)}
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
              Everything you need to know about creating professional executive resumes with our tool.
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
            <h2 className={styles.ctaTitle} id="cta-title">Ready to Advance Your Executive Career?</h2>
            <p className={styles.ctaSubtitle}>
              Join 25,000+ business leaders who landed board-level positions with our free executive resume builder.
            </p>
            <div className={styles.ctaButtons}>
              <button
                onClick={() => setActiveSection('personal')}
                className={styles.ctaButton}
                aria-label="Create your free executive resume now—no sign-up required"
              >
                <span className={styles.ctaButtonText}>Create Your Free Executive Resume Now</span>
                <FiArrowRight className={styles.ctaButtonIcon} />
              </button>
            </div>
            <div className={styles.ctaGuarantee}>
              <FiCheck className={styles.guaranteeIcon} />
              <span className={styles.guaranteeText}>No credit card required • Free forever • Download in minutes • Board-Level Formatting</span>
            </div>
          </div>
        </div>
      </section>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Executive Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              <div className={styles.fullPreviewPage}>
                <ExecutiveTemplate formData={formData} />
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
    { name: 'Executive Resume Builder', item: 'https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder' }
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

export default CeoResume;