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
import styles from './Resume.module.css';

const Resume = () => {
  // Default functions
  const defaultExperience = () => ({
    company: '',
    position: '',
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
  const defaultSkill = () => ({
    name: '',
    isEditing: false,
    editIndex: null,
    page: 1
  });
  const defaultCertification = () => ({
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
  const defaultProject = () => ({
    name: '',
    description: '',
    technologies: '',
    isEditing: false,
    editIndex: null,
    page: 1
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

  const [selectedTemplate, setSelectedTemplate] = useState('elegant');
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

  const formatSocialUrl = (url) => {
    if (!url) return '';
    return url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Check if page has content
  const pageHasContent = (pageNumber) => {
    if (pageNumber === 1) {
      if (formData.fullName || formData.email || formData.summary || formData.socialLinks.length > 0) {
        return true;
      }
    }
    const pageData = getDataByPage(pageNumber);
    return (
      pageData.experience.length > 0 ||
      pageData.education.length > 0 ||
      pageData.skills.length > 0 ||
      pageData.certifications.length > 0 ||
      pageData.languages.length > 0 ||
      pageData.projects.length > 0
    );
  };

  // Get pages that actually have content
  const getPagesWithContent = () => {
    const pagesWithContent = [];
    for (let i = 1; i <= totalPages; i++) {
      if (pageHasContent(i)) {
        pagesWithContent.push(i);
      }
    }
    return pagesWithContent;
  };

  // Page management functions
  const addNewPage = () => {
    if (totalPages < 5) {
      setTotalPages(totalPages + 1);
      setCurrentPage(totalPages + 1);
    }
  };

  const removeLastPage = () => {
    if (totalPages > 1) {
      const lastPage = totalPages;
      const updatedExperience = formData.experience.map(exp => 
        exp.page === lastPage ? { ...exp, page: lastPage - 1 } : exp
      );
      const updatedEducation = formData.education.map(edu => 
        edu.page === lastPage ? { ...edu, page: lastPage - 1 } : edu
      );
      const updatedProjects = formData.projects.map(proj => 
        proj.page === lastPage ? { ...proj, page: lastPage - 1 } : proj
      );
      const updatedSkills = formData.skills.map(skill => 
        skill.page === lastPage ? { ...skill, page: lastPage - 1 } : skill
      );
      const updatedCertifications = formData.certifications.map(cert => 
        cert.page === lastPage ? { ...cert, page: lastPage - 1 } : cert
      );
      const updatedLanguages = formData.languages.map(lang => 
        lang.page === lastPage ? { ...lang, page: lastPage - 1 } : lang
      );
      setFormData({
        ...formData,
        experience: updatedExperience,
        education: updatedEducation,
        projects: updatedProjects,
        skills: updatedSkills,
        certifications: updatedCertifications,
        languages: updatedLanguages
      });
      setTotalPages(totalPages - 1);
      if (currentPage > totalPages - 1) {
        setCurrentPage(totalPages - 1);
      }
    }
  };

  // Experience functions
  const addExperience = () => {
    if (currentExperience.company && currentExperience.position && currentExperience.startDate && currentExperience.description) {
      const experienceWithPage = {
        ...currentExperience,
        page: currentPage
      };
      if (currentExperience.isEditing) {
        const updatedExperience = [...formData.experience];
        updatedExperience[currentExperience.editIndex] = {
          company: experienceWithPage.company,
          position: experienceWithPage.position,
          startDate: experienceWithPage.startDate,
          endDate: experienceWithPage.endDate,
          description: experienceWithPage.description,
          page: experienceWithPage.page
        };
        setFormData({
          ...formData,
          experience: updatedExperience
        });
      } else {
        setFormData({
          ...formData,
          experience: [...formData.experience, {
            company: experienceWithPage.company,
            position: experienceWithPage.position,
            startDate: experienceWithPage.startDate,
            endDate: experienceWithPage.endDate,
            description: experienceWithPage.description,
            page: experienceWithPage.page
          }]
        });
      }
      setCurrentExperience(defaultExperience());
    }
  };

  const editExperience = (index) => {
    const exp = formData.experience[index];
    setCurrentExperience({
      company: exp.company,
      position: exp.position,
      startDate: exp.startDate,
      endDate: exp.endDate,
      description: exp.description,
      isEditing: true,
      editIndex: index,
      page: exp.page
    });
    setCurrentPage(exp.page);
  };

  const deleteExperience = (index) => {
    const newExperience = [...formData.experience];
    newExperience.splice(index, 1);
    setFormData({
      ...formData,
      experience: newExperience
    });
  };

  // Education functions
  const addEducation = () => {
    if (currentEducation.institution && currentEducation.degree) {
      const educationWithPage = {
        ...currentEducation,
        page: currentPage
      };
      if (currentEducation.isEditing) {
        const updatedEducation = [...formData.education];
        updatedEducation[currentEducation.editIndex] = {
          institution: educationWithPage.institution,
          degree: educationWithPage.degree,
          field: educationWithPage.field,
          startDate: educationWithPage.startDate,
          endDate: educationWithPage.endDate,
          page: educationWithPage.page
        };
        setFormData({
          ...formData,
          education: updatedEducation
        });
      } else {
        setFormData({
          ...formData,
          education: [...formData.education, {
            institution: educationWithPage.institution,
            degree: educationWithPage.degree,
            field: educationWithPage.field,
            startDate: educationWithPage.startDate,
            endDate: educationWithPage.endDate,
            page: educationWithPage.page
          }]
        });
      }
      setCurrentEducation(defaultEducation());
    }
  };

  const editEducation = (index) => {
    const edu = formData.education[index];
    setCurrentEducation({
      institution: edu.institution,
      degree: edu.degree,
      field: edu.field,
      startDate: edu.startDate,
      endDate: edu.endDate,
      isEditing: true,
      editIndex: index,
      page: edu.page
    });
    setCurrentPage(edu.page);
  };

  const deleteEducation = (index) => {
    const newEducation = [...formData.education];
    newEducation.splice(index, 1);
    setFormData({
      ...formData,
      education: newEducation
    });
  };

  // Skill functions
  const addSkill = () => {
    if (currentSkill.name.trim()) {
      const skillWithPage = {
        ...currentSkill,
        page: currentPage
      };
      if (currentSkill.isEditing) {
        const updatedSkills = [...formData.skills];
        updatedSkills[currentSkill.editIndex] = {
          name: skillWithPage.name.trim(),
          page: skillWithPage.page
        };
        setFormData({
          ...formData,
          skills: updatedSkills
        });
      } else {
        setFormData({
          ...formData,
          skills: [...formData.skills, {
            name: skillWithPage.name.trim(),
            page: skillWithPage.page
          }]
        });
      }
      setCurrentSkill(defaultSkill());
    }
  };

  const editSkill = (index) => {
    const skill = formData.skills[index];
    setCurrentSkill({
      name: skill.name,
      isEditing: true,
      editIndex: index,
      page: skill.page
    });
    setCurrentPage(skill.page);
  };

  const deleteSkill = (index) => {
    const newSkills = [...formData.skills];
    newSkills.splice(index, 1);
    setFormData({
      ...formData,
      skills: newSkills
    });
  };

  // Certification functions
  const addCertification = () => {
    if (currentCertification.name.trim()) {
      const certificationWithPage = {
        ...currentCertification,
        page: currentPage
      };
      if (currentCertification.isEditing) {
        const updatedCertifications = [...formData.certifications];
        updatedCertifications[currentCertification.editIndex] = {
          name: certificationWithPage.name.trim(),
          page: certificationWithPage.page
        };
        setFormData({
          ...formData,
          certifications: updatedCertifications
        });
      } else {
        setFormData({
          ...formData,
          certifications: [...formData.certifications, {
            name: certificationWithPage.name.trim(),
            page: certificationWithPage.page
          }]
        });
      }
      setCurrentCertification(defaultCertification());
    }
  };

  const editCertification = (index) => {
    const cert = formData.certifications[index];
    setCurrentCertification({
      name: cert.name,
      isEditing: true,
      editIndex: index,
      page: cert.page
    });
    setCurrentPage(cert.page);
  };

  const deleteCertification = (index) => {
    const newCertifications = [...formData.certifications];
    newCertifications.splice(index, 1);
    setFormData({
      ...formData,
      certifications: newCertifications
    });
  };

  // Language functions
  const addLanguage = () => {
    if (currentLanguage.name.trim()) {
      const languageWithPage = {
        ...currentLanguage,
        page: currentPage
      };
      if (currentLanguage.isEditing) {
        const updatedLanguages = [...formData.languages];
        updatedLanguages[currentLanguage.editIndex] = {
          name: languageWithPage.name.trim(),
          page: languageWithPage.page
        };
        setFormData({
          ...formData,
          languages: updatedLanguages
        });
      } else {
        setFormData({
          ...formData,
          languages: [...formData.languages, {
            name: languageWithPage.name.trim(),
            page: languageWithPage.page
          }]
        });
      }
      setCurrentLanguage(defaultLanguage());
    }
  };

  const editLanguage = (index) => {
    const lang = formData.languages[index];
    setCurrentLanguage({
      name: lang.name,
      isEditing: true,
      editIndex: index,
      page: lang.page
    });
    setCurrentPage(lang.page);
  };

  const deleteLanguage = (index) => {
    const newLanguages = [...formData.languages];
    newLanguages.splice(index, 1);
    setFormData({
      ...formData,
      languages: newLanguages
    });
  };

  // Social Link functions
  const addSocialLink = () => {
    if (currentSocialLink.platform && currentSocialLink.url) {
      let url = currentSocialLink.url;
      if (!url.match(/^https?:\/\//)) {
        url = `https://${url}`;
      }
      if (currentSocialLink.isEditing) {
        const updatedSocialLinks = [...formData.socialLinks];
        updatedSocialLinks[currentSocialLink.editIndex] = {
          platform: currentSocialLink.platform,
          url: url
        };
        setFormData({
          ...formData,
          socialLinks: updatedSocialLinks
        });
      } else {
        setFormData({
          ...formData,
          socialLinks: [...formData.socialLinks, {
            platform: currentSocialLink.platform,
            url: url
          }]
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
    const newSocialLinks = [...formData.socialLinks];
    newSocialLinks.splice(index, 1);
    setFormData({
      ...formData,
      socialLinks: newSocialLinks
    });
  };

  // Project functions
  const addProject = () => {
    if (currentProject.name && currentProject.description) {
      const projectWithPage = {
        ...currentProject,
        page: currentPage
      };
      if (currentProject.isEditing) {
        const updatedProjects = [...formData.projects];
        updatedProjects[currentProject.editIndex] = {
          name: projectWithPage.name,
          description: projectWithPage.description,
          technologies: projectWithPage.technologies,
          page: projectWithPage.page
        };
        setFormData({
          ...formData,
          projects: updatedProjects
        });
      } else {
        setFormData({
          ...formData,
          projects: [...formData.projects, {
            name: projectWithPage.name,
            description: projectWithPage.description,
            technologies: projectWithPage.technologies,
            page: projectWithPage.page
          }]
        });
      }
      setCurrentProject(defaultProject());
    }
  };

  const editProject = (index) => {
    const project = formData.projects[index];
    setCurrentProject({
      name: project.name,
      description: project.description,
      technologies: project.technologies,
      isEditing: true,
      editIndex: index,
      page: project.page
    });
    setCurrentPage(project.page);
  };

  const deleteProject = (index) => {
    const newProjects = [...formData.projects];
    newProjects.splice(index, 1);
    setFormData({
      ...formData,
      projects: newProjects
    });
  };

  // Filter data by page
  const getDataByPage = (page) => {
    return {
      experience: formData.experience.filter(exp => exp.page === page),
      education: formData.education.filter(edu => edu.page === page),
      skills: formData.skills.filter(skill => skill.page === page),
      certifications: formData.certifications.filter(cert => cert.page === page),
      languages: formData.languages.filter(lang => lang.page === page),
      projects: formData.projects.filter(proj => proj.page === page)
    };
  };

  // Generate PDF - ENHANCED: Super sharp PDF generation
  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true
      });
      const pagesWithContent = getPagesWithContent();
      if (pagesWithContent.length === 0) {
        alert("Please add some content to your resume before generating PDF.");
        setIsGeneratingPDF(false);
        return;
      }
      const originalStates = [];
      for (let i = 0; i < pagesWithContent.length; i++) {
        const pageNum = pagesWithContent[i];
        const element = resumeRefs[pageNum - 1]?.current;
        if (!element) continue;
        originalStates[pageNum - 1] = {
          display: element.style.display,
          position: element.style.position,
          width: element.style.width,
          height: element.style.height,
          transform: element.style.transform
        };
        element.style.display = 'block';
        element.style.position = 'fixed';
        element.style.left = '0';
        element.style.top = '0';
        element.style.width = '210mm';
        element.style.height = '297mm';
        element.style.transform = 'none';
        element.style.zIndex = '9999';
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        element.style.background = '#ffffff';
        element.style.color = '#000000';
        await new Promise(resolve => setTimeout(resolve, 300));
        try {
          const canvas = await html2canvas(element, {
            scale: 3,
            useCORS: true,
            allowTaint: false,
            logging: false,
            backgroundColor: '#ffffff',
            width: 210 * 3.7795275591,
            height: 297 * 3.7795275591,
            onclone: (clonedDoc) => {
              const clonedElement = clonedDoc.querySelector(`.${styles.resumePreview}`);
              if (clonedElement) {
                clonedElement.style.display = 'block';
                clonedElement.style.visibility = 'visible';
                clonedElement.style.opacity = '1';
                clonedElement.style.width = '210mm';
                clonedElement.style.height = '297mm';
                clonedElement.style.transform = 'none';
                clonedElement.style.background = '#ffffff';
                clonedElement.style.color = '#000000';
                const allElements = clonedElement.querySelectorAll('*');
                allElements.forEach(el => {
                  el.style.color = '#000000';
                  el.style.fontFamily = "'Helvetica', 'Arial', sans-serif";
                });
              }
            }
          });
          const imgData = canvas.toDataURL('image/png', 1.0);
          const imgWidth = 210;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          if (i > 0) pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
        } catch (err) {
          console.error('Canvas error:', err);
        }
      }
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        const element = resumeRefs[pageNum - 1]?.current;
        const originalState = originalStates[pageNum - 1];
        if (element && originalState) {
          element.style.display = originalState.display;
          element.style.position = originalState.position;
          element.style.width = originalState.width;
          element.style.height = originalState.height;
          element.style.transform = originalState.transform;
          element.style.zIndex = '';
          element.style.visibility = '';
          element.style.opacity = '';
          element.style.background = '';
          element.style.color = '';
        }
      }
      const fileName = `${formData.fullName || 'resume'}_resume.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error("PDF Error:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // ✅ CLEANED ELEGANT TEMPLATE — NO NUMBERING LOGIC
  const ElegantTemplate = ({ formData, pageData, pageNumber, totalPages }) => {
    const hasSummary = pageNumber === 1 && formData.summary;
    const hasExperience = pageData.experience.length > 0;
    const hasProjects = pageData.projects.length > 0;
    const hasEducation = pageData.education.length > 0;
    const hasSkills = pageData.skills.length > 0;
    const hasCertifications = pageData.certifications.length > 0;
    const hasLanguages = pageData.languages.length > 0;

    return (
      <div className={styles.elegantTemplate}>
        {/* Header only on first page */}
        {pageNumber === 1 && (
          <header className={styles.resumeHeader}>
            <h1 className={styles.name}>{formData.fullName || 'Your Name'}</h1>
            <div className={styles.contactInfoRow}>
              {formData.email && (
                <div className={styles.contactInfoItem}>
                  <FiMail /> {formData.email}
                </div>
              )}
              {(formData.email && (formData.phone || formData.address || formData.socialLinks.length > 0)) && (
                <div className={styles.contactSeparator}>•</div>
              )}
              {formData.phone && (
                <div className={styles.contactInfoItem}>
                  <FiPhone /> {formData.phone}
                </div>
              )}
              {(formData.phone && (formData.address || formData.socialLinks.length > 0)) && (
                <div className={styles.contactSeparator}>•</div>
              )}
              {formData.address && (
                <div className={styles.contactInfoItem}>
                  <FiMapPin /> {formData.address}
                </div>
              )}
              {(formData.address && formData.socialLinks.length > 0) && (
                <div className={styles.contactSeparator}>•</div>
              )}
              {formData.socialLinks.map((link, index) => (
                <div key={index} className={styles.contactInfoItem}>
                  {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
                </div>
              ))}
            </div>
          </header>
        )}

        {/* Summary */}
        {hasSummary && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL SUMMARY</h2>
            <div className={styles.sectionContent}>
              <p className={styles.summaryText}>{formData.summary}</p>
            </div>
          </section>
        )}

        {/* Experience */}
        {hasExperience && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</h2>
            <div className={styles.sectionContent}>
              {pageData.experience.map((exp, index) => (
                <div key={index} className={styles.experienceItem}>
                  <div className={styles.experienceHeader}>
                    <h3>{exp.position}</h3>
                    <p className={styles.company}>{exp.company} | {exp.startDate} - {exp.endDate || 'Present'}</p>
                  </div>
                  <ul className={styles.bulletList}>
                    {exp.description.split('\n').map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {hasProjects && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>PROJECTS</h2>
            <div className={styles.sectionContent}>
              {pageData.projects.map((project, index) => (
                <div key={index} className={styles.projectItem}>
                  <h3>{project.name} {project.technologies && `| ${project.technologies}`}</h3>
                  <ul className={styles.bulletList}>
                    {project.description.split('\n').map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {hasEducation && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>EDUCATION</h2>
            <div className={styles.sectionContent}>
              {pageData.education.map((edu, index) => (
                <div key={index} className={styles.educationItem}>
                  <h3>{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                  <p className={styles.institution}>{edu.institution} | {edu.startDate} - {edu.endDate || 'Present'}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {hasSkills && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>SKILLS</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.skillsList}>
                {pageData.skills.map((skill, index) => (
                  <li key={index}>{skill.name}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Certifications */}
        {hasCertifications && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>CERTIFICATIONS</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.certifications.map((cert, index) => (
                  <li key={index}>{cert.name}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Languages */}
        {hasLanguages && (
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>LANGUAGES</h2>
            <div className={styles.sectionContent}>
              <ul className={styles.bulletList}>
                {pageData.languages.map((lang, index) => (
                  <li key={index}>{lang.name}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Page indicator */}
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
    return <ElegantTemplate formData={formData} pageData={pageData} pageNumber={pageNumber} totalPages={totalPages} />;
  };

  const actualPagesWithContent = getPagesWithContent().length;

  return (
    <div className={styles.resumeBuilder}>
      <Head>
        <title>Professional Resume Builder | Create ATS-Friendly Resumes</title>
        <meta name="description" content="Create professional, ATS-friendly resumes with our free resume builder. Download as PDF and land your dream job." />
        <meta name="keywords" content="resume builder, professional resume, ATS resume, free resume template, job search, career, CV builder" />
        <link rel="canonical" href="https://www.professionalresumefree.com/free-resume-builder" />
      </Head>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Create Your Professional <span className={styles.gradientText}>Resume</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Build an ATS-friendly resume that gets you noticed by employers. 
              Choose from professional templates and download as PDF.
            </p>
          </div>
        </div>
      </section>

      {/* Single Column Layout */}
      <div className={styles.singleColumnLayout}>
        {/* Preview Section */}
        <div className={styles.previewSection}>
          <div className={styles.previewHeader}>
            <div className={styles.previewActions}>
              <button 
                onClick={() => setShowFullPreview(!showFullPreview)}
                className={styles.previewButton}
              >
                <FiEye />
                {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
              </button>
              <button 
                onClick={generatePDF} 
                className={styles.downloadButton}
                disabled={isGeneratingPDF || getPagesWithContent().length === 0}
              >
                <FiDownload />
                {isGeneratingPDF ? 'Generating PDF...' : `Download PDF (${actualPagesWithContent} page${actualPagesWithContent !== 1 ? 's' : ''})`}
              </button>
              <div className={styles.templateSelector}>
                <label>Template:</label>
                <select 
                  value={selectedTemplate} 
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className={styles.formSelect}
                >
                  <option value="elegant">Elegant</option>
                </select>
              </div>
            </div>
          </div>
          <div className={`${styles.previewContainer} ${showFullPreview ? styles.fullPreview : ''}`}>
            <div className={styles.resumePreviewCard}>
              <div className={styles.previewContent}>
                {Array.from({ length: totalPages }, (_, index) => (
                  <div 
                    key={index + 1} 
                    className={`${styles.resumePreview} ${currentPage === index + 1 ? styles.activePreview : styles.inactivePreview}`}
                    ref={resumeRefs[index]}
                  >
                    {renderTemplate(index + 1)}
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
              <FiChevronLeft />
              Previous Page
            </button>
            <div className={styles.previewPageInfo}>
              Page {currentPage} of {totalPages}
              {actualPagesWithContent > 0 && (
                <span className={styles.contentPagesInfo}>
                  ({actualPagesWithContent} with content)
                </span>
              )}
            </div>
            <button 
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className={styles.previewNavButton}
            >
              Next Page
              <FiChevronRight />
            </button>
          </div>
        </div>

        {/* Form Section */}
        <div className={styles.formSection}>
          {/* Page Management */}
          <div className={styles.pageManagement}>
            <div className={styles.pageControls}>
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                <FiChevronLeft />
                Previous
              </button>
              <div className={styles.pageInfo}>
                Page {currentPage} of {totalPages} 
                {actualPagesWithContent > 0 && (
                  <span className={styles.contentPagesInfo}>
                    ({actualPagesWithContent} with content)
                  </span>
                )}
              </div>
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                Next
                <FiChevronRight />
              </button>
            </div>
            <div className={styles.pageActions}>
              {totalPages < 5 && (
                <button onClick={addNewPage} className={styles.addPageButton}>
                  <FiPlus />
                  Add Page
                </button>
              )}
              {totalPages > 1 && (
                <button onClick={removeLastPage} className={styles.removePageButton}>
                  <FiX />
                  Remove Last Page
                </button>
              )}
            </div>
          </div>

          {/* Form Navigation */}
          <div className={styles.formNavigation}>
            {[
              { id: 'personal', label: 'Personal', icon: <FiUser /> },
              { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
              { id: 'projects', label: 'Projects', icon: <FiGitBranch /> },
              { id: 'education', label: 'Education', icon: <FiBook /> },
              { id: 'skills', label: 'Skills', icon: <FiCode /> },
            ].map((item) => (
              <button
                key={item.id}
                className={`${styles.navButton} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className={styles.formContent}>
            {/* Personal Information */}
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
              <button 
                className={styles.closeButton}
                onClick={() => setShowFullPreview(false)}
              >
                <FiX />
              </button>
            </div>
            <div className={styles.fullPreviewPages}>
              {Array.from({ length: totalPages }, (_, index) => (
                <div 
                  key={index + 1} 
                  className={styles.fullPreviewPage}
                >
                  {renderTemplate(index + 1)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resume;