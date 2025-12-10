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
  FiCode,
  FiAward,
  FiGlobe,
  FiFileText,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiCheck,
  FiGitBranch,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiEye
} from 'react-icons/fi';
import styles from './ResumeThree.module.css';

const ResumeApex = () => {
  const defaultExperience = () => ({ company: '', position: '', startDate: '', endDate: '', description: '', isEditing: false, editIndex: null, page: 1 });
  const defaultEducation = () => ({ institution: '', degree: '', field: '', startDate: '', endDate: '', isEditing: false, editIndex: null, page: 1 });
  const defaultSkill = () => ({ name: '', isEditing: false, editIndex: null, page: 1 });
  const defaultCertification = () => ({ name: '', isEditing: false, editIndex: null, page: 1 });
  const defaultLanguage = () => ({ name: '', isEditing: false, editIndex: null, page: 1 });
  const defaultSocialLink = () => ({ platform: '', url: '', isEditing: false, editIndex: null });
  const defaultProject = () => ({ name: '', description: '', technologies: '', isEditing: false, editIndex: null, page: 1 });

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
    languages: [],
    socialLinks: [],
    projects: []
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [currentProject, setCurrentProject] = useState(defaultProject());

  const [selectedTemplate, setSelectedTemplate] = useState('apex');
  const [activeSection, setActiveSection] = useState('personal');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const resumeRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);

  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      github: <FiGitBranch />,
      twitter: <FiGlobe />,
      portfolio: <FiGlobe />,
      website: <FiGlobe />,
      personal: <FiGlobe />
    };
    return icons[platform.toLowerCase()] || <FiGlobe />;
  };

  const formatSocialUrl = (url) => url ? url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') : '';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const pageHasContent = (pageNumber) => {
    if (pageNumber === 1) {
      if (formData.fullName || formData.email || formData.summary || formData.socialLinks.length > 0) return true;
    }
    const data = getDataByPage(pageNumber);
    return (
      data.experience.length > 0 ||
      data.education.length > 0 ||
      data.skills.length > 0 ||
      data.certifications.length > 0 ||
      data.languages.length > 0 ||
      data.projects.length > 0
    );
  };

  const getPagesWithContent = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (pageHasContent(i)) pages.push(i);
    }
    return pages;
  };

  const getDataByPage = (page) => ({
    experience: formData.experience.filter(exp => exp.page === page),
    education: formData.education.filter(edu => edu.page === page),
    skills: formData.skills.filter(skill => skill.page === page),
    certifications: formData.certifications.filter(cert => cert.page === page),
    languages: formData.languages.filter(lang => lang.page === page),
    projects: formData.projects.filter(proj => proj.page === page)
  });

  const addNewPage = () => totalPages < 5 && setTotalPages(p => { setCurrentPage(p + 1); return p + 1; });
  const removeLastPage = () => {
    if (totalPages <= 1) return;
    const last = totalPages;
    const mapPageDown = arr => arr.map(i => i.page === last ? { ...i, page: last - 1 } : i);
    setFormData(f => ({
      ...f,
      experience: mapPageDown(f.experience),
      education: mapPageDown(f.education),
      projects: mapPageDown(f.projects),
      skills: mapPageDown(f.skills),
      certifications: mapPageDown(f.certifications),
      languages: mapPageDown(f.languages)
    }));
    setTotalPages(p => { const n = p - 1; if (currentPage > n) setCurrentPage(n); return n; });
  };

  // --- EXPERIENCE ---
  const addExperience = () => {
    if (!currentExperience.position || !currentExperience.company || !currentExperience.startDate || !currentExperience.description) return;
    const newItem = { ...currentExperience, page: currentPage };
    setFormData(f => ({
      ...f,
      experience: currentExperience.isEditing
        ? f.experience.map((e, i) => i === currentExperience.editIndex ? { ...newItem, isEditing: false, editIndex: null } : e)
        : [...f.experience, newItem]
    }));
    setCurrentExperience(defaultExperience());
  };
  const editExperience = (idx) => {
    const exp = formData.experience[idx];
    setCurrentExperience({ ...exp, isEditing: true, editIndex: idx });
    setCurrentPage(exp.page);
  };
  const deleteExperience = (idx) => setFormData(f => ({ ...f, experience: f.experience.filter((_, i) => i !== idx) }));

  // --- EDUCATION ---
  const addEducation = () => {
    if (!currentEducation.institution || !currentEducation.degree) return;
    const newItem = { ...currentEducation, page: currentPage };
    setFormData(f => ({
      ...f,
      education: currentEducation.isEditing
        ? f.education.map((e, i) => i === currentEducation.editIndex ? { ...newItem, isEditing: false, editIndex: null } : e)
        : [...f.education, newItem]
    }));
    setCurrentEducation(defaultEducation());
  };
  const editEducation = (idx) => {
    const edu = formData.education[idx];
    setCurrentEducation({ ...edu, isEditing: true, editIndex: idx });
    setCurrentPage(edu.page);
  };
  const deleteEducation = (idx) => setFormData(f => ({ ...f, education: f.education.filter((_, i) => i !== idx) }));

  // --- SKILL ---
  const addSkill = () => {
    if (!currentSkill.name.trim()) return;
    const newItem = { name: currentSkill.name.trim(), page: currentPage };
    setFormData(f => ({
      ...f,
      skills: currentSkill.isEditing
        ? f.skills.map((s, i) => i === currentSkill.editIndex ? newItem : s)
        : [...f.skills, newItem]
    }));
    setCurrentSkill(defaultSkill());
  };
  const editSkill = (idx) => {
    const skill = formData.skills[idx];
    setCurrentSkill({ name: skill.name, isEditing: true, editIndex: idx, page: skill.page });
    setCurrentPage(skill.page);
  };
  const deleteSkill = (idx) => setFormData(f => ({ ...f, skills: f.skills.filter((_, i) => i !== idx) }));

  // --- CERTIFICATION ---
  const addCertification = () => {
    if (!currentCertification.name.trim()) return;
    const newItem = { name: currentCertification.name.trim(), page: currentPage };
    setFormData(f => ({
      ...f,
      certifications: currentCertification.isEditing
        ? f.certifications.map((c, i) => i === currentCertification.editIndex ? newItem : c)
        : [...f.certifications, newItem]
    }));
    setCurrentCertification(defaultCertification());
  };
  const editCertification = (idx) => {
    const cert = formData.certifications[idx];
    setCurrentCertification({ name: cert.name, isEditing: true, editIndex: idx, page: cert.page });
    setCurrentPage(cert.page);
  };
  const deleteCertification = (idx) => setFormData(f => ({ ...f, certifications: f.certifications.filter((_, i) => i !== idx) }));

  // --- LANGUAGE ---
  const addLanguage = () => {
    if (!currentLanguage.name.trim()) return;
    const newItem = { name: currentLanguage.name.trim(), page: currentPage };
    setFormData(f => ({
      ...f,
      languages: currentLanguage.isEditing
        ? f.languages.map((l, i) => i === currentLanguage.editIndex ? newItem : l)
        : [...f.languages, newItem]
    }));
    setCurrentLanguage(defaultLanguage());
  };
  const editLanguage = (idx) => {
    const lang = formData.languages[idx];
    setCurrentLanguage({ name: lang.name, isEditing: true, editIndex: idx, page: lang.page });
    setCurrentPage(lang.page);
  };
  const deleteLanguage = (idx) => setFormData(f => ({ ...f, languages: f.languages.filter((_, i) => i !== idx) }));

  // --- SOCIAL LINK ---
  const addSocialLink = () => {
    if (!currentSocialLink.platform || !currentSocialLink.url) return;
    let url = currentSocialLink.url;
    if (!/^https?:\/\//.test(url)) url = `https://${url}`;
    setFormData(f => ({
      ...f,
      socialLinks: currentSocialLink.isEditing
        ? f.socialLinks.map((link, i) => i === currentSocialLink.editIndex ? { platform: currentSocialLink.platform, url } : link)
        : [...f.socialLinks, { platform: currentSocialLink.platform, url }]
    }));
    setCurrentSocialLink(defaultSocialLink());
  };
  const editSocialLink = (idx) => {
    const { platform, url } = formData.socialLinks[idx];
    setCurrentSocialLink({ platform, url: url.replace(/^https?:\/\//, '').replace(/\/$/, ''), isEditing: true, editIndex: idx });
  };
  const deleteSocialLink = (idx) => setFormData(f => ({ ...f, socialLinks: f.socialLinks.filter((_, i) => i !== idx) }));

  // --- PROJECT ---
  const addProject = () => {
    if (!currentProject.name || !currentProject.description) return;
    const newItem = { ...currentProject, page: currentPage };
    setFormData(f => ({
      ...f,
      projects: currentProject.isEditing
        ? f.projects.map((p, i) => i === currentProject.editIndex ? { ...newItem, isEditing: false, editIndex: null } : p)
        : [...f.projects, newItem]
    }));
    setCurrentProject(defaultProject());
  };
  const editProject = (idx) => {
    const proj = formData.projects[idx];
    setCurrentProject({ ...proj, isEditing: true, editIndex: idx });
    setCurrentPage(proj.page);
  };
  const deleteProject = (idx) => setFormData(f => ({ ...f, projects: f.projects.filter((_, i) => i !== idx) }));

  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pages = getPagesWithContent();
      if (pages.length === 0) {
        alert("Add content first");
        setIsGeneratingPDF(false);
        return;
      }
      const originals = [];
      for (let i = 0; i < pages.length; i++) {
        const pageNum = pages[i];
        const el = resumeRefs[pageNum - 1]?.current;
        if (!el) continue;
        originals[pageNum - 1] = {
          display: el.style.display,
          position: el.style.position,
          width: el.style.width,
          height: el.style.height,
          transform: el.style.transform
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
          backgroundColor: '#ffffff',
          useCORS: true,
          allowTaint: false
        });
        const img = canvas.toDataURL('image/png');
        if (i > 0) pdf.addPage();
        pdf.addImage(img, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
      }
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const el = resumeRefs[pageNum - 1]?.current;
        const state = originals[pageNum - 1];
        if (el && state) Object.assign(el.style, state);
      }
      pdf.save(`${formData.fullName || 'resume'}_apex.pdf`);
    } catch (e) {
      console.error(e);
      alert('PDF generation failed');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // ✨ APEX TEMPLATE — MODERN, CENTERED, MINIMAL
  const ApexTemplate = ({ formData, pageData, pageNumber, totalPages }) => {
    const hasSummary = pageNumber === 1 && formData.summary;
    const hasExperience = pageData.experience.length > 0;
    const hasProjects = pageData.projects.length > 0;
    const hasEducation = pageData.education.length > 0;
    const hasSkills = pageData.skills.length > 0;
    const hasCertifications = pageData.certifications.length > 0;
    const hasLanguages = pageData.languages.length > 0;

    return (
      <div className={styles.apexTemplate}>
        {pageNumber === 1 && (
          <header className={styles.header}>
            <h1 className={styles.name}>{formData.fullName || 'Your Name'}</h1>
            <div className={styles.contactRow}>
              {formData.email && <span><FiMail /> {formData.email}</span>}
              {formData.phone && <span><FiPhone /> {formData.phone}</span>}
              {formData.address && <span><FiMapPin /> {formData.address}</span>}
              {formData.socialLinks.map((link, i) => (
                <span key={i}>{getSocialIcon(link.platform)} {formatSocialUrl(link.url)}</span>
              ))}
            </div>
          </header>
        )}

        <main className={styles.content}>
          {hasSummary && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Summary</h2>
              <p className={styles.text}>{formData.summary}</p>
            </section>
          )}

          {hasExperience && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Experience</h2>
              {pageData.experience.map((exp, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.date}>{exp.startDate} – {exp.endDate || 'Present'}</div>
                  <div className={styles.itemBody}>
                    <h3 className={styles.itemTitle}>{exp.position}</h3>
                    <p className={styles.itemSubtitle}>{exp.company}</p>
                    <ul className={styles.bullets}>
                      {exp.description.split('\n').map((line, j) => line.trim() ? <li key={j}>{line.trim()}</li> : null)}
                    </ul>
                  </div>
                </div>
              ))}
            </section>
          )}

          {hasProjects && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Projects</h2>
              {pageData.projects.map((proj, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.itemBody}>
                    <div className={styles.projectHeader}>
                      <h3 className={styles.itemTitle}>{proj.name}</h3>
                      {proj.technologies && <span className={styles.techTag}>{proj.technologies}</span>}
                    </div>
                    <ul className={styles.bullets}>
                      {proj.description.split('\n').map((line, j) => line.trim() ? <li key={j}>{line.trim()}</li> : null)}
                    </ul>
                  </div>
                </div>
              ))}
            </section>
          )}

          {hasEducation && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Education</h2>
              {pageData.education.map((edu, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.date}>{edu.startDate} – {edu.endDate || 'Present'}</div>
                  <div className={styles.itemBody}>
                    <h3 className={styles.itemTitle}>{edu.degree}{edu.field && ` in ${edu.field}`}</h3>
                    <p className={styles.itemSubtitle}>{edu.institution}</p>
                  </div>
                </div>
              ))}
            </section>
          )}

          {(hasSkills || hasCertifications || hasLanguages) && (
            <section className={styles.section}>
              <div className={styles.tagsGrid}>
                {hasSkills && (
                  <div>
                    <h3 className={styles.inlineTitle}>Skills</h3>
                    <div className={styles.tags}>
                      {pageData.skills.map((s, i) => <span key={i} className={styles.tag}>{s.name}</span>)}
                    </div>
                  </div>
                )}
                {hasCertifications && (
                  <div>
                    <h3 className={styles.inlineTitle}>Certifications</h3>
                    <div className={styles.tags}>
                      {pageData.certifications.map((c, i) => <span key={i} className={styles.tag}>{c.name}</span>)}
                    </div>
                  </div>
                )}
                {hasLanguages && (
                  <div>
                    <h3 className={styles.inlineTitle}>Languages</h3>
                    <div className={styles.tags}>
                      {pageData.languages.map((l, i) => <span key={i} className={styles.tag}>{l.name}</span>)}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </main>

        {getPagesWithContent().length > 1 && (
          <div className={styles.pageNumber}>— {getPagesWithContent().indexOf(pageNumber) + 1} —</div>
        )}
      </div>
    );
  };

  const renderTemplate = (pageNumber) => {
    const pageData = getDataByPage(pageNumber);
    return <ApexTemplate formData={formData} pageData={pageData} pageNumber={pageNumber} totalPages={totalPages} />;
  };

  const pagesWithContent = getPagesWithContent().length;

  return (
    <div className={styles.resumeBuilder}>
      <Head>
        <title>Apex Resume Builder | Modern & Professional</title>
        <meta name="description" content="Create a sleek, modern resume with the Apex template." />
      </Head>

      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Apex <span className={styles.gradientText}>Resume</span>
            </h1>
            <p className={styles.heroSubtitle}>Minimal. Elegant. Print-perfect.</p>
          </div>
        </div>
      </section>

      <div className={styles.singleColumnLayout}>
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button onClick={() => setShowFullPreview(!showFullPreview)} className={styles.previewButton}>
                <FiEye /> {showFullPreview ? 'Hide Preview' : 'Full Preview'}
              </button>
              <button
                onClick={generatePDF}
                disabled={isGeneratingPDF || pagesWithContent === 0}
                className={styles.downloadButton}
              >
                <FiDownload /> {isGeneratingPDF ? 'Generating...' : `Download PDF (${pagesWithContent} page${pagesWithContent !== 1 ? 's' : ''})`}
              </button>
              <div className={styles.templateSelector}>
                <label>Template:</label>
                <select value={selectedTemplate} onChange={(e) => setSelectedTemplate(e.target.value)} className={styles.formSelect}>
                  <option value="apex">Apex</option>
                </select>
              </div>
            </div>
          </div>

          <div className={`${styles.previewContainer} ${showFullPreview ? styles.fullPreview : ''}`}>
            <div className={styles.resumePreviewCard}>
              <div className={styles.previewContent}>
                {Array.from({ length: totalPages }, (_, i) => (
                  <div
                    key={i + 1}
                    className={`${styles.resumePreview} ${currentPage === i + 1 ? styles.activePreview : ''}`}
                    ref={resumeRefs[i]}
                    style={{ display: currentPage === i + 1 ? 'block' : 'none' }}
                  >
                    {renderTemplate(i + 1)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.previewNavigation}>
            <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={styles.previewNavButton}>
              <FiChevronLeft /> Previous
            </button>
            <div className={styles.previewPageInfo}>
              Page {currentPage} of {totalPages}
              {pagesWithContent > 0 && <span className={styles.contentPagesInfo}>({pagesWithContent} with content)</span>}
            </div>
            <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className={styles.previewNavButton}>
              Next <FiChevronRight />
            </button>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.pageManagement}>
            <div className={styles.pageControls}>
              <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className={styles.pageButton}>
                <FiChevronLeft /> Previous
              </button>
              <div className={styles.pageInfo}>
                Page {currentPage} of {totalPages}
                {pagesWithContent > 0 && <span className={styles.contentPagesInfo}>({pagesWithContent} with content)</span>}
              </div>
              <button onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className={styles.pageButton}>
                Next <FiChevronRight />
              </button>
            </div>
            <div className={styles.pageActions}>
              {totalPages < 5 && <button onClick={addNewPage} className={styles.addPageButton}><FiPlus /> Add Page</button>}
              {totalPages > 1 && <button onClick={removeLastPage} className={styles.removePageButton}><FiX /> Remove Last</button>}
            </div>
          </div>

          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
              { id: 'projects', label: 'Projects', icon: <FiGitBranch /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Skills', icon: <FiCode /> },
            ].map(item => (
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
            {activeSection === 'personal' && currentPage === 1 && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}><FiUser /> Personal Information</h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Full Name*
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Email*
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Phone
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Address
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="City, Country"
                        className={styles.formInput}
                      />
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
                      placeholder="Briefly describe your professional background..."
                      required
                      className={styles.formTextarea}
                      rows="4"
                    />
                  </label>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}><FiGlobe /> Social Links</h4>
                  <div className={styles.socialInput}>
                    <select
                      value={currentSocialLink.platform}
                      onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })}
                      className={styles.formSelect}
                    >
                      <option value="">Select Platform</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="GitHub">GitHub</option>
                      <option value="Twitter">Twitter</option>
                      <option value="Portfolio">Portfolio</option>
                      <option value="Website">Personal Website</option>
                    </select>
                    <input
                      type="url"
                      placeholder="URL"
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
                        <FiPlus />
                        {currentSocialLink.isEditing ? 'Update' : 'Add'}
                      </button>
                      {currentSocialLink.isEditing && (
                        <button
                          type="button"
                          onClick={() => setCurrentSocialLink(defaultSocialLink())}
                          className={styles.cancelButton}
                        >
                          <FiX />
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {formData.socialLinks.length === 0 ? (
                      <p className={styles.emptyMessage}>No social links added yet</p>
                    ) : (
                      formData.socialLinks.map((link, index) => (
                        <div key={index} className={styles.listItem}>
                          <div className={styles.itemInfo}>
                            <span className={styles.itemPlatform}>{link.platform}</span>
                            <span className={styles.itemUrl}>{formatSocialUrl(link.url)}</span>
                          </div>
                          <div className={styles.itemActions}>
                            <button onClick={() => editSocialLink(index)} className={styles.editButton} title="Edit">
                              <FiEdit2 />
                            </button>
                            <button onClick={() => deleteSocialLink(index)} className={styles.deleteButton} title="Delete">
                              <FiTrash2 />
                            </button>
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
                <h3 className={styles.sectionTitle}>
                  <FiBriefcase /> Work Experience - Page {currentPage}
                </h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Job Title*
                      <input
                        value={currentExperience.position}
                        onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })}
                        placeholder="Software Engineer"
                        required
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Company*
                      <input
                        value={currentExperience.company}
                        onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
                        placeholder="Tech Corp Inc."
                        required
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Start Date*
                      <input
                        type="text"
                        placeholder="MM/YYYY"
                        value={currentExperience.startDate}
                        onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })}
                        pattern="(0[1-9]|1[0-2])\/\d{4}"
                        title="Enter date in MM/YYYY format"
                        required
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formLabel}>
                      End Date
                      <input
                        type="text"
                        placeholder="MM/YYYY or Present"
                        value={currentExperience.endDate}
                        onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })}
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Description*
                    <textarea
                      value={currentExperience.description}
                      onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })}
                      placeholder="• Developed and maintained web applications..."
                      required
                      className={styles.formTextarea}
                      rows="4"
                    />
                  </label>
                  <div className={styles.formActions}>
                    <button
                      type="button"
                      onClick={addExperience}
                      className={styles.addButton}
                      disabled={!currentExperience.position || !currentExperience.company || !currentExperience.startDate || !currentExperience.description}
                    >
                      <FiPlus />
                      {currentExperience.isEditing ? 'Update Experience' : 'Add Experience'}
                    </button>
                    {currentExperience.isEditing && (
                      <button
                        type="button"
                        onClick={() => setCurrentExperience(defaultExperience())}
                        className={styles.cancelButton}
                      >
                        <FiX />
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Experience on Page {currentPage}</h4>
                  {getDataByPage(currentPage).experience.length === 0 ? (
                    <p className={styles.emptyMessage}>No experience added yet on this page</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).experience.map((exp, index) => {
                        const globalIndex = formData.experience.findIndex(e =>
                          e.company === exp.company && e.position === exp.position && e.page === currentPage
                        );
                        return (
                          <div key={index} className={styles.listItem}>
                            <div className={styles.itemContent}>
                              <div className={styles.itemHeader}>
                                <strong className={styles.itemTitle}>{exp.position}</strong>
                                <span className={styles.itemSubtitle}>at {exp.company}</span>
                              </div>
                              <div className={styles.itemMeta}>
                                <span className={styles.itemDate}>{exp.startDate} - {exp.endDate || 'Present'}</span>
                                <span className={styles.pageBadge}>Page {exp.page}</span>
                              </div>
                              <div className={styles.itemDescription}>
                                {exp.description.split('\n').map((line, i) => (
                                  <p key={i} className={styles.bulletPoint}>• {line}</p>
                                ))}
                              </div>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editExperience(globalIndex)} className={styles.editButton} title="Edit">
                                <FiEdit2 />
                              </button>
                              <button onClick={() => deleteExperience(globalIndex)} className={styles.deleteButton} title="Delete">
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}>
                  <FiGitBranch /> Projects - Page {currentPage}
                </h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Project Name*
                      <input
                        value={currentProject.name}
                        onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })}
                        placeholder="E-commerce Website"
                        required
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Technologies Used
                      <input
                        value={currentProject.technologies}
                        onChange={(e) => setCurrentProject({ ...currentProject, technologies: e.target.value })}
                        placeholder="React, Node.js, MongoDB"
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <label className={styles.formLabel}>
                    Description*
                    <textarea
                      value={currentProject.description}
                      onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })}
                      placeholder="• Developed a full-stack e-commerce platform..."
                      required
                      className={styles.formTextarea}
                      rows="4"
                    />
                  </label>
                  <div className={styles.formActions}>
                    <button
                      type="button"
                      onClick={addProject}
                      className={styles.addButton}
                      disabled={!currentProject.name || !currentProject.description}
                    >
                      <FiPlus />
                      {currentProject.isEditing ? 'Update Project' : 'Add Project'}
                    </button>
                    {currentProject.isEditing && (
                      <button
                        type="button"
                        onClick={() => setCurrentProject(defaultProject())}
                        className={styles.cancelButton}
                      >
                        <FiX />
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Projects on Page {currentPage}</h4>
                  {getDataByPage(currentPage).projects.length === 0 ? (
                    <p className={styles.emptyMessage}>No projects added yet on this page</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).projects.map((project, index) => {
                        const globalIndex = formData.projects.findIndex(p =>
                          p.name === project.name && p.page === currentPage
                        );
                        return (
                          <div key={index} className={styles.listItem}>
                            <div className={styles.itemContent}>
                              <div className={styles.itemHeader}>
                                <strong className={styles.itemTitle}>{project.name}</strong>
                                {project.technologies && (
                                  <span className={styles.itemSubtitle}>| {project.technologies}</span>
                                )}
                              </div>
                              <div className={styles.itemMeta}>
                                <span className={styles.pageBadge}>Page {project.page}</span>
                              </div>
                              <div className={styles.itemDescription}>
                                {project.description.split('\n').map((line, i) => (
                                  <p key={i} className={styles.bulletPoint}>• {line}</p>
                                ))}
                              </div>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editProject(globalIndex)} className={styles.editButton} title="Edit">
                                <FiEdit2 />
                              </button>
                              <button onClick={() => deleteProject(globalIndex)} className={styles.deleteButton} title="Delete">
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Education Section */}
            {activeSection === 'education' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}>
                  <FiBook /> Education - Page {currentPage}
                </h3>
                <div className={styles.formCard}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Institution*
                      <input
                        value={currentEducation.institution}
                        onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })}
                        placeholder="University of Technology"
                        required
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Degree*
                      <input
                        value={currentEducation.degree}
                        onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })}
                        placeholder="Bachelor of Science"
                        required
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      Field of Study
                      <input
                        value={currentEducation.field}
                        onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })}
                        placeholder="Computer Science"
                        className={styles.formInput}
                      />
                    </label>
                    <label className={styles.formLabel}>
                      Start Date
                      <input
                        type="text"
                        placeholder="MM/YYYY"
                        value={currentEducation.startDate}
                        onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })}
                        className={styles.formInput}
                      />
                    </label>
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>
                      End Date
                      <input
                        type="text"
                        placeholder="MM/YYYY or Present"
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
                      <FiPlus />
                      {currentEducation.isEditing ? 'Update Education' : 'Add Education'}
                    </button>
                    {currentEducation.isEditing && (
                      <button
                        type="button"
                        onClick={() => setCurrentEducation(defaultEducation())}
                        className={styles.cancelButton}
                      >
                        <FiX />
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Education on Page {currentPage}</h4>
                  {getDataByPage(currentPage).education.length === 0 ? (
                    <p className={styles.emptyMessage}>No education added yet on this page</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).education.map((edu, index) => {
                        const globalIndex = formData.education.findIndex(e =>
                          e.institution === edu.institution && e.degree === edu.degree && e.page === currentPage
                        );
                        return (
                          <div key={index} className={styles.listItem}>
                            <div className={styles.itemContent}>
                              <div className={styles.itemHeader}>
                                <strong className={styles.itemTitle}>{edu.degree}</strong>
                                {edu.field && (
                                  <span className={styles.itemSubtitle}>in {edu.field}</span>
                                )}
                              </div>
                              <div className={styles.itemMeta}>
                                <span className={styles.institution}>{edu.institution}</span>
                                <span className={styles.itemDate}>{edu.startDate} - {edu.endDate || 'Present'}</span>
                                <span className={styles.pageBadge}>Page {edu.page}</span>
                              </div>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editEducation(globalIndex)} className={styles.editButton} title="Edit">
                                <FiEdit2 />
                              </button>
                              <button onClick={() => deleteEducation(globalIndex)} className={styles.deleteButton} title="Delete">
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Skills, Certifications, Languages */}
            {activeSection === 'skills' && (
              <div className={styles.formSectionContent}>
                <h3 className={styles.sectionTitle}>
                  <FiCode /> Skills - Page {currentPage}
                </h3>
                <div className={styles.formCard}>
                  <div className={styles.skillsInput}>
                    <input
                      value={currentSkill.name}
                      onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })}
                      placeholder="Enter a skill"
                      className={styles.formInput}
                    />
                    <div className={styles.formActions}>
                      <button
                        type="button"
                        onClick={addSkill}
                        className={styles.addButton}
                        disabled={!currentSkill.name.trim()}
                      >
                        <FiPlus />
                        {currentSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                      </button>
                      {currentSkill.isEditing && (
                        <button
                          type="button"
                          onClick={() => setCurrentSkill(defaultSkill())}
                          className={styles.cancelButton}
                        >
                          <FiX />
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Certifications - Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input
                      value={currentCertification.name}
                      onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })}
                      placeholder="Enter a certification"
                      className={styles.formInput}
                    />
                    <div className={styles.formActions}>
                      <button
                        type="button"
                        onClick={addCertification}
                        className={styles.addButton}
                        disabled={!currentCertification.name.trim()}
                      >
                        <FiPlus />
                        {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                      </button>
                      {currentCertification.isEditing && (
                        <button
                          type="button"
                          onClick={() => setCurrentCertification(defaultCertification())}
                          className={styles.cancelButton}
                        >
                          <FiX />
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).certifications.length === 0 ? (
                      <p className={styles.emptyMessage}>No certifications added yet</p>
                    ) : (
                      getDataByPage(currentPage).certifications.map((cert, index) => {
                        const globalIndex = formData.certifications.findIndex(c =>
                          c.name === cert.name && c.page === currentPage
                        );
                        return (
                          <div key={index} className={styles.listItem}>
                            <div className={styles.itemInfo}>
                              <span className={styles.itemTitle}>{cert.name}</span>
                              <span className={styles.pageBadge}>Page {cert.page}</span>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editCertification(globalIndex)} className={styles.editButton} title="Edit">
                                <FiEdit2 />
                              </button>
                              <button onClick={() => deleteCertification(globalIndex)} className={styles.deleteButton} title="Delete">
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Languages - Page {currentPage}</h4>
                  <div className={styles.skillsInput}>
                    <input
                      value={currentLanguage.name}
                      onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })}
                      placeholder="Enter a language"
                      className={styles.formInput}
                    />
                    <div className={styles.formActions}>
                      <button
                        type="button"
                        onClick={addLanguage}
                        className={styles.addButton}
                        disabled={!currentLanguage.name.trim()}
                      >
                        <FiPlus />
                        {currentLanguage.isEditing ? 'Update Language' : 'Add Language'}
                      </button>
                      {currentLanguage.isEditing && (
                        <button
                          type="button"
                          onClick={() => setCurrentLanguage(defaultLanguage())}
                          className={styles.cancelButton}
                        >
                          <FiX />
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  <div className={styles.itemsList}>
                    {getDataByPage(currentPage).languages.length === 0 ? (
                      <p className={styles.emptyMessage}>No languages added yet</p>
                    ) : (
                      getDataByPage(currentPage).languages.map((lang, index) => {
                        const globalIndex = formData.languages.findIndex(l =>
                          l.name === lang.name && l.page === currentPage
                        );
                        return (
                          <div key={index} className={styles.listItem}>
                            <div className={styles.itemInfo}>
                              <span className={styles.itemTitle}>{lang.name}</span>
                              <span className={styles.pageBadge}>Page {lang.page}</span>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editLanguage(globalIndex)} className={styles.editButton} title="Edit">
                                <FiEdit2 />
                              </button>
                              <button onClick={() => deleteLanguage(globalIndex)} className={styles.deleteButton} title="Delete">
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
                <div className={styles.formCard}>
                  <h4 className={styles.subSectionTitle}>Your Skills on Page {currentPage}</h4>
                  {getDataByPage(currentPage).skills.length === 0 ? (
                    <p className={styles.emptyMessage}>No skills added yet</p>
                  ) : (
                    <div className={styles.itemsList}>
                      {getDataByPage(currentPage).skills.map((skill, index) => {
                        const globalIndex = formData.skills.findIndex(s =>
                          s.name === skill.name && s.page === currentPage
                        );
                        return (
                          <div key={index} className={styles.listItem}>
                            <div className={styles.itemInfo}>
                              <span className={styles.itemTitle}>{skill.name}</span>
                              <span className={styles.pageBadge}>Page {skill.page}</span>
                            </div>
                            <div className={styles.itemActions}>
                              <button onClick={() => editSkill(globalIndex)} className={styles.editButton} title="Edit">
                                <FiEdit2 />
                              </button>
                              <button onClick={() => deleteSkill(globalIndex)} className={styles.deleteButton} title="Delete">
                                <FiTrash2 />
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
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
              <h3>Full Resume Preview</h3>
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

export default ResumeApex;