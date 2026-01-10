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
  FiBook,
  FiGlobe,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiEye,
  FiShoppingBag,
  FiHeadphones
} from 'react-icons/fi';
import styles from './Consumerresume.module.css';

const Consumerresume = () => {
  // --- Default Retail-Specific Items ---
  const defaultExperience = () => ({
    company: '',
    position: '',
    location: '',
    startDate: '',
    endDate: '',
    achievements: '',
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

  const defaultSkill = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultPosSystem = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });

  const defaultCertification = () => ({
    name: '',
    issuer: '',
    date: '',
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
    skills: [],
    posSystems: [],
    certifications: [],
    languages: [],
    socialLinks: []
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentPosSystem, setCurrentPosSystem] = useState(defaultPosSystem());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  // ❌ Removed: const [selectedTemplate] = useState('retail');
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
      pageData.skills.length > 0 ||
      pageData.posSystems.length > 0 ||
      pageData.certifications.length > 0 ||
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
        skills: shift(formData.skills),
        posSystems: shift(formData.posSystems),
        certifications: shift(formData.certifications),
        languages: shift(formData.languages)
      });
      setTotalPages(totalPages - 1);
      if (currentPage > totalPages - 1) setCurrentPage(totalPages - 1);
    }
  };

  // --- Experience (Retail Focused) ---
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

  // ❌ Removed: editExperience, deleteExperience

  // --- Education ---
  // ❌ Removed: addEducation, editEducation, deleteEducation

  // --- Skills ---
  // ❌ Removed: addSkill, editSkill, deleteSkill

  // --- POS Systems ---
  const addPosSystem = () => {
    if (currentPosSystem.name.trim()) {
      const item = { ...currentPosSystem, page: currentPage };
      if (item.isEditing) {
        const updated = [...formData.posSystems];
        updated[item.editIndex] = { name: item.name.trim(), page: item.page };
        setFormData({ ...formData, posSystems: updated });
      } else {
        setFormData({
          ...formData,
          posSystems: [...formData.posSystems, { name: item.name.trim(), page: item.page }]
        });
      }
      setCurrentPosSystem(defaultPosSystem());
    }
  };

  // ❌ Removed: editPosSystem, deletePosSystem

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

  // ❌ Removed: editCertification, deleteCertification

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

  // ❌ Removed: editLanguage, deleteLanguage

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
    skills: formData.skills.filter(s => s.page === page),
    posSystems: formData.posSystems.filter(p => p.page === page),
    certifications: formData.certifications.filter(c => c.page === page),
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

      pdf.save(`${formData.fullName || 'retail_resume'}_resume.pdf`);
    } catch (err) {
      console.error('PDF Error:', err);
      alert('Failed to generate PDF.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // ✅ RETAIL RESUME TEMPLATE
  const RetailTemplate = ({ formData, pageData, pageNumber, totalPages }) => {
    const hasSummary = pageNumber === 1 && formData.summary;
    const hasExperience = pageData.experience.length > 0;
    const hasEducation = pageData.education.length > 0;
    const hasSkills = pageData.skills.length > 0;
    const hasPosSystems = pageData.posSystems.length > 0;
    const hasCertifications = pageData.certifications.length > 0;
    const hasLanguages = pageData.languages.length > 0;

    return (
      <div className={styles.retailTemplate}>
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
            <h2 className={styles.sectionTitle}>RETAIL EXPERIENCE</h2>
            <div className={styles.sectionContent}>
              {pageData.experience.map((exp, i) => (
                <div key={i} className={styles.experienceItem}>
                  <div className={styles.experienceHeader}>
                    <h3>{exp.position}</h3>
                    <p className={styles.company}>{exp.company}{exp.location && ` – ${exp.location}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                  </div>
                  <ul className={styles.bulletList}>
                    {exp.achievements.split('\n').map((line, j) => line.trim() ? <li key={j}>{line}</li> : null)}
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

        {hasPosSystems && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>POINT-OF-SALE (POS) SYSTEMS</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.skillsList}>
                {pageData.posSystems.map((p, i) => <li key={i}>{p.name}</li>)}
              </ul>
            </div>
          </section>
        )}

        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CUSTOMER SERVICE & SALES SKILLS</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.skillsList}>
                {pageData.skills.map((s, i) => <li key={i}>{s.name}</li>)}
              </ul>
            </div>
          </section>
        )}

        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CERTIFICATIONS</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.certifications.map((c, i) => (
                  <li key={i}>
                    {c.name}{c.issuer && ` – ${c.issuer}`}{c.date && ` (${c.date})`}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LANGUAGES</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.languages.map((l, i) => <li key={i}>{l.name}</li>)}
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
    return <RetailTemplate formData={formData} pageData={pageData} pageNumber={pageNumber} totalPages={totalPages} />;
  };

  const actualPagesWithContent = getPagesWithContent().length;

  return (
    <div className={styles.resumeBuilder}>
      <Head>
        <title>Retail Resume Builder | Consumer & Sales Professionals</title>
        <meta name="description" content="Create a professional resume for retail, sales, and customer service roles. Highlight POS systems, sales metrics, and merchandising skills." />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Build Your <span className={styles.gradientText}>Retail Resume</span>
            </h1>
            <p className={styles.heroSubtitle}>
              For sales associates, store managers, cashiers, and customer service professionals.
              Showcase your sales achievements, POS expertise, and customer satisfaction skills.
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
              { id: 'experience', label: 'Retail Experience', icon: <FiShoppingBag /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Customer Skills', icon: <FiHeadphones /> },
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
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Alex Johnson" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="alex@retail.com" required className={styles.formInput} />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Address
                      <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="New York, NY" className={styles.formInput} />
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
                      placeholder="Customer-focused Retail Associate with 4+ years in high-volume fashion retail..." 
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

            {/* Retail Experience */}
            {activeSection === 'experience' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiShoppingBag /> Retail Experience – Page {currentPage}</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Position*
                      <input value={currentExperience.position} onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} placeholder="Sales Associate" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input value={currentExperience.company} onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} placeholder="Macy's" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Store Location
                    <input value={currentExperience.location} onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })} placeholder="Manhattan, NY" className={styles.formInput} />
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
                    Key Achievements*
                    <textarea value={currentExperience.achievements} onChange={(e) => setCurrentExperience({ ...currentExperience, achievements: e.target.value })} placeholder="• Exceeded monthly sales targets by 25% for 6 consecutive months..." required className={styles.formTextarea} rows="4" />
                  </label>
                  <div className={styles.formActions}>
                    <button type="button" onClick={addExperience} className={styles.addButton} disabled={!currentExperience.position || !currentExperience.company || !currentExperience.startDate}>
                      <FiPlus /> {currentExperience.isEditing ? 'Update' : 'Add Experience'}
                    </button>
                    {currentExperience.isEditing && <button type="button" onClick={() => setCurrentExperience(defaultExperience())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
                {/* No edit/delete UI for experience → those handlers unused */}
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
                      <input value={currentEducation.institution} onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} placeholder="City College" required className={styles.formInput} />
                    </label>
                    <label className={styles.formLabel}>
                      Degree*
                      <input value={currentEducation.degree} onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} placeholder="Associate of Arts" required className={styles.formInput} />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                      Field / Focus
                      <input value={currentEducation.field} onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })} placeholder="Business Administration" className={styles.formInput} />
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
                    {/* Add button not implemented in UI → addEducation unused → already removed */}
                    {/* Only show current form; no list editing */}
                    <button type="button" onClick={() => {
                      // Inline add since addEducation was removed
                      if (currentEducation.institution && currentEducation.degree) {
                        const item = { ...currentEducation, page: currentPage, isEditing: false, editIndex: null };
                        setFormData({
                          ...formData,
                          education: [...formData.education, item]
                        });
                        setCurrentEducation(defaultEducation());
                      }
                    }} className={styles.addButton} disabled={!currentEducation.institution || !currentEducation.degree}>
                      <FiPlus /> Add Education
                    </button>
                    {currentEducation.isEditing && <button type="button" onClick={() => setCurrentEducation(defaultEducation())} className={styles.cancelButton}><FiX /> Cancel</button>}
                  </div>
                </div>
              </div>
            )}

            {/* Skills */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiHeadphones /> Customer Skills – Page {currentPage}</h3>

                {/* POS Systems */}
                <div className={styles.formCard}>
                  <h4>POS Systems</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentPosSystem.name} onChange={(e) => setCurrentPosSystem({ ...currentPosSystem, name: e.target.value })} placeholder="Square, Shopify POS, Lightspeed" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addPosSystem} className={styles.addButton} disabled={!currentPosSystem.name.trim()}>
                        <FiPlus /> Add POS System
                      </button>
                      {currentPosSystem.isEditing && <button type="button" onClick={() => setCurrentPosSystem(defaultPosSystem())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className={styles.formCard}>
                  <h4>Customer Service & Sales Skills</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentSkill.name} onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} placeholder="Upselling, Conflict Resolution, Visual Merchandising" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={() => {
                        if (currentSkill.name.trim()) {
                          setFormData({
                            ...formData,
                            skills: [...formData.skills, { name: currentSkill.name.trim(), page: currentPage }]
                          });
                          setCurrentSkill(defaultSkill());
                        }
                      }} className={styles.addButton} disabled={!currentSkill.name.trim()}>
                        <FiPlus /> Add Skill
                      </button>
                      {currentSkill.isEditing && <button type="button" onClick={() => setCurrentSkill(defaultSkill())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>

                {/* Certifications */}
                <div className={styles.formCard}>
                  <h4>Certifications</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentCertification.name} onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} placeholder="Certified Retail Manager (CRM)" className={styles.formInput} />
                    <input value={currentCertification.issuer} onChange={(e) => setCurrentCertification({ ...currentCertification, issuer: e.target.value })} placeholder="National Retail Federation" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <input value={currentCertification.date} onChange={(e) => setCurrentCertification({ ...currentCertification, date: e.target.value })} placeholder="2023" className={styles.formInput} style={{ marginTop: '0.5rem' }} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addCertification} className={styles.addButton} disabled={!currentCertification.name.trim()}>
                        <FiPlus /> Add Certification
                      </button>
                      {currentCertification.isEditing && <button type="button" onClick={() => setCurrentCertification(defaultCertification())} className={styles.cancelButton}><FiX /> Cancel</button>}
                    </div>
                  </div>
                </div>

                {/* Languages */}
                <div className={styles.formCard}>
                  <h4>Languages</h4>
                  <div className={styles.skillsInput}>
                    <input value={currentLanguage.name} onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} placeholder="Spanish, French" className={styles.formInput} />
                    <div className={styles.formActions}>
                      <button type="button" onClick={addLanguage} className={styles.addButton} disabled={!currentLanguage.name.trim()}>
                        <FiPlus /> Add Language
                      </button>
                      {currentLanguage.isEditing && <button type="button" onClick={() => setCurrentLanguage(defaultLanguage())} className={styles.cancelButton}><FiX /> Cancel</button>}
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
              <h3>Full Retail Resume Preview</h3>
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

export default Consumerresume;