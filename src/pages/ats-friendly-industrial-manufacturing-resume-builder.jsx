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
  FiAward,
  FiGlobe,
  FiFileText,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiTool,
  FiHardHat,
  FiSettings
} from 'react-icons/fi';
import styles from './Industrialresume.module.css';

const Industrialresume = () => {
  // Default item factories (Industrial-focused)
  const defaultExperience = () => ({
    company: '',
    position: '',
    department: '',
    startDate: '',
    endDate: '',
    description: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultEducation = () => ({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultCertification = () => ({
    name: '',
    issuingBody: '',
    date: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultSkill = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultMachinery = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultSafetyCert = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultLanguage = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultSocialLink = () => ({
    platform: '',
    url: '',
    isEditing: false,
    editIndex: null
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    certifications: [],
    skills: [],
    machinery: [],
    safetyCerts: [],
    languages: [],
    socialLinks: []
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentMachinery, setCurrentMachinery] = useState(defaultMachinery());
  const [currentSafetyCert, setCurrentSafetyCert] = useState(defaultSafetyCert());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [selectedTemplate] = useState('industrial');
  const [activeSection, setActiveSection] = useState('personal');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const resumeRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
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

  const pageHasContent = (pageNumber) => {
    if (pageNumber === 1) {
      return !!(formData.fullName || formData.email || formData.summary || formData.socialLinks.length > 0);
    }
    const pageData = getDataByPage(pageNumber);
    return (
      pageData.experience.length > 0 ||
      pageData.education.length > 0 ||
      pageData.certifications.length > 0 ||
      pageData.skills.length > 0 ||
      pageData.machinery.length > 0 ||
      pageData.safetyCerts.length > 0 ||
      pageData.languages.length > 0
    );
  };

  const getPagesWithContent = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (pageHasContent(i)) pages.push(i);
    }
    return pages;
  };

  const addNewPage = () => {
    if (totalPages < 5) {
      setTotalPages(totalPages + 1);
      setCurrentPage(totalPages + 1);
    }
  };

  const removeLastPage = () => {
    if (totalPages > 1) {
      const lastPage = totalPages;
      const shift = (items) => items.map(i => i.page === lastPage ? { ...i, page: lastPage - 1 } : i);
      setFormData({
        ...formData,
        experience: shift(formData.experience),
        education: shift(formData.education),
        certifications: shift(formData.certifications),
        skills: shift(formData.skills),
        machinery: shift(formData.machinery),
        safetyCerts: shift(formData.safetyCerts),
        languages: shift(formData.languages)
      });
      setTotalPages(totalPages - 1);
      if (currentPage > totalPages - 1) setCurrentPage(totalPages - 1);
    }
  };

  // --- Experience ---
  const addExperience = () => {
    if (currentExperience.position && currentExperience.company && currentExperience.startDate) {
      const item = { ...currentExperience, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.experience];
        updated[item.editIndex] = { ...item, isEditing: false, editIndex: null };
        setFormData({ ...formData, experience: updated });
      } else {
        setFormData({
          ...formData,
          experience: [...formData.experience, { ...item, isEditing: false, editIndex: null }]
        });
      }
      setCurrentExperience(defaultExperience());
    }
  };

  const editExperience = (index) => {
    const exp = formData.experience[index];
    setCurrentExperience({ ...exp, isEditing: true, editIndex: index });
    setCurrentPage(exp.page);
  };

  const deleteExperience = (index) => {
    const updated = [...formData.experience];
    updated.splice(index, 1);
    setFormData({ ...formData, experience: updated });
  };

  // --- Education ---
  const addEducation = () => {
    if (currentEducation.institution && currentEducation.degree) {
      const item = { ...currentEducation, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.education];
        updated[item.editIndex] = { ...item, isEditing: false, editIndex: null };
        setFormData({ ...formData, education: updated });
      } else {
        setFormData({
          ...formData,
          education: [...formData.education, { ...item, isEditing: false, editIndex: null }]
        });
      }
      setCurrentEducation(defaultEducation());
    }
  };

  const editEducation = (index) => {
    const edu = formData.education[index];
    setCurrentEducation({ ...edu, isEditing: true, editIndex: index });
    setCurrentPage(edu.page);
  };

  const deleteEducation = (index) => {
    const updated = [...formData.education];
    updated.splice(index, 1);
    setFormData({ ...formData, education: updated });
  };

  // --- Certifications ---
  const addCertification = () => {
    if (currentCertification.name.trim()) {
      const item = { ...currentCertification, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.certifications];
        updated[item.editIndex] = { ...item };
        setFormData({ ...formData, certifications: updated });
      } else {
        setFormData({
          ...formData,
          certifications: [...formData.certifications, { ...item }]
        });
      }
      setCurrentCertification(defaultCertification());
    }
  };

  const editCertification = (index) => {
    const cert = formData.certifications[index];
    setCurrentCertification({ ...cert, isEditing: true, editIndex: index });
    setCurrentPage(cert.page);
  };

  const deleteCertification = (index) => {
    const updated = [...formData.certifications];
    updated.splice(index, 1);
    setFormData({ ...formData, certifications: updated });
  };

  // --- Skills ---
  const addSkill = () => {
    if (currentSkill.name.trim()) {
      const item = { ...currentSkill, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.skills];
        updated[item.editIndex] = { name: item.name.trim(), page: item.page };
        setFormData({ ...formData, skills: updated });
      } else {
        setFormData({
          ...formData,
          skills: [...formData.skills, { name: item.name.trim(), page: item.page }]
        });
      }
      setCurrentSkill(defaultSkill());
    }
  };

  const editSkill = (index) => {
    const skill = formData.skills[index];
    setCurrentSkill({ ...skill, isEditing: true, editIndex: index });
    setCurrentPage(skill.page);
  };

  const deleteSkill = (index) => {
    const updated = [...formData.skills];
    updated.splice(index, 1);
    setFormData({ ...formData, skills: updated });
  };

  // --- Machinery ---
  const addMachinery = () => {
    if (currentMachinery.name.trim()) {
      const item = { ...currentMachinery, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.machinery];
        updated[item.editIndex] = { name: item.name.trim(), page: item.page };
        setFormData({ ...formData, machinery: updated });
      } else {
        setFormData({
          ...formData,
          machinery: [...formData.machinery, { name: item.name.trim(), page: item.page }]
        });
      }
      setCurrentMachinery(defaultMachinery());
    }
  };

  const editMachinery = (index) => {
    const m = formData.machinery[index];
    setCurrentMachinery({ ...m, isEditing: true, editIndex: index });
    setCurrentPage(m.page);
  };

  const deleteMachinery = (index) => {
    const updated = [...formData.machinery];
    updated.splice(index, 1);
    setFormData({ ...formData, machinery: updated });
  };

  // --- Safety Certs ---
  const addSafetyCert = () => {
    if (currentSafetyCert.name.trim()) {
      const item = { ...currentSafetyCert, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.safetyCerts];
        updated[item.editIndex] = { name: item.name.trim(), page: item.page };
        setFormData({ ...formData, safetyCerts: updated });
      } else {
        setFormData({
          ...formData,
          safetyCerts: [...formData.safetyCerts, { name: item.name.trim(), page: item.page }]
        });
      }
      setCurrentSafetyCert(defaultSafetyCert());
    }
  };

  const editSafetyCert = (index) => {
    const s = formData.safetyCerts[index];
    setCurrentSafetyCert({ ...s, isEditing: true, editIndex: index });
    setCurrentPage(s.page);
  };

  const deleteSafetyCert = (index) => {
    const updated = [...formData.safetyCerts];
    updated.splice(index, 1);
    setFormData({ ...formData, safetyCerts: updated });
  };

  // --- Languages ---
  const addLanguage = () => {
    if (currentLanguage.name.trim()) {
      const item = { ...currentLanguage, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.languages];
        updated[item.editIndex] = { name: item.name.trim(), page: item.page };
        setFormData({ ...formData, languages: updated });
      } else {
        setFormData({
          ...formData,
          languages: [...formData.languages, { name: item.name.trim(), page: item.page }]
        });
      }
      setCurrentLanguage(defaultLanguage());
    }
  };

  const editLanguage = (index) => {
    const lang = formData.languages[index];
    setCurrentLanguage({ ...lang, isEditing: true, editIndex: index });
    setCurrentPage(lang.page);
  };

  const deleteLanguage = (index) => {
    const updated = [...formData.languages];
    updated.splice(index, 1);
    setFormData({ ...formData, languages: updated });
  };

  // --- Social Links ---
  const addSocialLink = () => {
    if (currentSocialLink.platform && currentSocialLink.url) {
      let url = currentSocialLink.url;
      if (!url.match(/^https?:\/\//)) url = `https://${url}`;
      if (currentSocialLink.isEditing) {
        const updated = [...formData.socialLinks];
        updated[currentSocialLink.editIndex] = { platform: currentSocialLink.platform, url };
        setFormData({ ...formData, socialLinks: updated });
      } else {
        setFormData({
          ...formData,
          socialLinks: [...formData.socialLinks, { platform: currentSocialLink.platform, url }]
        });
      }
      setCurrentSocialLink(defaultSocialLink());
    }
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

  const getDataByPage = (page) => ({
    experience: formData.experience.filter(e => e.page === page),
    education: formData.education.filter(e => e.page === page),
    certifications: formData.certifications.filter(c => c.page === page),
    skills: formData.skills.filter(s => s.page === page),
    machinery: formData.machinery.filter(m => m.page === page),
    safetyCerts: formData.safetyCerts.filter(s => s.page === page),
    languages: formData.languages.filter(l => l.page === page)
  });

  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pages = getPagesWithContent();
      if (pages.length === 0) {
        alert('Add content before generating PDF.');
        return;
      }

      const originalStates = [];
      for (let i = 0; i < pages.length; i++) {
        const pageNum = pages[i];
        const el = resumeRefs[pageNum - 1]?.current;
        if (!el) continue;

        originalStates[pageNum - 1] = {
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
              clone.querySelectorAll('*').forEach(n => {
                n.style.color = '#000000';
                n.style.fontFamily = "'Helvetica', 'Arial', sans-serif";
              });
            }
          }
        });

        const imgData = canvas.toDataURL('image/png', 1.0);
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        if (i > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      }

      for (let i = 0; i < totalPages; i++) {
        const el = resumeRefs[i]?.current;
        const state = originalStates[i];
        if (el && state) Object.assign(el.style, state);
      }

      pdf.save(`${formData.fullName || 'industrial_resume'}_resume.pdf`);
    } catch (err) {
      console.error('PDF Error:', err);
      alert('Failed to generate PDF.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // ✅ INDUSTRIAL RESUME TEMPLATE
  const IndustrialTemplate = ({ formData, pageData, pageNumber, totalPages }) => {
    const hasSummary = pageNumber === 1 && formData.summary;
    const hasExperience = pageData.experience.length > 0;
    const hasEducation = pageData.education.length > 0;
    const hasCertifications = pageData.certifications.length > 0;
    const hasSkills = pageData.skills.length > 0;
    const hasMachinery = pageData.machinery.length > 0;
    const hasSafetyCerts = pageData.safetyCerts.length > 0;
    const hasLanguages = pageData.languages.length > 0;

    return (
      <div className={styles.industrialTemplate}>
        {pageNumber === 1 && (
          <header className={styles.resumeHeader}>
            <h1 className={styles.name}>{formData.fullName || 'Your Name'}</h1>
            <div className={styles.contactInfoRow}>
              {formData.email && <div className={styles.contactInfoItem}><FiMail /> {formData.email}</div>}
              {(formData.email && (formData.phone || formData.address)) && <div className={styles.contactSeparator}>•</div>}
              {formData.phone && <div className={styles.contactInfoItem}><FiPhone /> {formData.phone}</div>}
              {(formData.phone && formData.address) && <div className={styles.contactSeparator}>•</div>}
              {formData.address && <div className={styles.contactInfoItem}><FiMapPin /> {formData.address}</div>}
              {formData.socialLinks.map((link, i) => (
                <div key={i} className={styles.contactInfoItem}>
                  {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
                </div>
              ))}
            </div>
          </header>
        )}

        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
            <div className={styles.sectionContent}>
              <p className={styles.summaryText}>{formData.summary}</p>
            </div>
          </section>
        )}

        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>WORK EXPERIENCE</h2>
            <div className={styles.sectionContent}>
              {pageData.experience.map((exp, i) => (
                <div key={i} className={styles.experienceItem}>
                  <div className={styles.experienceHeader}>
                    <h3>{exp.position}</h3>
                    <p className={styles.company}>{exp.company}{exp.department && ` – ${exp.department}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                  </div>
                  <ul className={styles.bulletList}>
                    {exp.description.split('\n').map((line, j) => line.trim() ? <li key={j}>{line}</li> : null)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EDUCATION</h2>
            <div className={styles.sectionContent}>
              {pageData.education.map((edu, i) => (
                <div key={i} className={styles.educationItem}>
                  <h3>{edu.degree}{edu.field && ` in ${edu.field}`}</h3>
                  <p className={styles.institution}>{edu.institution} | {edu.startDate} – {edu.endDate || 'Present'}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL CERTIFICATIONS</h2>
            <div className={styles.sectionContent}>
              {pageData.certifications.map((cert, i) => (
                <div key={i} className={styles.certItem}>
                  <strong>{cert.name}</strong>
                  {cert.issuingBody && ` – ${cert.issuingBody}`}
                  {cert.date && ` (${cert.date})`}
                  {cert.expiryDate && ` – Expires: ${cert.expiryDate}`}
                </div>
              ))}
            </div>
          </section>
        )}

        {hasMachinery && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>MACHINERY & EQUIPMENT</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.skillsList}>
                {pageData.machinery.map((m, i) => <li key={i}>{m.name}</li>)}
              </ul>
            </div>
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>TECHNICAL SKILLS</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.skillsList}>
                {pageData.skills.map((s, i) => <li key={i}>{s.name}</li>)}
              </ul>
            </div>
          </section>
        )}

        {hasSafetyCerts && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>SAFETY CERTIFICATIONS</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.safetyCerts.map((s, i) => <li key={i}>{s.name}</li>)}
              </ul>
            </div>
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LANGUAGES</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.languages.map((l, i) => (
                  <li key={i}>{l.name}{l.proficiency && ` (${l.proficiency})`}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {getPagesWithContent().length > 1 && (
          <div className={styles.pageIndicator}>
            Page {getPagesWithContent().indexOf(pageNumber) + 1} of {getPagesWithContent().length}
          </div>
        )}
      </div>
    );
  };

  const renderTemplate = (pageNumber) => {
    const pageData = getDataByPage(pageNumber);
    return <IndustrialTemplate formData={formData} pageData={pageData} pageNumber={pageNumber} totalPages={totalPages} />;
  };

  const actualPagesWithContent = getPagesWithContent().length;

  return (
    <div className={styles.resumeBuilder}>
      <Head>
        <title>Industrial Resume Builder | Manufacturing & Engineering Professionals</title>
        <meta name="description" content="Create a professional resume for industrial, manufacturing, and engineering roles. Highlight machinery, safety certs, and technical skills." />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Build Your <span className={styles.gradientText}>Industrial Resume</span>
            </h1>
            <p className={styles.heroSubtitle}>
              For technicians, engineers, plant operators, and manufacturing professionals.
              Showcase machinery expertise, safety certifications, and hands-on experience.
            </p>
          </div>
        </div>
      </section>

      <div className={styles.singleColumnLayout}>
        {/* Preview */}
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button onClick={() => setShowFullPreview(!showFullPreview)} className={styles.previewButton}>
                <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
              </button>
              <button 
                onClick={generatePDF} 
                className={styles.downloadButton}
                disabled={isGeneratingPDF || actualPagesWithContent === 0}
              >
                <FiDownload />
                {isGeneratingPDF ? 'Generating...' : `Download PDF (${actualPagesWithContent} page${actualPagesWithContent !== 1 ? 's' : ''})`}
              </button>
            </div>
          </div>

          <div className={`${styles.previewContainer} ${showFullPreview ? styles.fullPreview : ''}`}>
            <div className={styles.resumePreviewCard}>
              <div className={styles.previewContent}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <div 
                    key={i + 1} 
                    className={`${styles.resumePreview} ${currentPage === i + 1 ? styles.activePreview : styles.inactivePreview}`}
                    ref={resumeRefs[i]}
                  >
                    {renderTemplate(i + 1)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.previewNavigation}>
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={styles.previewNavButton}
            >
              <FiChevronLeft /> Previous Page
            </button>
            <div className={styles.previewPageInfo}>
              Page {currentPage} of {totalPages}
              {actualPagesWithContent > 0 && <span className={styles.contentPagesInfo}>({actualPagesWithContent} with content)</span>}
            </div>
            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={styles.previewNavButton}
            >
              Next Page <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className={styles.formSection}>
          <div className={styles.pageManagement}>
            <div className={styles.pageControls}>
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={styles.pageButton}>
                <FiChevronLeft /> Previous
              </button>
              <div className={styles.pageInfo}>
                Page {currentPage} of {totalPages}
                {actualPagesWithContent > 0 && <span className={styles.contentPagesInfo}>({actualPagesWithContent} with content)</span>}
              </div>
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className={styles.pageButton}>
                Next <FiChevronRight />
              </button>
            </div>
            <div className={styles.pageActions}>
              {totalPages < 5 && <button onClick={addNewPage} className={styles.addPageButton}><FiPlus /> Add Page</button>}
              {totalPages > 1 && <button onClick={removeLastPage} className={styles.removePageButton}><FiX /> Remove Last Page</button>}
            </div>
          </div>

          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'experience', label: 'Work Experience', icon: <FiBriefcase /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'certs', label: 'Certifications', icon: <FiAward /> },
              { id: 'skills', label: 'Technical Skills', icon: <FiTool /> },
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
            {/* Personal */}
            {activeSection === 'personal' && currentPage === 1 && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiUser /> Personal Information</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@industry.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Address
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="Detroit, MI" className={styles.formInput} />
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
                      placeholder="Detail-oriented Manufacturing Technician with 8+ years in automotive assembly..." 
                      required 
                      className={styles.formTextarea}
                      rows="4"
                    />
                  </label>
                </div>

                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Professional Links</h4>
                  <div className={styles.socialInput}>
                    <select value={currentSocialLink.platform} onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} className={styles.formSelect}>
                      <option value="">Select</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Portfolio">Portfolio</option>
                    </select>
                    <input type="url" placeholder="URL" value={currentSocialLink.url} onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addSocialLink} className={styles.addButton} disabled={!currentSocialLink.platform || !currentSocialLink.url}>
                        <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add'}
                      </button>
                      {currentSocialLink.isEditing && (
                        <button type="button" onClick={() => setCurrentSocialLink(defaultSocialLink())} className={styles.cancelButton}>
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.socialLinks.length === 0 ? (
                      <p className={styles.emptyMessage}>No links added</p>
                    ) : (
                      formData.socialLinks.map((link, i) => (
                        <div key={i} className={styles.listItem}>
                          <div className={styles.itemInfo}>
                            <span>{link.platform}</span>
                            <span>{formatSocialUrl(link.url)}</span>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editSocialLink(i)} className={styles.editButton}><FiEdit2 /></button>
                            <button onClick={() => deleteSocialLink(i)} className={styles.deleteButton}><FiTrash2 /></button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Experience */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBriefcase /> Work Experience – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position*
                      <input value={currentExperience.position} onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} placeholder="Maintenance Technician" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input value={currentExperience.company} onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} placeholder="Ford Motor Company" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Department / Plant
                    <input value={currentExperience.department} onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} placeholder="Assembly Line 3" className={styles.formInput} />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input type="text" placeholder="MM/YYYY" value={currentExperience.startDate} onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      End Date
                      <input type="text" placeholder="MM/YYYY or Present" value={currentExperience.endDate} onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Key Responsibilities*
                    <textarea value={currentExperience.description} onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} placeholder="• Operated and maintained CNC machines..." required className={styles.formTextarea} rows="4" />
                  </label>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addExperience} className={styles.addButton} disabled={!currentExperience.position || !currentExperience.company || !currentExperience.startDate}>
                      <FiPlus /> {currentExperience.isEditing ? 'Update' : 'Add Experience'}
                    </button>
                    {currentExperience.isEditing && <button type="button" onClick={() => setCurrentExperience(defaultExperience())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4>Your Experience on Page {currentPage}</h4>
                  {getDataByPage(currentPage).experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No experience added</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).experience.map((exp, i) => {
                        const globalIdx = formData.experience.findIndex(e => e === exp);
                        return (
                          <div key={i} className={styles.listItem}>
                            <div className={styles.itemContent}>
                              <div className={styles.itemHeader}>
                                <strong>{exp.position}</strong>
                                <span>at {exp.company}</span>
                              </div>
                              <div className={styles.itemMeta}>
                                <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                                <span className={styles.pageBadge}>Page {exp.page}</span>
                              </div>
                              <div className={styles.itemDescription}>
                                {exp.description.split('\n').filter(l => l.trim()).map((line, j) => <p key={j} className={styles.bulletPoint}>• {line}</p>)}
                              </div>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editExperience(globalIdx)} className={styles.editButton}><FiEdit2 /></button>
                              <button onClick={() => deleteExperience(globalIdx)} className={styles.deleteButton}><FiTrash2 /></button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Education */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiBook /> Education – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input value={currentEducation.institution} onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} placeholder="Michigan Tech University" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Degree*
                      <input value={currentEducation.degree} onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} placeholder="Associate in Applied Science" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Field of Study
                    <input value={currentEducation.field} onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })} placeholder="Mechanical Engineering Technology" className={styles.formInput} />
                  </label>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date
                      <input type="text" placeholder="MM/YYYY" value={currentEducation.startDate} onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      End Date
                      <input type="text" placeholder="MM/YYYY or Expected" value={currentEducation.endDate} onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addEducation} className={styles.addButton} disabled={!currentEducation.institution || !currentEducation.degree}>
                      <FiPlus /> {currentEducation.isEditing ? 'Update' : 'Add Education'}
                    </button>
                    {currentEducation.isEditing && <button type="button" onClick={() => setCurrentEducation(defaultEducation())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
              </div>
            )}

            {/* Certs & Skills */}
            {activeSection === 'certs' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiAward /> Certifications – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.skillsInput}>
                    <input value={currentCertification.name} onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} placeholder="OSHA 30-Hour General Industry" className={styles.formInput} />
                    <input value={currentCertification.issuingBody} onChange={(e) => setCurrentCertification({ ...currentCertification, issuingBody: e.target.value })} placeholder="OSHA" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <input value={currentCertification.date} onChange={(e) => setCurrentCertification({ ...currentCertification, date: e.target.value })} placeholder="Issued (MM/YYYY)" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <input value={currentCertification.expiryDate} onChange={(e) => setCurrentCertification({ ...currentCertification, expiryDate: e.target.value })} placeholder="Expiry (MM/YYYY)" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addCertification} className={styles.addButton} disabled={!currentCertification.name.trim()}>
                        <FiPlus /> {currentCertification.isEditing ? 'Update' : 'Add Certification'}
                      </button>
                      {currentCertification.isEditing && <button type="button" onClick={() => setCurrentCertification(defaultCertification())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4><FiTool /> Technical Skills – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentSkill.name} onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} placeholder="CNC Programming, PLC Troubleshooting" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addSkill} className={styles.addButton} disabled={!currentSkill.name.trim()}>
                        <FiPlus /> {currentSkill.isEditing ? 'Update' : 'Add Skill'}
                      </button>
                      {currentSkill.isEditing && <button type="button" onClick={() => setCurrentSkill(defaultSkill())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4>Machinery & Equipment – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentMachinery.name} onChange={(e) => setCurrentMachinery({ ...currentMachinery, name: e.target.value })} placeholder="Haas VF-2, Mazak QTU-200" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addMachinery} className={styles.addButton} disabled={!currentMachinery.name.trim()}>
                        <FiPlus /> {currentMachinery.isEditing ? 'Update' : 'Add Machinery'}
                      </button>
                      {currentMachinery.isEditing && <button type="button" onClick={() => setCurrentMachinery(defaultMachinery())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>

                <div className={styles.formCard}>
                  <h4>Safety Certifications – Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentSafetyCert.name} onChange={(e) => setCurrentSafetyCert({ ...currentSafetyCert, name: e.target.value })} placeholder="Forklift Operator, Confined Space Entry" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addSafetyCert} className={styles.addButton} disabled={!currentSafetyCert.name.trim()}>
                        <FiPlus /> {currentSafetyCert.isEditing ? 'Update' : 'Add Safety Cert'}
                      </button>
                      {currentSafetyCert.isEditing && <button type="button" onClick={() => setCurrentSafetyCert(defaultSafetyCert())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Full Preview Modal */}
      {showFullPreview && (
        <div className={styles.fullPreviewModal} onClick={() => setShowFullPreview(false)}>
          <div className={styles.fullPreviewContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.fullPreviewHeader}>
              <h3>Full Industrial Resume Preview</h3>
              <button className={styles.closeButton} onClick={() => setShowFullPreview(false)}><FiX /></button>
            </div>
            <div className={styles.fullPreviewPages}>
              {Array.from({ length: totalPages }, (_, i) => (
                <div key={i + 1} className={styles.fullPreviewPage}>
                  {renderTemplate(i + 1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Industrialresume;