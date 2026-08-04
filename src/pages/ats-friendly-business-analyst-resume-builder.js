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
  FiBarChart,
  FiTarget,
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
  FiTool,
  FiTrendingUp,
  FiSearch,
  FiLayers,
  FiDollarSign,
  FiDatabase,
  FiPieChart,
  FiUsers,
  FiCode,
  FiMonitor,
  FiTruck,
  FiHeart,
  FiShoppingBag,
  FiActivity,
  FiCpu,
  FiGrid,
  FiZap
} from 'react-icons/fi';
import Link from 'next/link';

const careerFlowStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  :root {
    --cf-background: #131315;
    --cf-surface: #131315;
    --cf-surface-dim: #131315;
    --cf-surface-bright: #39393b;
    --cf-surface-container: #201f21;
    --cf-surface-container-low: #1c1b1d;
    --cf-surface-container-lowest: #0e0e10;
    --cf-surface-container-high: #2a2a2c;
    --cf-surface-container-highest: #353437;
    --cf-surface-variant: #353437;
    --cf-on-background: #e5e1e4;
    --cf-on-surface: #e5e1e4;
    --cf-on-surface-variant: #d0c5af;
    --cf-primary: #f2ca50;
    --cf-primary-container: #d4af37;
    --cf-on-primary: #3c2f00;
    --cf-on-primary-container: #554300;
    --cf-primary-fixed: #ffe088;
    --cf-primary-fixed-dim: #e9c349;
    --cf-secondary: #c8c6c3;
    --cf-secondary-container: #474744;
    --cf-on-secondary: #30312e;
    --cf-on-secondary-container: #b6b5b1;
    --cf-tertiary: #d0cdd3;
    --cf-tertiary-container: #b4b2b7;
    --cf-on-tertiary: #303034;
    --cf-on-tertiary-container: #454449;
    --cf-outline: #99907c;
    --cf-outline-variant: #4d4635;
    --cf-error: #ffb4ab;
    --cf-on-error: #690005;
    --cf-error-container: #93000a;
    --cf-on-error-container: #ffdad6;
    --cf-inverse-surface: #e5e1e4;
    --cf-inverse-on-surface: #313032;
    --cf-inverse-primary: #735c00;
    --cf-surface-tint: #e9c349;
    --cf-secondary-fixed: #e4e2de;
    --cf-secondary-fixed-dim: #c8c6c3;
    --cf-on-secondary-fixed: #1b1c1a;
    --cf-on-secondary-fixed-variant: #474744;
    --cf-tertiary-fixed: #e4e1e7;
    --cf-tertiary-fixed-dim: #c8c5cb;
    --cf-on-tertiary-fixed: #1b1b1f;
    --cf-on-tertiary-fixed-variant: #47464b;
    --cf-gutter: 32px;
    --cf-section-gap: 120px;
    --cf-margin-desktop: 64px;
    --cf-margin-mobile: 24px;
    --cf-container-max: 1280px;
    --cf-unit: 8px;
    --cf-font-display: 'Playfair Display', Georgia, serif;
    --cf-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --cf-glass-bg: rgba(20, 19, 21, 0.7);
    --cf-glass-blur: blur(20px);
    --cf-gold-border: 0.5px solid rgba(212, 175, 55, 0.3);
    --cf-gold-border-strong: 0.5px solid rgba(212, 175, 55, 0.4);
    --cf-gold-glow: 0 0 15px rgba(242, 202, 80, 0.3);
    --cf-shadow-nav: 0px 24px 48px rgba(0, 0, 0, 0.8);
    --cf-transition-fast: 200ms ease;
    --cf-transition-base: 300ms ease;
    --cf-transition-slow: 500ms ease;
    --cf-transition-image: 700ms ease;
  }

  @keyframes pulse {
    0% { width: 0; height: 0; opacity: 0.5; }
    100% { width: 300px; height: 300px; opacity: 0; }
  }

  @keyframes modalSlideIn {
    from { opacity: 0; transform: translateY(-20px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  * { box-sizing: border-box; }

  body {
    background-color: #131315 !important;
    margin: 0;
    padding: 0;
  }

  .cf-resume-builder {
    background-color: #131315 !important;
    color: var(--cf-on-background);
    font-family: var(--cf-font-body);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .cf-resume-builder * { box-sizing: border-box; }
  .cf-resume-builder ::selection { background: rgba(242, 202, 80, 0.3); color: var(--cf-on-background); }
  .cf-container { width: 100%; max-width: var(--cf-container-max); margin: 0 auto; padding: 0 var(--cf-margin-desktop); box-sizing: border-box; }
  .cf-freshness-indicator { display: none; }

  .cf-navbar { position: fixed; top: 0; width: 100%; background: rgba(19, 19, 21, 0.8); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-bottom: 0.5px solid rgba(212, 175, 55, 0.3); box-shadow: var(--cf-shadow-nav); z-index: 50; }
  .cf-navbar-inner { display: flex; justify-content: space-between; align-items: center; padding: 24px var(--cf-margin-desktop); max-width: var(--cf-container-max); margin: 0 auto; }
  .cf-logo { font-family: var(--cf-font-display); font-size: 24px; font-weight: 600; letter-spacing: -0.02em; color: var(--cf-primary); text-decoration: none; }
  .cf-nav-links { display: none; gap: 40px; }
  .cf-nav-link { font-family: var(--cf-font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cf-on-surface-variant); text-decoration: none; transition: color var(--cf-transition-base); }
  .cf-nav-link:hover, .cf-nav-link-active { color: var(--cf-primary); }
  .cf-nav-link-active { border-bottom: 1px solid var(--cf-primary); padding-bottom: 4px; }
  .cf-nav-actions { display: flex; align-items: center; gap: 24px; }
  .cf-nav-login { font-family: var(--cf-font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cf-on-surface-variant); text-decoration: none; transition: color var(--cf-transition-base); display: none; }
  .cf-nav-login:hover { color: var(--cf-primary); }
  .cf-nav-cta { background: var(--cf-primary); color: var(--cf-on-primary); font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; padding: 10px 24px; border: none; border-radius: 2px; cursor: pointer; transition: all var(--cf-transition-base); text-decoration: none; display: inline-flex; align-items: center; gap: 8px; white-space: nowrap; }
  .cf-nav-cta:hover { box-shadow: 0 0 20px rgba(242, 202, 80, 0.4); transform: translateY(-1px); }
  .cf-mobile-toggle { display: flex; align-items: center; justify-content: center; background: none; border: 1px solid rgba(212, 175, 55, 0.3); color: var(--cf-primary); width: 40px; height: 40px; border-radius: 4px; cursor: pointer; font-size: 24px; transition: all var(--cf-transition-base); }
  .cf-mobile-toggle:hover { background: rgba(242, 202, 80, 0.1); }
  .cf-mobile-menu { display: none; flex-direction: column; background: rgba(19, 19, 21, 0.95); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border-bottom: 0.5px solid rgba(212, 175, 55, 0.3); padding: 16px var(--cf-margin-mobile); gap: 12px; }
  .cf-mobile-menu-open { display: flex; }
  .cf-mobile-nav-link { font-family: var(--cf-font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cf-on-surface-variant); text-decoration: none; padding: 12px 16px; border-radius: 4px; transition: all var(--cf-transition-base); }
  .cf-mobile-nav-link:hover, .cf-mobile-nav-link-active { color: var(--cf-primary); background: rgba(242, 202, 80, 0.05); }

  .cf-breadcrumb { background: var(--cf-surface-container-lowest); padding: 16px 0; border-bottom: 0.5px solid var(--cf-outline-variant); }
  .cf-breadcrumb ol { display: flex; align-items: center; list-style: none; margin: 0; padding: 0 var(--cf-margin-desktop); flex-wrap: wrap; max-width: var(--cf-container-max); margin-left: auto; margin-right: auto; }
  .cf-breadcrumb li { display: flex; align-items: center; }
  .cf-breadcrumb-separator { margin: 0 8px; color: var(--cf-outline); }
  .cf-breadcrumb-link { display: flex; align-items: center; gap: 6px; color: var(--cf-on-surface-variant); text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; transition: color var(--cf-transition-fast); text-transform: uppercase; }
  .cf-breadcrumb-link:hover { color: var(--cf-primary); }
  .cf-breadcrumb-icon { font-size: 14px; }
  .cf-breadcrumb-text { white-space: nowrap; }

  .cf-hero { padding: 120px 0 80px; background: #131315; text-align: center; position: relative; overflow: hidden; min-height: 70vh; display: flex; align-items: center; }
  .cf-hero::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(ellipse at center, rgba(242, 202, 80, 0.03) 0%, transparent 70%); pointer-events: none; }
  .cf-hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
  .cf-trust-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(242, 202, 80, 0.08); padding: 8px 20px; border-radius: 50px; margin-bottom: 32px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .cf-trust-icon { color: var(--cf-primary); font-size: 16px; }
  .cf-trust-text { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cf-primary); }
  .cf-hero-title { font-family: var(--cf-font-display); font-size: 64px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: var(--cf-on-background); margin: 0 0 24px; }
  .cf-gradient-text { background: linear-gradient(135deg, var(--cf-primary) 0%, #f7d96a 50%, var(--cf-primary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: var(--cf-gold-glow); font-style: italic; }
  .cf-hero-subtitle { font-family: var(--cf-font-body); font-size: 18px; font-weight: 400; line-height: 1.6; color: var(--cf-on-surface-variant); margin: 0 auto 40px; max-width: 650px; }
  .cf-hero-highlight { color: var(--cf-primary); font-weight: 600; }
  .cf-cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
  .cf-btn-primary { display: inline-flex; align-items: center; gap: 12px; background: var(--cf-primary); color: var(--cf-on-primary); border: none; padding: 16px 40px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); text-decoration: none; position: relative; overflow: hidden; }
  .cf-btn-primary:hover { filter: brightness(1.1); box-shadow: 0 0 25px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .cf-btn-text { position: relative; z-index: 1; }
  .cf-btn-icon { font-size: 18px; transition: transform var(--cf-transition-base); }
  .cf-btn-primary:hover .cf-btn-icon { transform: translateX(4px); }
  .cf-btn-pulse { position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background-color: rgba(255, 255, 255, 0.1); transform: translate(-50%, -50%); animation: pulse 2s infinite; }
  .cf-btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--cf-primary); border: var(--cf-gold-border-strong); padding: 16px 40px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); text-decoration: none; }
  .cf-btn-secondary:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .cf-btn-secondary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .cf-hero-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px; margin: 48px 0 0; padding: 0; }
  .cf-stat-item { display: flex; flex-direction: column; align-items: center; padding: 24px; background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; }
  .cf-stat-number { font-family: var(--cf-font-display); font-size: 2.5rem; font-weight: 700; color: var(--cf-primary); margin-bottom: 8px; }
  .cf-stat-label { font-family: var(--cf-font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--cf-on-surface-variant); text-align: center; }
  .cf-industry-badges { margin-top: 48px; }
  .cf-badge-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
  .cf-badge-item { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(242, 202, 80, 0.05); border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; font-family: var(--cf-font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cf-on-surface-variant); transition: all var(--cf-transition-base); justify-content: center; }
  .cf-badge-item:hover { border-color: rgba(212, 175, 55, 0.5); color: var(--cf-primary); background: rgba(242, 202, 80, 0.08); }

  .cf-layout { display: flex; flex-direction: column; gap: var(--cf-gutter); padding: 80px var(--cf-margin-desktop); max-width: var(--cf-container-max); margin: 0 auto; background: #131315; }
  .cf-preview-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .cf-preview-header { display: flex; flex-direction: column; gap: 16px; }
  .cf-preview-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  .cf-preview-btn, .cf-download-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none; transition: all var(--cf-transition-base); cursor: pointer; white-space: nowrap; min-height: 48px; }
  .cf-preview-btn { background: transparent; color: var(--cf-primary); border: var(--cf-gold-border-strong); }
  .cf-preview-btn:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .cf-download-btn { background: var(--cf-primary); color: var(--cf-on-primary); border: none; }
  .cf-download-btn:not(:disabled):hover { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .cf-download-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .cf-preview-container { background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); padding: 24px; border-radius: 4px; min-height: 500px; display: flex; justify-content: center; align-items: flex-start; overflow: auto; }
  .cf-full-preview { background: transparent; padding: 0; border: none; border-radius: 0; overflow: visible; }
  .cf-resume-card { width: 100%; display: flex; justify-content: center; }
  .cf-preview-content { position: relative; width: 100%; max-width: 210mm; min-height: 297mm; overflow: visible; }

  .cf-resume-preview { display: block; width: 210mm; min-height: 297mm; background: #ffffff; padding: 10mm 15mm; box-sizing: border-box; box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); border: 0.5px solid rgba(212, 175, 55, 0.3); color: #000000; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.25; }
  .cf-ba-template { color: #000000; line-height: 1.25; height: 100%; }
  .cf-resume-header { text-align: center; margin-bottom: 8pt; padding-bottom: 6pt; border-bottom: 0.5pt solid #000000; }
  .cf-resume-name { font-weight: 700; margin: 0 0 3pt; color: #000000; text-transform: uppercase; letter-spacing: 0.4pt; }
  .cf-professional-title { font-weight: 400; margin: 0 0 4pt; color: #333333; }
  .cf-contact-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 4pt; color: #495057; margin-top: 3pt; }
  .cf-contact-item { display: flex; align-items: center; gap: 2pt; }
  .cf-contact-separator { color: #adb5bd; }
  .cf-section { margin-bottom: 8pt; page-break-inside: avoid; }
  .cf-section-title { text-transform: uppercase; letter-spacing: 0.5pt; margin: 0 0 3pt; padding-bottom: 1pt; border-bottom: 0.5pt solid #000000; color: #000000; font-weight: 700; }
  .cf-summary-text { margin: 0; text-align: justify; line-height: 1.3; }
  .cf-experience-item, .cf-education-item { margin-bottom: 6pt; page-break-inside: avoid; }
  .cf-experience-header h3 { font-weight: 700; margin: 0 0 1.5pt; color: #000000; }
  .cf-company { color: #495057; margin: 0 0 3pt; font-style: italic; }
  .cf-institution-text { color: #495057; }
  .cf-institution-date { color: #6c757d; }
  .cf-bullet-list { margin: 3pt 0 0; padding-left: 8pt; list-style-type: disc; }
  .cf-bullet-list li { margin-bottom: 2pt; text-align: justify; line-height: 1.25; }
  .cf-skills-list { display: flex; flex-wrap: wrap; gap: 3pt; list-style: none; padding: 0; margin: 3pt 0 0; }
  .cf-skills-list li { background: #f8f9fa; padding: 1.5pt 4pt; border-radius: 1.5pt; border: 0.5pt solid #dee2e6; }
  .cf-cert-item, .cf-project-item { margin-bottom: 3pt; line-height: 1.25; }

  .cf-form-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .cf-form-nav { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px; background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; }
  .cf-nav-btn { display: flex; align-items: center; gap: 8px; padding: 12px 20px; border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; background: transparent; color: var(--cf-on-surface-variant); font-family: var(--cf-font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); white-space: nowrap; min-height: 48px; flex: 1; min-width: 100px; justify-content: center; }
  .cf-nav-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: rgba(212, 175, 55, 0.4); color: var(--cf-primary); }
  .cf-nav-btn-active { background: var(--cf-primary); border-color: var(--cf-primary); color: var(--cf-on-primary); }
  .cf-form-content { flex: 1; min-width: 0; overflow-y: auto; max-height: 600px; padding-right: 8px; }
  .cf-form-content::-webkit-scrollbar { width: 6px; }
  .cf-form-content::-webkit-scrollbar-track { background: var(--cf-surface-container-lowest); border-radius: 3px; }
  .cf-form-content::-webkit-scrollbar-thumb { background: var(--cf-outline-variant); border-radius: 3px; }
  .cf-form-content::-webkit-scrollbar-thumb:hover { background: var(--cf-outline); }
  .cf-form-section-content { display: flex; flex-direction: column; gap: 24px; }
  .cf-form-section-title { font-family: var(--cf-font-display); font-size: 24px; font-weight: 600; margin: 0 0 8px; color: var(--cf-on-background); display: flex; align-items: center; gap: 12px; }
  .cf-section-desc { color: var(--cf-on-surface-variant); font-family: var(--cf-font-body); font-size: 14px; margin: 0 0 16px; line-height: 1.6; }
  .cf-form-card { background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; padding: 24px; width: 100%; box-sizing: border-box; }
  .cf-form-group { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 20px; width: 100%; }
  .cf-form-label { display: flex; flex-direction: column; gap: 8px; font-family: var(--cf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cf-on-surface-variant); width: 100%; }
  .cf-form-input, .cf-form-textarea, .cf-form-select { padding: 14px 16px; border: 0.5px solid var(--cf-outline-variant); border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; color: var(--cf-on-background); background: rgba(14, 14, 16, 0.6); transition: all var(--cf-transition-base); width: 100%; box-sizing: border-box; min-width: 0; }
  .cf-form-input:focus, .cf-form-textarea:focus, .cf-form-select:focus { outline: none; border-color: var(--cf-primary); box-shadow: 0 0 0 2px rgba(242, 202, 80, 0.15); }
  .cf-form-input::placeholder, .cf-form-textarea::placeholder { color: var(--cf-outline); }
  .cf-form-textarea { resize: vertical; min-height: 120px; line-height: 1.5; }
  .cf-form-select { cursor: pointer; }
  .cf-form-select option { background: var(--cf-surface-container); color: var(--cf-on-background); }
  .cf-char-count { text-align: right; font-size: 11px; color: var(--cf-outline); margin-top: 8px; font-family: var(--cf-font-body); letter-spacing: 0.05em; }
  .cf-sub-section-title { font-family: var(--cf-font-display); font-size: 18px; font-weight: 600; margin: 0 0 16px; color: var(--cf-primary); display: flex; align-items: center; gap: 12px; }
  .cf-social-input, .cf-skills-input { display: flex; flex-direction: column; gap: 16px; width: 100%; }
  .cf-form-actions { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; align-items: center; width: 100%; }
  .cf-add-btn, .cf-cancel-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: all var(--cf-transition-base); min-height: 48px; flex-shrink: 0; }
  .cf-add-btn { background: var(--cf-primary); color: var(--cf-on-primary); border: none; }
  .cf-add-btn:hover:not(:disabled) { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .cf-add-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .cf-cancel-btn { background: transparent; color: var(--cf-on-surface-variant); border: 0.5px solid var(--cf-outline-variant); }
  .cf-cancel-btn:hover { background: rgba(255, 255, 255, 0.03); border-color: var(--cf-outline); transform: translateY(-2px); }
  .cf-items-list { margin-top: 24px; }
  .cf-empty-msg { color: var(--cf-outline); font-style: italic; margin: 0; padding: 20px; text-align: center; background: rgba(14, 14, 16, 0.4); border-radius: 2px; border: 1px dashed var(--cf-outline-variant); font-family: var(--cf-font-body); font-size: 14px; }
  .cf-list-item { display: flex; justify-content: space-between; align-items: flex-start; padding: 16px; border-bottom: 0.5px solid var(--cf-outline-variant); width: 100%; box-sizing: border-box; background: rgba(14, 14, 16, 0.3); border-radius: 2px; margin-bottom: 8px; }
  .cf-list-item:last-child { border-bottom: none; margin-bottom: 0; }
  .cf-item-info, .cf-item-content { flex: 1; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .cf-item-header { display: flex; flex-wrap: wrap; gap: 8px; align-items: baseline; }
  .cf-item-title { font-weight: 700; color: var(--cf-on-background); word-break: break-word; font-size: 16px; }
  .cf-item-subtitle { color: var(--cf-on-surface-variant); font-size: 14px; word-break: break-word; }
  .cf-item-meta { display: flex; gap: 16px; flex-wrap: wrap; color: var(--cf-outline); font-size: 12px; align-items: center; letter-spacing: 0.05em; }
  .cf-item-desc { margin-top: 8px; }
  .cf-bullet-point { margin: 4px 0; font-size: 14px; color: var(--cf-on-surface-variant); line-height: 1.5; }
  .cf-item-platform { font-weight: 600; color: var(--cf-primary); font-size: 14px; }
  .cf-item-url { color: var(--cf-on-surface-variant); font-size: 12px; word-break: break-all; }
  .cf-skill-cat { color: var(--cf-outline); font-size: 12px; }
  .cf-item-actions { display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0; }
  .cf-edit-btn, .cf-delete-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 2px; background: rgba(255, 255, 255, 0.03); color: var(--cf-on-surface-variant); border: 0.5px solid var(--cf-outline-variant); cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-edit-btn:hover { background: rgba(242, 202, 80, 0.1); border-color: var(--cf-primary); color: var(--cf-primary); transform: translateY(-2px); }
  .cf-delete-btn { color: var(--cf-error); border-color: rgba(255, 180, 171, 0.3); }
  .cf-delete-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--cf-error); transform: translateY(-2px); }

  .cf-font-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
  .cf-font-control { display: flex; flex-direction: column; gap: 12px; }
  .cf-font-label { display: flex; justify-content: space-between; align-items: center; font-family: var(--cf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--cf-on-surface-variant); }
  .cf-font-value { background: rgba(242, 202, 80, 0.1); padding: 4px 12px; border-radius: 20px; font-weight: 700; color: var(--cf-primary); font-size: 12px; min-width: 50px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .cf-font-slider { width: 100%; height: 4px; -webkit-appearance: none; appearance: none; background: var(--cf-outline-variant); border-radius: 2px; outline: none; }
  .cf-font-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--cf-primary); cursor: pointer; border: 2px solid var(--cf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .cf-font-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: var(--cf-primary); cursor: pointer; border: 2px solid var(--cf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .cf-reset-btn { display: block; width: 100%; padding: 14px 24px; background: transparent; color: var(--cf-on-surface-variant); border: 0.5px solid var(--cf-outline-variant); border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); text-align: center; }
  .cf-reset-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: var(--cf-primary); color: var(--cf-primary); }

  .cf-faq-section { padding: var(--cf-section-gap) var(--cf-margin-mobile); background: var(--cf-surface-container-lowest); border-top: 0.5px solid rgba(153, 144, 124, 0.1); border-bottom: 0.5px solid rgba(153, 144, 124, 0.1); }
  .cf-section-header { text-align: center; margin-bottom: 64px; }
  .cf-section-header h2 { font-family: var(--cf-font-display); font-size: 32px; font-weight: 600; color: var(--cf-on-background); margin: 0 0 16px; }
  .cf-section-header p { font-family: var(--cf-font-body); font-size: 18px; color: var(--cf-on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6; }
  .cf-faq-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 900px; margin: 0 auto; }
  .cf-faq-item { background: var(--cf-glass-bg); backdrop-filter: var(--cf-glass-blur); -webkit-backdrop-filter: var(--cf-glass-blur); border: var(--cf-gold-border); border-radius: 4px; padding: 32px; transition: all var(--cf-transition-base); }
  .cf-faq-item:hover { transform: translateY(-4px); border-color: rgba(212, 175, 55, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); }
  .cf-faq-question { font-family: var(--cf-font-display); font-size: 20px; font-weight: 600; color: var(--cf-primary); margin: 0 0 16px; line-height: 1.4; }
  .cf-faq-answer { font-family: var(--cf-font-body); font-size: 16px; color: var(--cf-on-surface-variant); line-height: 1.6; margin: 0; }

  .cf-cta-section { padding: var(--cf-section-gap) var(--cf-margin-mobile); background: #131315; text-align: center; }
  .cf-cta-content { max-width: 700px; margin: 0 auto; }
  .cf-cta-title { font-family: var(--cf-font-display); font-size: 32px; font-weight: 600; color: var(--cf-on-background); margin: 0 0 16px; line-height: 1.2; }
  .cf-cta-subtitle { font-family: var(--cf-font-body); font-size: 18px; color: var(--cf-on-surface-variant); margin: 0 0 40px; line-height: 1.6; }
  .cf-cta-btn-wrap { margin-bottom: 32px; display: flex; justify-content: center; }
  .cf-cta-btn { display: inline-flex; align-items: center; gap: 16px; background: var(--cf-primary); color: var(--cf-on-primary); border: none; padding: 20px 48px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 16px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-cta-btn:hover { filter: brightness(1.1); box-shadow: 0 0 30px rgba(242, 202, 80, 0.3); transform: translateY(-4px); }
  .cf-cta-btn-text { position: relative; z-index: 1; }
  .cf-cta-btn-icon { font-size: 20px; transition: transform var(--cf-transition-base); }
  .cf-cta-btn:hover .cf-cta-btn-icon { transform: translateX(8px); }
  .cf-cta-guarantee { display: inline-flex; align-items: center; gap: 12px; background: rgba(242, 202, 80, 0.05); padding: 16px 32px; border-radius: 50px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .cf-guarantee-icon { color: var(--cf-primary); font-size: 20px; }
  .cf-guarantee-text { font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.03em; color: var(--cf-on-surface-variant); }

  .cf-modal { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; overflow: auto; }
  .cf-modal-content { background: var(--cf-surface-container); border-radius: 4px; max-width: 900px; width: 100%; max-height: 90vh; overflow: auto; border: var(--cf-gold-border); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); animation: modalSlideIn 0.3s ease-out; }
  .cf-modal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 32px; border-bottom: 0.5px solid rgba(212, 175, 55, 0.3); background: var(--cf-surface-container-lowest); border-radius: 4px 4px 0 0; }
  .cf-modal-header h3 { font-family: var(--cf-font-display); font-size: 20px; margin: 0; color: var(--cf-primary); font-weight: 600; }
  .cf-close-btn { background: rgba(255, 255, 255, 0.05); width: 40px; height: 40px; border-radius: 2px; border: 0.5px solid rgba(212, 175, 55, 0.3); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--cf-on-surface-variant); font-size: 20px; transition: all var(--cf-transition-base); }
  .cf-close-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--cf-error); color: var(--cf-error); transform: rotate(90deg); }
  .cf-modal-pages { padding: 32px; background: var(--cf-surface-container-lowest); display: flex; justify-content: center; align-items: center; }
  .cf-modal-page { background: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3); width: 210mm; height: 297mm; display: flex; justify-content: center; align-items: flex-start; }
  .cf-modal-page .cf-ba-template { width: 100%; height: 100%; padding: 10mm 15mm; box-sizing: border-box; overflow-y: auto; }

  .cf-share-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; }
  .cf-share-card { background: var(--cf-surface-container-high); border-radius: 8px; max-width: 420px; width: 100%; padding: 32px 28px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.4); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); animation: modalSlideIn 0.3s ease-out; }
  .cf-share-icon { font-size: 40px; margin-bottom: 16px; display: block; }
  .cf-share-headline { font-family: var(--cf-font-display); font-size: 24px; font-weight: 600; color: var(--cf-primary); margin: 0 0 12px; }
  .cf-share-body { font-family: var(--cf-font-body); font-size: 15px; color: var(--cf-on-surface-variant); margin: 0 0 28px; line-height: 1.6; }
  .cf-share-close-btn { display: inline-block; background: var(--cf-primary); color: var(--cf-on-primary); border: none; padding: 12px 32px; border-radius: 2px; font-family: var(--cf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-share-close-btn:hover { filter: brightness(1.1); box-shadow: 0 0 18px rgba(242, 202, 80, 0.3); transform: translateY(-1px); }

  @media (min-width: 1024px) {
    .cf-layout { flex-direction: row; gap: 48px; }
    .cf-preview-section { position: sticky; top: 100px; align-self: flex-start; max-height: calc(100vh - 120px); overflow-y: auto; }
    .cf-form-section { max-width: 500px; }
    .cf-nav-links { display: flex; }
    .cf-nav-login { display: inline; }
    .cf-mobile-toggle { display: none; }
    .cf-faq-grid { grid-template-columns: repeat(2, 1fr); }
    .cf-form-group { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 1023px) {
    :root { --cf-margin-desktop: 32px; --cf-section-gap: 80px; }
    .cf-container { padding: 0 var(--cf-margin-desktop); }
    .cf-navbar-inner { padding: 20px var(--cf-margin-desktop); }
    .cf-hero { padding: 100px 0 60px; min-height: auto; }
    .cf-hero-title { font-size: 48px; }
    .cf-layout { padding: 60px var(--cf-margin-desktop); gap: 32px; }
    .cf-form-group { grid-template-columns: 1fr 1fr; }
    .cf-faq-grid { grid-template-columns: 1fr 1fr; }
    .cf-breadcrumb ol { padding: 0 var(--cf-margin-desktop); }
  }

  @media (max-width: 768px) {
    :root { --cf-margin-desktop: 24px; --cf-section-gap: 60px; }
    .cf-navbar-inner { padding: 16px var(--cf-margin-desktop); }
    .cf-logo { font-size: 20px; }
    .cf-hero { padding: 80px 0 40px; }
    .cf-hero-title { font-size: 36px; }
    .cf-hero-subtitle { font-size: 14px; }
    .cf-cta-buttons { flex-direction: column; align-items: center; gap: 12px; }
    .cf-btn-primary, .cf-btn-secondary, .cf-preview-btn, .cf-download-btn, .cf-cta-btn { width: 100%; justify-content: center; }
    .cf-layout { padding: 40px var(--cf-margin-desktop); gap: 24px; }
    .cf-preview-container { padding: 16px; }
    .cf-resume-preview { width: 100%; min-height: auto; padding: 8mm 10mm; }
    .cf-form-nav { gap: 6px; padding: 12px; }
    .cf-nav-btn { min-width: 80px; flex: 1 1 calc(50% - 6px); padding: 10px 14px; font-size: 11px; }
    .cf-nav-btn span { display: none; }
    .cf-form-card { padding: 16px; }
    .cf-form-group { grid-template-columns: 1fr; }
    .cf-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .cf-badge-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .cf-faq-grid { grid-template-columns: 1fr; }
    .cf-faq-section, .cf-cta-section { padding: 60px var(--cf-margin-mobile); }
    .cf-section-header h2, .cf-cta-title { font-size: 28px; }
    .cf-modal-content { margin: 0; border-radius: 0; max-height: 100vh; width: 100%; }
    .cf-modal-page { width: 100%; height: auto; min-height: 400px; }
    .cf-modal-page .cf-ba-template { padding: 8mm 12mm; }
    .cf-font-grid { grid-template-columns: 1fr 1fr; }
    .cf-list-item { flex-direction: column; gap: 12px; }
    .cf-item-actions { margin-left: 0; align-self: flex-end; }
    .cf-share-card { margin: 0 16px; padding: 24px 20px; }
  }

  @media (max-width: 480px) {
    :root { --cf-margin-desktop: 16px; --cf-section-gap: 48px; }
    .cf-navbar-inner { padding: 12px var(--cf-margin-desktop); }
    .cf-nav-cta { padding: 8px 16px; font-size: 12px; }
    .cf-hero-title { font-size: 28px; }
    .cf-hero-subtitle { font-size: 13px; }
    .cf-hero-stats, .cf-badge-grid { grid-template-columns: 1fr; }
    .cf-stat-number { font-size: 2rem; }
    .cf-layout { padding: 32px var(--cf-margin-desktop); }
    .cf-resume-preview { padding: 6mm 8mm; }
    .cf-nav-btn { min-width: 60px; flex: 1 1 calc(50% - 6px); padding: 8px 10px; }
    .cf-form-card { padding: 12px; }
    .cf-form-section-title { font-size: 20px; }
    .cf-sub-section-title { font-size: 16px; }
    .cf-font-grid { grid-template-columns: 1fr; }
    .cf-faq-item { padding: 20px; }
    .cf-faq-question { font-size: 18px; }
    .cf-section-header h2, .cf-cta-title { font-size: 24px; }
    .cf-cta-btn { padding: 16px 32px; font-size: 14px; }
    .cf-cta-guarantee { padding: 12px 20px; flex-wrap: wrap; justify-content: center; }
    .cf-guarantee-text { font-size: 12px; }
    .cf-modal-header { padding: 16px 20px; }
    .cf-modal-header h3 { font-size: 16px; }
    .cf-modal-pages { padding: 16px; }
    .cf-modal-page .cf-ba-template { padding: 6mm 8mm; }
    .cf-share-headline { font-size: 20px; }
    .cf-share-body { font-size: 13px; }
  }

  @media (max-width: 360px) {
    .cf-hero-title { font-size: 24px; }
    .cf-logo { font-size: 18px; }
    .cf-nav-cta { padding: 6px 12px; font-size: 11px; }
    .cf-btn-primary, .cf-btn-secondary { padding: 12px 20px; font-size: 12px; }
  }

  @media print {
    .cf-resume-builder, .cf-layout, .cf-preview-section, .cf-form-section, .cf-faq-section, .cf-cta-section, .cf-hero, .cf-breadcrumb, .cf-navbar, .cf-mobile-menu, .cf-modal { display: none !important; }
    .cf-resume-preview { display: block !important; box-shadow: none !important; margin: 0 !important; padding: 10mm 15mm !important; width: 100% !important; height: auto !important; page-break-inside: avoid; background: #ffffff !important; border: none !important; }
    .cf-ba-template, .cf-section { page-break-inside: avoid; }
  }
`;

const BusinessAnalystResume = ({ seoData, buildTimestamp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentDate, lastModifiedDate, reviewDates, faqDates } = seoData || {};
  const freshnessIndicator = buildTimestamp ? new Date(buildTimestamp).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];
  const safeCurrentDate = currentDate || freshnessIndicator;
  const safeLastModifiedDate = lastModifiedDate || new Date().toISOString();
  const safeReviewDates = reviewDates || Array(6).fill(freshnessIndicator);
  const safeFaqDates = faqDates || Array(6).fill(freshnessIndicator);

  const defaultExperience = () => ({ company: '', position: '', industry: '', startDate: '', endDate: '', achievements: '', isEditing: false, editIndex: null });
  const defaultEducation = () => ({ institution: '', degree: '', major: '', startDate: '', endDate: '', gpa: '', isEditing: false, editIndex: null });
  const defaultCertification = () => ({ name: '', issuingBody: '', dateEarned: '', credentialId: '', isEditing: false, editIndex: null });
  const defaultSkill = () => ({ category: '', items: '', isEditing: false, editIndex: null });
  const defaultProject = () => ({ name: '', client: '', role: '', duration: '', description: '', isEditing: false, editIndex: null });
  const defaultMethodology = () => ({ name: '', isEditing: false, editIndex: null });
  const defaultTool = () => ({ name: '', category: '', isEditing: false, editIndex: null });
  const defaultSocialLink = () => ({ platform: '', url: '', isEditing: false, editIndex: null });

  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', location: '', linkedin: '', portfolio: '', summary: '', experience: [], education: [], certifications: [], skills: [], projects: [], methodologies: [], tools: [], socialLinks: [] });
  const [fontSizes, setFontSizes] = useState({ name: 16, sectionTitle: 12, contactInfo: 8, jobTitle: 10, company: 9, degree: 10, institution: 9, date: 7, regularText: 9, bulletText: 8, skillText: 8, certificationText: 8 });
  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentProject, setCurrentProject] = useState(defaultProject());
  const [currentMethodology, setCurrentMethodology] = useState(defaultMethodology());
  const [currentTool, setCurrentTool] = useState(defaultTool());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());
  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  const testimonials = [
    {
      quote: "The Business Analyst resume templates helped me transition from IT to a Senior BA role at a Fortune 500 company. The ATS optimization is spot on!",
      metric: "Senior BA Role in 3 Weeks",
      name: "Michael R.",
      role: "Senior Business Analyst",
      company: "Fortune 500 Tech Company"
    },
    {
      quote: "As a recent MBA graduate, the entry-level BA templates were perfect. Landed 5 interviews in my first week of applying.",
      metric: "5 Interviews in 1 Week",
      name: "Jessica L.",
      role: "Entry-Level Business Analyst",
      company: "Financial Services Firm"
    },
    {
      quote: "The industry-specific keywords and formatting helped me pass automated screening systems. Finally got calls from top tech companies.",
      metric: "40% Response Rate Increase",
      name: "David K.",
      role: "Technical Business Analyst",
      company: "Silicon Valley Startup"
    },
    {
      quote: "Used the BA resume builder to pivot from consulting to product management. The strategic format impressed hiring managers.",
      metric: "Career Pivot Success",
      name: "Sarah M.",
      role: "Product Manager",
      company: "SaaS Company"
    },
    {
      quote: "The financial services BA template helped me highlight regulatory compliance experience. Got multiple offers from banks.",
      metric: "Multiple Job Offers",
      name: "Robert T.",
      role: "Financial Business Analyst",
      company: "Investment Bank"
    },
    {
      quote: "Free PDF download with proper business formatting? Unbeatable value. Best BA resume builder for professionals.",
      metric: "Perfect Resume in 20min",
      name: "Emily S.",
      role: "Healthcare Business Analyst",
      company: "Medical Technology Firm"
    }
  ];

  const faqs = [
    {
      question: "Is this Business Analyst resume builder really free with no hidden costs?",
      answer: "Yes, our Business Analyst resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional BA resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for Business Analyst resumes?",
      answer: "ATS-friendly means our Business Analyst resume templates are optimized to pass through Applicant Tracking Systems used by 95% of Fortune 500 companies. We include industry-specific keywords like 'requirements gathering', 'stakeholder management', 'data analysis', and 'process improvement' that hiring systems look for."
    },
    {
      question: "Can I download my Business Analyst resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional Business Analyst resume in PDF format without creating an account. Everything is completely free and accessible immediately for BA professionals at all levels."
    },
    {
      question: "How many Business Analyst resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly Business Analyst resume templates for IT, Finance, Healthcare, Agile, and Technical BA roles. All templates are completely free and optimized for US job markets."
    },
    {
      question: "How does your Business Analyst resume builder work?",
      answer: "Our builder uses ATS-optimized Business Analyst templates with proper industry terminology. We guide you to highlight analytical skills, project achievements, and business impact that hiring managers look for in BA candidates."
    },
    {
      question: "Can I customize the resume for different Business Analyst specializations?",
      answer: "Yes, you can easily customize your resume for IT BA, Financial BA, Healthcare BA, Agile BA, or Data Analyst roles. Our templates include specialized sections for certifications, methodologies, and tools specific to each BA specialization."
    }
  ];

  const handleFontSizeChange = (key, value) => setFontSizes(prev => ({ ...prev, [key]: Math.max(4, Math.min(24, parseInt(value) || prev[key])) }));
  const resetFontSizes = () => setFontSizes({ name: 16, sectionTitle: 12, contactInfo: 8, jobTitle: 10, company: 9, degree: 10, institution: 9, date: 7, regularText: 9, bulletText: 8, skillText: 8, certificationText: 8 });
  const getSocialIcon = () => <FiGlobe />;
  const formatSocialUrl = (url) => url ? url.replace(/(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '') : '';
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const hasContent = () => formData.fullName || formData.email || formData.summary || formData.experience.length > 0 || formData.education.length > 0 || formData.certifications.length > 0 || formData.skills.length > 0 || formData.projects.length > 0 || formData.methodologies.length > 0 || formData.tools.length > 0;

  const createAddFunction = (key, current, setter, defaultFunc, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current };
    if (item.isEditing) { const updated = [...formData[key]]; updated[item.editIndex] = { ...item, isEditing: false, editIndex: null }; setFormData({ ...formData, [key]: updated }); }
    else { setFormData({ ...formData, [key]: [...formData[key], { ...item, isEditing: false, editIndex: null }] }); }
    setter(defaultFunc());
  };
  const createEditFunction = (key, setter) => (index) => setter({ ...formData[key][index], isEditing: true, editIndex: index });
  const createDeleteFunction = (key) => (index) => { const updated = [...formData[key]]; updated.splice(index, 1); setFormData({ ...formData, [key]: updated }); };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.company && currentExperience.startDate);
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');
  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');
  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');
  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.category.trim() && currentSkill.items.trim());
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');
  const addProject = createAddFunction('projects', currentProject, setCurrentProject, defaultProject, () => currentProject.name.trim() && currentProject.description.trim());
  const editProject = createEditFunction('projects', setCurrentProject);
  const deleteProject = createDeleteFunction('projects');
  const addMethodology = createAddFunction('methodologies', currentMethodology, setCurrentMethodology, defaultMethodology, () => currentMethodology.name.trim());
  const editMethodology = createEditFunction('methodologies', setCurrentMethodology);
  const deleteMethodology = createDeleteFunction('methodologies');
  const addTool = createAddFunction('tools', currentTool, setCurrentTool, defaultTool, () => currentTool.name.trim());
  const editTool = createEditFunction('tools', setCurrentTool);
  const deleteTool = createDeleteFunction('tools');
  const addSocialLink = () => {
    if (!currentSocialLink.platform || !currentSocialLink.url) return;
    let url = currentSocialLink.url;
    if (!url.match(/^https?:\/\//)) url = `https://${url}`;
    if (currentSocialLink.isEditing) { const updated = [...formData.socialLinks]; updated[currentSocialLink.editIndex] = { platform: currentSocialLink.platform, url }; setFormData({ ...formData, socialLinks: updated }); }
    else { setFormData({ ...formData, socialLinks: [...formData.socialLinks, { platform: currentSocialLink.platform, url }] }); }
    setCurrentSocialLink(defaultSocialLink());
  };
  const editSocialLink = (index) => setCurrentSocialLink({ platform: formData.socialLinks[index].platform, url: formData.socialLinks[index].url.replace(/^https?:\/\//, '').replace(/\/$/, ''), isEditing: true, editIndex: index });
  const deleteSocialLink = (index) => { const updated = [...formData.socialLinks]; updated.splice(index, 1); setFormData({ ...formData, socialLinks: updated }); };

  const generatePDF = async () => {
    if (isGeneratingPDF) return;
    setIsGeneratingPDF(true);
    try {
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      if (!hasContent()) { alert("Please add content before generating PDF."); setIsGeneratingPDF(false); return; }
      const el = resumeRef.current;
      if (!el) { setIsGeneratingPDF(false); return; }
      const originalStates = { display: el.style.display, position: el.style.position, width: el.style.width, height: el.style.height };
      Object.assign(el.style, { display: 'block', position: 'fixed', left: '0', top: '0', width: '210mm', height: '297mm', transform: 'none', zIndex: '9999', visibility: 'visible', opacity: '1', background: '#ffffff', color: '#000000' });
      await new Promise(r => setTimeout(r, 300));
      const canvas = await html2canvas(el, { scale: 3, useCORS: true, backgroundColor: '#ffffff', width: 210 * 3.7795275591, height: 297 * 3.7795275591 });
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 0, 0, 210, (canvas.height * 210) / canvas.width, undefined, 'FAST');
      Object.assign(el.style, originalStates);
      pdf.save(`${formData.fullName || 'business_analyst_resume'}.pdf`);
      setShowSharePopup(true);
    } catch (err) { console.error("PDF Error:", err); alert("Failed to generate PDF."); }
    finally { setIsGeneratingPDF(false); }
  };

  const BATemplate = ({ formData }) => {
    const hasSummary = formData.summary?.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasProjects = formData.projects.length > 0;
    const hasMethodologies = formData.methodologies.length > 0;
    const hasTools = formData.tools.length > 0;

    return (
      <div className="cf-ba-template">
        <header className="cf-resume-header">
          <h1 className="cf-resume-name" style={{ fontSize: `${fontSizes.name}pt`, fontWeight: 700 }}>{formData.fullName || 'Your Name'}</h1>
          <p className="cf-professional-title" style={{ fontSize: `${fontSizes.jobTitle}pt`, fontWeight: 400 }}>Business Analyst</p>
          <div className="cf-contact-row">
            {formData.email && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiMail /> {formData.email}</div>}
            {formData.phone && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiPhone /> {formData.phone}</div>}
            {formData.location && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiMapPin /> {formData.location}</div>}
            {formData.linkedin && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiUsers /> {formatSocialUrl(formData.linkedin)}</div>}
            {formData.portfolio && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt`, fontWeight: 400 }}><FiGlobe /> {formatSocialUrl(formData.portfolio)}</div>}
          </div>
        </header>
        {hasSummary && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROFESSIONAL SUMMARY</h2><p className="cf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}>{formData.summary}</p></section>}
        {hasExperience && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>PROFESSIONAL EXPERIENCE</h2>{formData.experience.map((exp, i) => (<div key={i} className="cf-experience-item"><div className="cf-experience-header"><h3 style={{ fontSize: `${fontSizes.jobTitle}pt`, fontWeight: 700 }}>{exp.position}</h3><p className="cf-company" style={{ fontSize: `${fontSizes.company}pt`, fontWeight: 400 }}>{exp.company}{exp.industry && ` | ${exp.industry}`}</p><p style={{ fontSize: `${fontSizes.date}pt`, fontWeight: 400 }}>{exp.startDate} – {exp.endDate || 'Present'}</p></div><ul className="cf-bullet-list">{exp.achievements.split('\n').filter(l => l.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt`, fontWeight: 400 }}>{line}</li>)}</ul></div>))}</section>}
        {hasProjects && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>KEY PROJECTS</h2>{formData.projects.map((proj, i) => (<div key={i} className="cf-project-item" style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>{proj.name}</strong> {proj.client && `| ${proj.client}`} {proj.role && `| Role: ${proj.role}`} {proj.duration && `| ${proj.duration}`}<p>{proj.description}</p></div>))}</section>}
        {hasEducation && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>EDUCATION</h2>{formData.education.map((edu, i) => (<div key={i} className="cf-education-item"><h3 style={{ fontSize: `${fontSizes.degree}pt`, fontWeight: 700 }}>{edu.degree}{edu.major && ` in ${edu.major}`}</h3><p className="cf-institution-text" style={{ fontSize: `${fontSizes.institution}pt`, fontWeight: 400 }}>{edu.institution}</p><p className="cf-institution-date" style={{ fontSize: `${fontSizes.date}pt`, fontWeight: 400 }}>{edu.startDate} – {edu.endDate || 'Present'}{edu.gpa && ` | GPA: ${edu.gpa}`}</p></div>))}</section>}
        {hasCertifications && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>CERTIFICATIONS</h2>{formData.certifications.map((cert, i) => (<div key={i} className="cf-cert-item" style={{ fontSize: `${fontSizes.certificationText}pt`, fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>{cert.name}</strong>{cert.issuingBody && ` – ${cert.issuingBody}`}{cert.dateEarned && ` | ${cert.dateEarned}`}{cert.credentialId && ` | ID: ${cert.credentialId}`}</div>))}</section>}
        {hasSkills && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>SKILLS & COMPETENCIES</h2>{formData.skills.map((skill, i) => (<div key={i} style={{ marginBottom: '3pt' }}><strong style={{ fontSize: `${fontSizes.regularText}pt`, fontWeight: 700 }}>{skill.category}:</strong><span style={{ fontSize: `${fontSizes.skillText}pt`, fontWeight: 400 }}> {skill.items}</span></div>))}</section>}
        {hasMethodologies && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>METHODOLOGIES</h2><ul className="cf-skills-list">{formData.methodologies.map((m, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt`, fontWeight: 400 }}>{m.name}</li>)}</ul></section>}
        {hasTools && <section className="cf-section"><h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt`, fontWeight: 700 }}>TECHNICAL TOOLS</h2><ul className="cf-skills-list">{formData.tools.map((tool, i) => (<li key={i} style={{ fontSize: `${fontSizes.skillText}pt`, fontWeight: 400 }}><strong style={{ fontWeight: 700 }}>{tool.name}</strong>{tool.category && ` (${tool.category})`}</li>))}</ul></section>}
      </div>
    );
  };

  return (
    <>
      <style>{careerFlowStyles}</style>
      <div className="cf-resume-builder" lang="en-US">
        <Head>
          <title>Free Business Analyst Resume Builder: ATS Templates 2026</title>
          <meta name="title" content="Free Business Analyst Resume Builder: ATS Templates 2026" />
          <meta name="description" content="Create your professional ATS-ready resume in 5 minutes. Free business analyst resume builder with templates for IT, finance & agile roles. Download PDF instantly." />
          <meta name="keywords" content="business analyst resume builder, business analyst resume templates, ba resume, business analyst cv, ATS friendly business analyst resume, free resume builder for business analysts, technical business analyst, financial business analyst, agile business analyst, USA job market" />
          <meta name="author" content="Professional Business Analyst Resume Builder" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="canonical" href="https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder" />
          <meta property="og:title" content="Free Business Analyst Resume Builder: ATS Templates 2026" />
          <meta property="og:description" content="Create your professional ATS-ready resume in 5 minutes. Free business analyst resume builder with templates for IT, finance & agile roles. Download PDF instantly." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-business-analyst-resume-builder.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Business Analyst Resume Builder - Create Professional BA Resumes Online" />
          <meta property="og:url" content="https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Business Analyst Resume Builder" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Business Analyst Resume Builder: ATS Templates 2026" />
          <meta name="twitter:description" content="Create your professional ATS-ready resume in 5 minutes. Free business analyst resume builder with templates for IT, finance & agile roles." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-business-analyst-resume-builder.jpg" />
          <meta name="twitter:image:alt" content="Free Business Analyst Resume Builder with ATS Templates" />
          <meta name="twitter:site" content="@BABuilder" />
          <meta name="twitter:creator" content="@BABuilder" />
          <meta name="theme-color" content="#1a365d" />
          <meta name="msapplication-TileColor" content="#1a365d" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
          
          <script
            type="application/ld+json"
            key="structured-data"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "WebPage",
                    "@id": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder#webpage",
                    "url": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder",
                    "name": "Free Business Analyst Resume Builder: ATS Templates 2026",
                    "description": "Create your professional ATS-ready resume in 5 minutes. Free business analyst resume builder with templates for IT, finance & agile roles. Download PDF instantly.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Business Analyst Resume Builder",
                      "description": "Free online resume builder for Business Analysts in the USA",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Business Analyst Resume Builder",
                        "url": "https://professionalresumefree.com",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://professionalresumefree.com/logo.png",
                          "width": 512,
                          "height": 512
                        },
                        "sameAs": [
                          "https://twitter.com/BABuilder",
                          "https://linkedin.com/company/business-analyst-resume-builder",
                          "https://facebook.com/BusinessAnalystResumeBuilder"
                        ]
                      }
                    },
                    "primaryImageOfPage": {
                      "@type": "ImageObject",
                      "url": "https://professionalresumefree.com/images/og-business-analyst-resume-builder.jpg",
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
                          "name": "Business Analyst Resume Builder",
                          "item": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder"
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Business Analyst Resume Builder - ATS Optimized BA Resume Maker",
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
                        "ratingCount": 32568,
                        "bestRating": 5,
                        "worstRating": 1
                      },
                      "description": "Free online ATS-friendly Business Analyst resume builder for USA job market. Specialized templates for IT BA, Financial BA, Agile BA, and Technical BA roles.",
                      "featureList": [
                        "Business Analyst ATS-Optimized Templates",
                        "Industry-Specific Content Suggestions",
                        "One-Click PDF Download",
                        "Project Achievement Formatting",
                        "Mobile-Friendly Editor",
                        "No Sign Up Required",
                        "Free Forever for USA Job Seekers"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-business-analyst-resume-builder.jpg",
                      "applicationSuite": "Business Analyst Career Tools",
                      "countriesSupported": "United States",
                      "fileSize": "Web Application"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder#faqpage",
                    "mainEntity": faqs.map((faq, index) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                        "datePublished": safeFaqDates[index] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Business Analyst Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder#webpage"
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Business Analyst Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an ATS-optimized Business Analyst resume for the USA job market",
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
                        "name": "Choose a Business Analyst Template",
                        "text": "Select from our ATS-optimized Business Analyst resume templates designed for IT, Finance, Agile, and Technical BA roles in the USA.",
                        "url": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder#templates",
                        "image": "https://professionalresumefree.com/images/step1-business-analyst-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Professional Information",
                        "text": "Add your BA experience, projects, certifications, and analytical skills using our guided forms with USA industry terminology.",
                        "url": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder#editor",
                        "image": "https://professionalresumefree.com/images/step2-ba-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize and Optimize",
                        "text": "Use our business analyst-specific suggestions to improve industry keywords and formatting for ATS compatibility in the US market.",
                        "url": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder#optimize",
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your Business Analyst Resume",
                        "text": "Export your professional Business Analyst resume as PDF - completely free, no watermarks, optimized for US employers.",
                        "url": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder#download",
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Online Business Analyst Resume Building Service",
                    "provider": {
                      "@type": "Organization",
                      "name": "Business Analyst Resume Builder",
                      "url": "https://professionalresumefree.com",
                      "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+1-800-555-BUILD",
                        "contactType": "Customer Support",
                        "availableLanguage": "en-US"
                      }
                    },
                    "areaServed": {
                      "@type": "Country",
                      "name": "United States"
                    },
                    "hasOfferCatalog": {
                      "@type": "OfferCatalog",
                      "name": "Free Business Analyst Resume Building Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Business Analyst ATS Resume Templates"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "BA Resume Optimization"
                          }
                        }
                      ]
                    },
                    "description": "Free ATS-friendly business analyst resume builder for US job market",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".cf-hero-title", ".cf-hero-subtitle", ".cf-faq-question"]
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
                          "name": "Business Analyst Resume Builder"
                        },
                        "itemReviewed": {
                          "@type": "SoftwareApplication",
                          "name": "Business Analyst Resume Builder - ATS Optimized BA Resume Maker",
                          "applicationCategory": "BusinessApplication",
                          "operatingSystem": "Any",
                          "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                          },
                          "description": "Free online ATS-friendly business analyst resume builder that helps BA professionals in the USA create professional resumes and land interviews faster.",
                          "url": "https://professionalresumefree.com/ats-friendly-business-analyst-resume-builder"
                        }
                      }
                    }))
                  }
                ]
              })
            }}
          />
        </Head>

        <div className="cf-freshness-indicator" style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        <nav className="cf-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/" className="cf-breadcrumb-link" prefetch={false}>
                <FiHome className="cf-breadcrumb-icon"/>
                <span className="cf-breadcrumb-text">Home</span>
              </Link>
            </li>
            <li className="cf-breadcrumb-separator"><FiChevronRightIcon/></li>
            <li>
              <Link href="/ats-friendly-business-analyst-resume-builder" className="cf-breadcrumb-link" prefetch={false}>
                <span className="cf-breadcrumb-text">Free BA Templates for USA</span>
              </Link>
            </li>
          </ol>
        </nav>

        <section className="cf-hero">
          <div className="cf-container">
            <div className="cf-hero-content">
              <div className="cf-trust-badge">
                <FiStar className="cf-trust-icon"/>
                <span className="cf-trust-text">Best Free BA Resume Builder 2026</span>
              </div>
              
              <h1 className="cf-hero-title">
                Free Business Analyst Resume <span className="cf-gradient-text">Builder: Create Yours in 5 Minutes</span>
              </h1>
              
              <p className="cf-hero-subtitle">
                Create a <strong className="cf-hero-highlight">professional, ATS-optimized Business Analyst resume for free in minutes.</strong> Our BA resume builder ensures your analytical skills and project achievements get noticed by top US employers.
              </p>

              <div className="cf-cta-buttons">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-btn-primary"
                  aria-label="Start building your free Business Analyst resume now—no sign-up required"
                >
                  <span className="cf-btn-text">Build Your BA Resume Now</span>
                  <FiArrowRight className="cf-btn-icon" />
                  <div className="cf-btn-pulse"></div>
                </button>
                
                <button
                  onClick={generatePDF}
                  className="cf-btn-secondary"
                  aria-label="Download Business Analyst resume as PDF"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload className="cf-btn-icon" />
                  <span className="cf-btn-text">Download BA Resume PDF</span>
                </button>
              </div>

              <div className="cf-industry-badges">
                <div className="cf-badge-grid">
                  <span className="cf-badge-item"><FiBarChart /> IT Business Analyst</span>
                  <span className="cf-badge-item"><FiDollarSign /> Financial BA</span>
                  <span className="cf-badge-item"><FiTarget /> Agile Business Analyst</span>
                  <span className="cf-badge-item"><FiDatabase /> Data Analyst</span>
                  <span className="cf-badge-item"><FiUsers /> Senior Business Analyst</span>
                  <span className="cf-badge-item"><FiTrendingUp /> Product Manager</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="cf-layout">
          <div className="cf-preview-section">
            <div className="cf-preview-header">
              <div className="cf-preview-actions">
                <button onClick={() => setShowFullPreview(!showFullPreview)} className="cf-preview-btn">
                  <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
                </button>
                <button
                  onClick={generatePDF}
                  className="cf-download-btn"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload />
                  {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                </button>
              </div>
            </div>

            <div className={`cf-preview-container ${showFullPreview ? 'cf-full-preview' : ''}`}>
              <div className="cf-resume-card">
                <div className="cf-preview-content">
                  <div className="cf-resume-preview" ref={resumeRef}>
                    <BATemplate formData={formData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cf-form-section">
            <div className="cf-form-nav">
              {[
                { id: 'personal', label: 'Personal', icon: <FiUser /> },
                { id: 'experience', label: 'Experience', icon: <FiBriefcase /> },
                { id: 'projects', label: 'Projects', icon: <FiTarget /> },
                { id: 'education', label: 'Education', icon: <FiBook /> },
                { id: 'certifications', label: 'Certifications', icon: <FiAward /> },
                { id: 'skills', label: 'Skills', icon: <FiBarChart /> },
                { id: 'settings', label: 'Settings', icon: <FiSettings /> },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`cf-nav-btn ${activeSection === item.id ? 'cf-nav-btn-active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon} <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="cf-form-content">
              {activeSection === 'personal' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiUser /> Personal Information</h2>
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Full Name*
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, CBAP" required className="cf-form-input" />
                      </label>
                      <label className="cf-form-label">
                        Email*
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@email.com" required className="cf-form-input" />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Phone (US Format)
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className="cf-form-input" />
                      </label>
                      <label className="cf-form-label">
                        Location (City, State)
                        <input type="text" name="location" value={formData.location} onChange={handleInputChange} placeholder="San Francisco, CA" className="cf-form-input" />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        LinkedIn Profile URL
                        <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/yourprofile" className="cf-form-input" />
                      </label>
                      <label className="cf-form-label">
                        Portfolio/Website
                        <input type="url" name="portfolio" value={formData.portfolio} onChange={handleInputChange} placeholder="https://yourportfolio.com" className="cf-form-input" />
                      </label>
                    </div>
                  </div>

                  <div className="cf-form-card">
                    <label className="cf-form-label">
                      Professional Summary for Business Analyst*
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        placeholder="Results-driven Business Analyst with 8+ years of experience in requirements gathering, process improvement, and data analysis for Fortune 500 companies. Proven track record of delivering business solutions that increase operational efficiency by 30%+. Expert in Agile methodologies, stakeholder management, and business process modeling. Certified CBAP with strong technical acumen in SQL, Tableau, and JIRA."
                        required
                        className="cf-form-textarea"
                        rows="6"
                      />
                      <div className="cf-char-count">
                        {formData.summary.length}/500 characters
                      </div>
                    </label>
                  </div>
                </div>
              )}

              {activeSection === 'experience' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiBriefcase /> Professional Experience</h2>
                  <p className="cf-section-desc">List your BA roles in reverse chronological order (most recent first)</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Position Title*
                        <input 
                          value={currentExperience.position} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                          placeholder="Senior Business Analyst" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Company*
                        <input 
                          value={currentExperience.company} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })} 
                          placeholder="Google, Inc." 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Industry/Department
                      <input 
                        value={currentExperience.industry} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, industry: e.target.value })} 
                        placeholder="Technology / Product Development" 
                        className="cf-form-input" 
                      />
                    </label>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Start Date*
                        <input 
                          type="text" 
                          placeholder="Month Year (e.g., January 2020)" 
                          value={currentExperience.startDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        End Date
                        <input 
                          type="text" 
                          placeholder="Month Year or Present" 
                          value={currentExperience.endDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Key Achievements & Responsibilities*
                      <textarea 
                        value={currentExperience.achievements} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, achievements: e.target.value })} 
                        placeholder="• Led requirements gathering sessions with 20+ stakeholders for a $2M CRM implementation project
• Reduced operational costs by 25% through process optimization and automation
• Created user stories and acceptance criteria for 150+ features in Agile environment
• Developed data models and business process flows using BPMN 2.0 standards
• Managed cross-functional teams of 15+ members across US and offshore locations"
                        required 
                        className="cf-form-textarea" 
                        rows="8" 
                      />
                      <div className="cf-char-count">
                        {currentExperience.achievements.length}/2000 characters
                      </div>
                    </label>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addExperience} 
                        className="cf-add-btn" 
                        disabled={!currentExperience.position || !currentExperience.company || !currentExperience.startDate}
                      >
                        <FiPlus /> {currentExperience.isEditing ? 'Update Experience' : 'Add Experience'}
                      </button>
                      {currentExperience.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentExperience(defaultExperience())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Professional Experience</h3>
                    {formData.experience.length === 0 ? (
                      <p className="cf-empty-msg">No experience added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.experience.map((exp, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-content">
                              <div className="cf-item-header">
                                <strong className="cf-item-title">{exp.position}</strong>
                                <span className="cf-item-subtitle">at {exp.company}</span>
                              </div>
                              <div className="cf-item-meta">
                                <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                                {exp.industry && <span>{exp.industry}</span>}
                              </div>
                              <div className="cf-item-desc">
                                {exp.achievements.split('\n').filter(l => l.trim()).map((line, j) => (
                                  <p key={j} className="cf-bullet-point">• {line}</p>
                                ))}
                              </div>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editExperience(i)} className="cf-edit-btn" aria-label={`Edit ${exp.position} experience`}><FiEdit2 /></button>
                              <button onClick={() => deleteExperience(i)} className="cf-delete-btn" aria-label={`Delete ${exp.position} experience`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeSection === 'projects' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiTarget /> Key Projects</h2>
                  <p className="cf-section-desc">Highlight significant BA projects with measurable outcomes</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Project Name*
                        <input 
                          value={currentProject.name} 
                          onChange={(e) => setCurrentProject({ ...currentProject, name: e.target.value })} 
                          placeholder="Enterprise CRM Implementation" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Client/Company
                        <input 
                          value={currentProject.client} 
                          onChange={(e) => setCurrentProject({ ...currentProject, client: e.target.value })} 
                          placeholder="Fortune 500 Retail Company" 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Your Role
                        <input 
                          value={currentProject.role} 
                          onChange={(e) => setCurrentProject({ ...currentProject, role: e.target.value })} 
                          placeholder="Lead Business Analyst" 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Project Duration
                        <input 
                          value={currentProject.duration} 
                          onChange={(e) => setCurrentProject({ ...currentProject, duration: e.target.value })} 
                          placeholder="6 months (Jan 2023 - Jun 2023)" 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Project Description & Outcomes*
                      <textarea 
                        value={currentProject.description} 
                        onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} 
                        placeholder="Led requirements gathering and analysis for a Salesforce implementation affecting 500+ users across 5 departments. Successfully reduced sales cycle time by 30% and increased lead conversion by 25% through process optimization and automation."
                        required 
                        className="cf-form-textarea" 
                        rows="6" 
                      />
                      <div className="cf-char-count">
                        {currentProject.description.length}/1000 characters
                      </div>
                    </label>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addProject} 
                        className="cf-add-btn" 
                        disabled={!currentProject.name.trim() || !currentProject.description.trim()}
                      >
                        <FiPlus /> {currentProject.isEditing ? 'Update Project' : 'Add Project'}
                      </button>
                      {currentProject.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentProject(defaultProject())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Key Projects</h3>
                    {formData.projects.length === 0 ? (
                      <p className="cf-empty-msg">No projects added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.projects.map((proj, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-content">
                              <div className="cf-item-header">
                                <strong className="cf-item-title">{proj.name}</strong>
                                {proj.client && <span className="cf-item-subtitle"> | {proj.client}</span>}
                              </div>
                              <div className="cf-item-meta">
                                {proj.role && <span>Role: {proj.role}</span>}
                                {proj.duration && <span>{proj.duration}</span>}
                              </div>
                              <div className="cf-item-desc">
                                {proj.description}
                              </div>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editProject(i)} className="cf-edit-btn"><FiEdit2 /></button>
                              <button onClick={() => deleteProject(i)} className="cf-delete-btn"><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiTarget /> Methodologies & Frameworks</h3>
                    <p className="cf-section-desc">Add methodologies you're experienced with (Agile, Waterfall, etc.)</p>
                    <div className="cf-skills-input">
                      <input 
                        value={currentMethodology.name} 
                        onChange={(e) => setCurrentMethodology({ ...currentMethodology, name: e.target.value })} 
                        placeholder="Agile/Scrum, Waterfall, Lean Six Sigma, BABOK" 
                        className="cf-form-input" 
                      />
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addMethodology} 
                          className="cf-add-btn" 
                          disabled={!currentMethodology.name.trim()}
                        >
                          <FiPlus /> {currentMethodology.isEditing ? 'Update Methodology' : 'Add Methodology'}
                        </button>
                        {currentMethodology.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentMethodology(defaultMethodology())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.methodologies.map((m, i) => (
                        <div key={i} className="cf-list-item">
                          <span>{m.name}</span>
                          <div className="cf-item-actions">
                            <button onClick={() => editMethodology(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteMethodology(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.methodologies.length === 0 && <p className="cf-empty-msg">No methodologies added yet</p>}
                    </div>
                  </div>

                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiTool /> Technical Tools & Software</h3>
                    <p className="cf-section-desc">Add tools and software you're proficient with</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Tool Name*
                          <input 
                            value={currentTool.name} 
                            onChange={(e) => setCurrentTool({ ...currentTool, name: e.target.value })} 
                            placeholder="JIRA" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Category
                          <input 
                            value={currentTool.category} 
                            onChange={(e) => setCurrentTool({ ...currentTool, category: e.target.value })} 
                            placeholder="Project Management" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addTool} 
                          className="cf-add-btn" 
                          disabled={!currentTool.name.trim()}
                        >
                          <FiPlus /> {currentTool.isEditing ? 'Update Tool' : 'Add Tool'}
                        </button>
                        {currentTool.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentTool(defaultTool())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.tools.map((tool, i) => (
                        <div key={i} className="cf-list-item">
                          <div>
                            <strong>{tool.name}</strong>
                            {tool.category && ` (${tool.category})`}
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editTool(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteTool(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.tools.length === 0 && <p className="cf-empty-msg">No tools added yet</p>}
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'education' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiBook /> Education</h2>
                  <p className="cf-section-desc">List your degrees and relevant education</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Institution*
                        <input 
                          value={currentEducation.institution} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                          placeholder="Stanford University" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Degree*
                        <input 
                          value={currentEducation.degree} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                          placeholder="Master of Business Administration (MBA)" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Major / Concentration
                      <input 
                        value={currentEducation.major} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, major: e.target.value })} 
                        placeholder="Information Systems, Business Analytics" 
                        className="cf-form-input" 
                      />
                    </label>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Start Date
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentEducation.startDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        End Date
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentEducation.endDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      GPA (Optional)
                      <input 
                        value={currentEducation.gpa} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, gpa: e.target.value })} 
                        placeholder="3.8/4.0" 
                        className="cf-form-input" 
                      />
                    </label>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addEducation} 
                        className="cf-add-btn" 
                        disabled={!currentEducation.institution || !currentEducation.degree}
                      >
                        <FiPlus /> {currentEducation.isEditing ? 'Update Education' : 'Add Education'}
                      </button>
                      {currentEducation.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentEducation(defaultEducation())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Education</h3>
                    {formData.education.length === 0 ? (
                      <p className="cf-empty-msg">No education added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.education.map((edu, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-content">
                              <div className="cf-item-header">
                                <strong className="cf-item-title">{edu.degree}</strong>
                                {edu.major && <span className="cf-item-subtitle"> – {edu.major}</span>}
                              </div>
                              <div className="cf-item-meta">
                                <span>{edu.institution}</span>
                                <span>{edu.startDate} – {edu.endDate}</span>
                                {edu.gpa && <span>GPA: {edu.gpa}</span>}
                              </div>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editEducation(i)} className="cf-edit-btn"><FiEdit2 /></button>
                              <button onClick={() => deleteEducation(i)} className="cf-delete-btn"><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeSection === 'certifications' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiAward /> Certifications</h2>
                  <p className="cf-section-desc">Add professional certifications relevant to Business Analysis</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Certification Name*
                        <input 
                          value={currentCertification.name} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                          placeholder="Certified Business Analysis Professional (CBAP)" 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Issuing Body
                        <input 
                          value={currentCertification.issuingBody} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, issuingBody: e.target.value })} 
                          placeholder="International Institute of Business Analysis (IIBA)" 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Date Earned
                        <input 
                          value={currentCertification.dateEarned} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, dateEarned: e.target.value })} 
                          placeholder="Month Year" 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Credential ID
                        <input 
                          value={currentCertification.credentialId} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, credentialId: e.target.value })} 
                          placeholder="CBAP-123456" 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addCertification} 
                        className="cf-add-btn" 
                        disabled={!currentCertification.name.trim()}
                      >
                        <FiPlus /> {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                      </button>
                      {currentCertification.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentCertification(defaultCertification())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Certifications</h3>
                    {formData.certifications.length === 0 ? (
                      <p className="cf-empty-msg">No certifications added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.certifications.map((cert, i) => (
                          <div key={i} className="cf-list-item">
                            <div>
                              <strong>{cert.name}</strong>
                              {cert.issuingBody && ` – ${cert.issuingBody}`}
                              {cert.dateEarned && ` | ${cert.dateEarned}`}
                              {cert.credentialId && ` | ID: ${cert.credentialId}`}
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editCertification(i)} className="cf-edit-btn"><FiEdit2 /></button>
                              <button onClick={() => deleteCertification(i)} className="cf-delete-btn"><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeSection === 'skills' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiBarChart /> Skills & Competencies</h2>
                  <p className="cf-section-desc">Organize your skills by category</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Category*
                        <input 
                          value={currentSkill.category} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                          placeholder="Business Analysis, Data Analysis, Technical, Soft Skills" 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Skills (comma separated)*
                        <input 
                          value={currentSkill.items} 
                          onChange={(e) => setCurrentSkill({ ...currentSkill, items: e.target.value })} 
                          placeholder="Requirements Gathering, Process Mapping, Use Cases, User Stories" 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addSkill} 
                        className="cf-add-btn" 
                        disabled={!currentSkill.category.trim() || !currentSkill.items.trim()}
                      >
                        <FiPlus /> {currentSkill.isEditing ? 'Update Skills' : 'Add Skills'}
                      </button>
                      {currentSkill.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentSkill(defaultSkill())} 
                          className="cf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Your Skills</h3>
                    {formData.skills.length === 0 ? (
                      <p className="cf-empty-msg">No skills added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.skills.map((skill, i) => (
                          <div key={i} className="cf-list-item">
                            <div>
                              <strong>{skill.category}:</strong> {skill.items}
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editSkill(i)} className="cf-edit-btn"><FiEdit2 /></button>
                              <button onClick={() => deleteSkill(i)} className="cf-delete-btn"><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeSection === 'settings' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiSettings /> Font Size Settings</h2>
                  <p className="cf-section-desc">Customize font sizes for your Business Analyst resume PDF. All sizes are in points (pt).</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-font-grid">
                      {[
                        { key: 'name', label: 'Name', min: 10, max: 24 },
                        { key: 'sectionTitle', label: 'Section Titles', min: 8, max: 16 },
                        { key: 'jobTitle', label: 'Job Titles', min: 8, max: 14 },
                        { key: 'company', label: 'Company Names', min: 7, max: 12 },
                        { key: 'degree', label: 'Degrees', min: 8, max: 14 },
                        { key: 'institution', label: 'Institutions', min: 7, max: 12 },
                        { key: 'date', label: 'Dates', min: 6, max: 10 },
                        { key: 'regularText', label: 'Regular Text', min: 7, max: 12 },
                        { key: 'bulletText', label: 'Bullet Points', min: 7, max: 12 },
                        { key: 'contactInfo', label: 'Contact Info', min: 6, max: 10 },
                        { key: 'skillText', label: 'Skills Text', min: 7, max: 11 },
                        { key: 'certificationText', label: 'Certification Text', min: 7, max: 12 }
                      ].map(({ key, label, min, max }) => (
                        <div key={key} className="cf-font-control">
                          <label className="cf-font-label">
                            <span>{label}</span>
                            <span className="cf-font-value">{fontSizes[key]}pt</span>
                          </label>
                          <input 
                            type="range" 
                            min={min} 
                            max={max} 
                            value={fontSizes[key]}
                            onChange={(e) => handleFontSizeChange(key, e.target.value)}
                            className="cf-font-slider"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={resetFontSizes}
                      className="cf-reset-btn"
                    >
                      Reset to Default Font Sizes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="cf-faq-section" aria-labelledby="faq-title">
          <div className="cf-container">
            <div className="cf-section-header">
              <h2 id="faq-title">Frequently Asked Questions</h2>
              <p>Everything you need to know about creating professional Business Analyst resumes for the USA job market.</p>
            </div>
            <div className="cf-faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="cf-faq-item">
                  <h3 className="cf-faq-question">{faq.question}</h3>
                  <p className="cf-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cf-cta-section" aria-labelledby="cta-title">
          <div className="cf-container">
            <div className="cf-cta-content">
              <h2 className="cf-cta-title" id="cta-title">Ready to Advance Your Business Analyst Career in the USA?</h2>
              <p className="cf-cta-subtitle">
                Join 2 million+ Business Analysts who landed their dream jobs with our free ATS-friendly BA resume builder optimized for US employers.
              </p>
              <div className="cf-cta-btn-wrap">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-cta-btn"
                  aria-label="Create your free Business Analyst resume now—optimized for USA job market"
                >
                  <span className="cf-cta-btn-text">Create Your Free BA Resume Now</span>
                  <FiArrowRight className="cf-cta-btn-icon" />
                </button>
              </div>
              <div className="cf-cta-guarantee">
                <FiCheck className="cf-guarantee-icon" />
                <span className="cf-guarantee-text">No credit card required • Free forever • Download in minutes • ATS Optimized for USA Market</span>
              </div>
            </div>
          </div>
        </section>

        {showFullPreview && (
          <div className="cf-modal" onClick={() => setShowFullPreview(false)}>
            <div className="cf-modal-content" onClick={e => e.stopPropagation()}>
              <div className="cf-modal-header">
                <h3>Full Business Analyst Resume Preview</h3>
                <button className="cf-close-btn" onClick={() => setShowFullPreview(false)}><FiX /></button>
              </div>
              <div className="cf-modal-pages">
                <div className="cf-modal-page">
                  <BATemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showSharePopup && (
          <div className="cf-share-overlay" onClick={() => setShowSharePopup(false)}>
            <div className="cf-share-card" onClick={e => e.stopPropagation()}>
              <span className="cf-share-icon">💬</span>
              <h2 className="cf-share-headline">Loved Using This?</h2>
              <p className="cf-share-body">It only takes 5 seconds to share professionalresumefree.com — but it could change someone's career. Thanks for spreading the word!</p>
              <button className="cf-share-close-btn" onClick={() => setShowSharePopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const buildTimestamp = Date.now();
  const buildTime = new Date(buildTimestamp);
  const currentDate = buildTime.toISOString().split('T')[0];
  const lastModifiedDate = buildTime.toISOString();

  const reviewDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 10 + 1));
    return date.toISOString().split('T')[0];
  });

  const faqDates = Array(6).fill(null).map((_, i) => {
    const date = new Date(buildTimestamp);
    date.setDate(date.getDate() - (i * 15 + 30));
    return date.toISOString().split('T')[0];
  });

  return {
    props: {
      seoData: {
        currentDate,
        lastModifiedDate,
        reviewDates,
        faqDates
      },
      buildTimestamp
    },
    revalidate: 3600
  };
}

export default BusinessAnalystResume;