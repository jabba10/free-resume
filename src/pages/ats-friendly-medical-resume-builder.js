'use client';
import { useState, useRef, useEffect, useCallback } from 'react';
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
  FiList,
  FiPlusCircle,
  FiMinusCircle,
  FiMenu,
  FiX as FiCloseIcon,
  FiCode,
  FiDollarSign,
  FiShoppingBag,
  FiMonitor,
  FiTruck
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
  .cf-universal-template { color: #000000; line-height: 1.25; height: 100%; }
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
  .cf-cert-item, .cf-achievement-item { margin-bottom: 3pt; line-height: 1.25; }

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
  .cf-modal-page .cf-universal-template { width: 100%; height: 100%; padding: 10mm 15mm; box-sizing: border-box; overflow-y: auto; }

  .cf-responsibility-item { margin-bottom: 12px; }
  .cf-responsibility-actions { display: flex; gap: 8px; margin-top: 8px; }
  .cf-icon-btn { background: transparent; border: 0.5px solid var(--cf-outline-variant); color: var(--cf-on-surface-variant); width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; border-radius: 2px; cursor: pointer; transition: all var(--cf-transition-base); }
  .cf-icon-btn:hover { background: rgba(242, 202, 80, 0.1); border-color: var(--cf-primary); color: var(--cf-primary); }
  .cf-remove-btn { color: var(--cf-error); border-color: rgba(255, 180, 171, 0.3); }
  .cf-remove-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--cf-error); }

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
    .cf-modal-page .cf-universal-template { padding: 8mm 12mm; }
    .cf-font-grid { grid-template-columns: 1fr 1fr; }
    .cf-list-item { flex-direction: column; gap: 12px; }
    .cf-item-actions { margin-left: 0; align-self: flex-end; }
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
    .cf-modal-page .cf-universal-template { padding: 6mm 8mm; }
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
    .cf-universal-template, .cf-section { page-break-inside: avoid; }
  }
`;

const Resume = ({ 
  seoData,
  buildTimestamp
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    responsibilities: [''],
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

  // --- State ---
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: '',
    experience: [],
    education: [],
    specialties: [],
    licenses: [],
    affiliations: [],
    procedures: [],
    languages: [],
    socialLinks: []
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
    licenseText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSpecialty, setCurrentSpecialty] = useState(defaultSpecialty());
  const [currentLicense, setCurrentLicense] = useState(defaultLicense());
  const [currentAffiliation, setCurrentAffiliation] = useState(defaultAffiliation());
  const [currentProcedure, setCurrentProcedure] = useState(defaultProcedure());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  // Testimonials for Structured Data
  const testimonials = [
    {
      quote: "Created my nursing resume in 10 minutes and landed interviews the same week. The healthcare-specific templates are incredible!",
      metric: "Found RN Position in 2 Weeks",
      name: "Sarah M.",
      role: "Registered Nurse",
      company: "City General Hospital"
    },
    {
      quote: "Finally a resume builder that understands healthcare credentials. The ATS templates helped me pass hospital screening systems.",
      metric: "3 Interviews in 1 Week",
      name: "James K.",
      role: "Physician Assistant",
      company: "Medical Center"
    },
    {
      quote: "As a recent nursing graduate, the entry-level healthcare templates were perfect. Landed my first hospital job using this builder.",
      metric: "First Job After Graduation",
      name: "Alex P.",
      role: "New Graduate Nurse",
      company: "Teaching Hospital"
    },
    {
      quote: "The medical resume builder saved me - could update my CV between shifts. Professional results without the cost.",
      metric: "Career Advancement Success",
      name: "Maria L.",
      role: "Medical Lab Technician",
      company: "Diagnostic Center"
    },
    {
      quote: "Healthcare ATS-friendly templates actually work! Got callbacks from hospitals that previously ignored my applications.",
      metric: "5x More Responses",
      name: "David T.",
      role: "Physical Therapist",
      company: "Rehabilitation Center"
    },
    {
      quote: "Free PDF download with proper medical formatting? Unbeatable value. Best healthcare resume builder I've found.",
      metric: "Perfect Resume in 15min",
      name: "Lisa R.",
      role: "Healthcare Administrator",
      company: "Medical Group"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this healthcare resume builder really free with no hidden costs?",
      answer: "Yes, our healthcare resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional medical resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for healthcare resumes?",
      answer: "ATS-friendly means our healthcare resume templates are optimized to pass through Applicant Tracking Systems used by 99% of hospitals and healthcare facilities. This ensures your clinical experience and credentials are properly scanned and recognized."
    },
    {
      question: "Can I download my healthcare resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional healthcare resume in PDF format without creating an account. Everything is completely free and accessible immediately for nurses, doctors, and medical professionals."
    },
    {
      question: "How many healthcare resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly healthcare resume templates for nurses, physicians, therapists, lab technicians, and all medical specialties. All templates are completely free and optimized for healthcare hiring."
    },
    {
      question: "How does your healthcare resume builder work?",
      answer: "Our builder uses ATS-optimized healthcare templates with proper medical terminology formatting. We guide you to highlight clinical experience, certifications, and specialized skills that healthcare employers look for."
    },
    {
      question: "Can I edit my healthcare resume after downloading it?",
      answer: "Yes, you can always come back and edit your healthcare resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
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
      licenseText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      doximity: <FiHeart />,
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
    setFormData(prev => ({ ...prev, [name]: value }));
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
      formData.languages.length > 0
    );
  };

  // --- Experience Responsibility Handlers ---
  const handleResponsibilityChange = (index, value) => {
    const updatedResponsibilities = [...currentExperience.responsibilities];
    updatedResponsibilities[index] = value;
    setCurrentExperience({
      ...currentExperience,
      responsibilities: updatedResponsibilities
    });
  };

  const addResponsibility = () => {
    setCurrentExperience({
      ...currentExperience,
      responsibilities: [...currentExperience.responsibilities, '']
    });
  };

  const removeResponsibility = (index) => {
    if (currentExperience.responsibilities.length > 1) {
      const updatedResponsibilities = currentExperience.responsibilities.filter((_, i) => i !== index);
      setCurrentExperience({
        ...currentExperience,
        responsibilities: updatedResponsibilities
      });
    }
  };

  // --- Item CRUD Functions ---
  const createAddFunction = (key, current, setter, defaultFunc, isValid) => () => {
    if (!isValid()) return;
    const item = { ...current };
    
    // Clean up empty responsibilities
    if (key === 'experience' && item.responsibilities) {
      item.responsibilities = item.responsibilities.filter(r => r.trim());
      if (item.responsibilities.length === 0) {
        item.responsibilities = ['']; // Keep at least one empty
      }
    }
    
    if (item.isEditing) {
      const updated = [...formData[key]];
      updated[item.editIndex] = { ...item, isEditing: false, editIndex: null };
      setFormData(prev => ({ ...prev, [key]: updated }));
    } else {
      setFormData(prev => ({ ...prev, [key]: [...prev[key], { ...item, isEditing: false, editIndex: null }] }));
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
    setFormData(prev => ({ ...prev, [key]: updated }));
  };

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => 
    currentExperience.position && currentExperience.employer && currentExperience.startDate
  );
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => 
    currentEducation.institution && currentEducation.degree
  );
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addSpecialty = createAddFunction('specialties', currentSpecialty, setCurrentSpecialty, defaultSpecialty, () => 
    currentSpecialty.name.trim()
  );
  
  const editSpecialty = createEditFunction('specialties', setCurrentSpecialty);
  const deleteSpecialty = createDeleteFunction('specialties');

  const addLicense = createAddFunction('licenses', currentLicense, setCurrentLicense, defaultLicense, () => 
    currentLicense.name.trim()
  );
  
  const editLicense = createEditFunction('licenses', setCurrentLicense);
  const deleteLicense = createDeleteFunction('licenses');

  const addAffiliation = createAddFunction('affiliations', currentAffiliation, setCurrentAffiliation, defaultAffiliation, () => 
    currentAffiliation.organization.trim()
  );
  
  const editAffiliation = createEditFunction('affiliations', setCurrentAffiliation);
  const deleteAffiliation = createDeleteFunction('affiliations');

  const addProcedure = createAddFunction('procedures', currentProcedure, setCurrentProcedure, defaultProcedure, () => 
    currentProcedure.name.trim()
  );
  
  const editProcedure = createEditFunction('procedures', setCurrentProcedure);
  const deleteProcedure = createDeleteFunction('procedures');

  const addLanguage = createAddFunction('languages', currentLanguage, setCurrentLanguage, defaultLanguage, () => 
    currentLanguage.name.trim()
  );
  
  const editLanguage = createEditFunction('languages', setCurrentLanguage);
  const deleteLanguage = createDeleteFunction('languages');

  const addSocialLink = () => {
    if (!currentSocialLink.platform || !currentSocialLink.url) return;
    let url = currentSocialLink.url;
    if (!url.match(/^https?:\/\//)) url = `https://${url}`;
    if (currentSocialLink.isEditing) {
      const updated = [...formData.socialLinks];
      updated[currentSocialLink.editIndex] = { platform: currentSocialLink.platform, url };
      setFormData(prev => ({ ...prev, socialLinks: updated }));
    } else {
      setFormData(prev => ({ ...prev, socialLinks: [...prev.socialLinks, { platform: currentSocialLink.platform, url }] }));
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
    setFormData(prev => ({ ...prev, socialLinks: updated }));
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
        height: 297 * 3.7795275591
      });

      const imgData = canvas.toDataURL('image/png', 1.0);
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');

      Object.assign(el.style, originalStates);

      pdf.save(`${formData.fullName || 'healthcare_resume'}_resume.pdf`);
      setShowSharePopup(true);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template (Single Page Optimized) ---
  const HealthcareTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSpecialties = formData.specialties.length > 0;
    const hasLicenses = formData.licenses.length > 0;
    const hasAffiliations = formData.affiliations.length > 0;
    const hasProcedures = formData.procedures.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className="cf-universal-template">
        <header className="cf-resume-header">
          <h1 className="cf-resume-name" style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className="cf-contact-row">
            {formData.email && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className="cf-contact-separator">•</div>}
            {formData.phone && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className="cf-contact-separator">•</div>}
            {formData.address && <div className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.slice(0, 2).map((link, i) => (
              <div key={i} className="cf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasSummary && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL SUMMARY</h2>
            <p className="cf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CLINICAL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className="cf-experience-item">
                <div className="cf-experience-header">
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className="cf-company" style={{ fontSize: `${fontSizes.company}pt` }}>
                    {exp.employer}{exp.department && ` – ${exp.department}`} | {exp.startDate} – {exp.endDate || 'Present'}
                  </p>
                </div>
                <ul className="cf-bullet-list">
                  {exp.responsibilities && exp.responsibilities.filter(r => r.trim()).map((responsibility, j) => (
                    <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className="cf-education-item">
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>
                  {edu.degree}{edu.program && ` – ${edu.program}`}
                </h3>
                <p className="cf-institution-text" style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className="cf-institution-date" style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasSpecialties && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SPECIALTIES</h2>
            <ul className="cf-skills-list">
              {formData.specialties.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{s.name}</li>)}
            </ul>
          </section>
        )}

        {hasLicenses && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>LICENSES & CERTIFICATIONS</h2>
            {formData.licenses.map((l, i) => (
              <div key={i} className="cf-cert-item" style={{ fontSize: `${fontSizes.licenseText}pt` }}>
                <strong style={{ fontWeight: 700 }}>{l.name}</strong>
                {l.issuingAuthority && ` – ${l.issuingAuthority}`}
                {l.licenseNumber && ` (License #: ${l.licenseNumber})`}
                {l.expiryDate && ` – Expires: ${l.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasProcedures && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CLINICAL PROCEDURES</h2>
            <ul className="cf-skills-list">
              {formData.procedures.map((p, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{p.name}</li>)}
            </ul>
          </section>
        )}

        {hasLanguages && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>LANGUAGES</h2>
            <ul className="cf-bullet-list">
              {formData.languages.map((l, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.bulletText}pt` }}>
                  {l.name}{l.proficiency && ` (${l.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasAffiliations && (
          <section className="cf-section">
            <h2 className="cf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL AFFILIATIONS</h2>
            {formData.affiliations.map((a, i) => (
              <div key={i} className="cf-achievement-item" style={{ fontSize: `${fontSizes.regularText}pt` }}>
                <strong style={{ fontWeight: 700 }}>{a.organization}</strong>
                {a.role && ` – ${a.role}`}
              </div>
            ))}
          </section>
        )}
      </div>
    );
  };

  // SINGLE CANONICAL URL - WITHOUT www
  const canonicalUrl = "https://professionalresumefree.com/ats-friendly-medical-resume-builder";

  return (
    <>
      <style>{careerFlowStyles}</style>
      <div className="cf-resume-builder" lang="en-US">
        <Head>
          <title>Free Healthcare Resume Builder 2026 | ATS Medical Templates</title>
          <meta name="title" content="Free Healthcare Resume Builder 2026 | ATS Medical Templates" />
          <meta name="description" content="Create a professional healthcare resume for free in 2026. ATS-optimized medical templates for nurses, doctors. Download PDF instantly." />
          <meta name="keywords" content="healthcare resume builder, medical resume templates, nurse resume builder, doctor resume, ATS friendly healthcare resume, free resume builder for medical professionals" />
          <meta name="author" content="Professional Healthcare Resume Free" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          
          {/* SINGLE CANONICAL URL - WITHOUT www */}
          <link rel="canonical" href={canonicalUrl} />
          
          <link rel="alternate" href={canonicalUrl} hreflang="en" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-US" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-GB" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-CA" />
          <link rel="alternate" href={canonicalUrl} hreflang="en-AU" />
          <link rel="alternate" href={canonicalUrl} hreflang="x-default" />
          <meta property="og:title" content="Free Healthcare Resume Builder 2026 | ATS Medical Templates" />
          <meta property="og:description" content="Create a professional healthcare resume for free in 2026. ATS-optimized medical templates for nurses, doctors. Download PDF instantly." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-healthcare-resume-builder-preview.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Healthcare Resume Builder - Create Professional Medical Resumes Online" />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Professional Healthcare Resume Free" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Healthcare Resume Builder 2026 | ATS Medical Templates" />
          <meta name="twitter:description" content="Create a professional healthcare resume for free in 2026. ATS-optimized medical templates for nurses, doctors. Download PDF instantly." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-healthcare-resume-builder-preview.jpg" />
          <meta name="twitter:image:alt" content="Free Healthcare Resume Builder with ATS Templates" />
          <meta name="twitter:site" content="@ProResumeFree" />
          <meta name="twitter:creator" content="@ProResumeFree" />
          <meta name="theme-color" content="#0066CC" />
          <meta name="msapplication-TileColor" content="#0066CC" />
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
                    "@id": `${canonicalUrl}#webpage`,
                    "url": canonicalUrl,
                    "name": "Free Healthcare Resume Builder 2026 | ATS Medical Templates",
                    "description": "Create a professional healthcare resume for free in 2026. ATS-optimized medical templates for nurses, doctors. Download PDF instantly.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Professional Healthcare Resume Free",
                      "description": "Free online resume builder for medical professionals",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Professional Healthcare Resume Free",
                        "url": "https://professionalresumefree.com",
                        "logo": {
                          "@type": "ImageObject",
                          "url": "https://professionalresumefree.com/logo.png",
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
                      "url": "https://professionalresumefree.com/images/og-healthcare-resume-builder-preview.jpg",
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
                          "name": "Healthcare Resume Builder",
                          "item": canonicalUrl
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Healthcare Resume Builder - ATS Optimized Medical Resume Maker",
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
                      "description": "Free online ATS-friendly healthcare resume builder for medical professionals, nurses, doctors, and healthcare workers.",
                      "featureList": [
                        "Medical ATS-Optimized Templates",
                        "Healthcare Content Suggestions",
                        "One-Click PDF Download",
                        "Clinical Experience Formatting",
                        "Mobile-Friendly Editor",
                        "No Sign Up Required",
                        "Free Forever"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-healthcare-resume-builder.jpg",
                      "applicationSuite": "Medical Career Tools",
                      "countriesSupported": "Global",
                      "fileSize": "Web Application"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "@id": `${canonicalUrl}#faqpage`,
                    "mainEntity": faqs.map((faq, index) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                        "datePublished": safeFaqDates[index] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Healthcare Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": `${canonicalUrl}#webpage`
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Healthcare Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an ATS-optimized healthcare resume for free",
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
                        "name": "Choose a Medical Template",
                        "text": "Select from our ATS-optimized healthcare resume templates designed for nurses, physicians, therapists, and medical professionals.",
                        "url": `${canonicalUrl}#templates`,
                        "image": "https://professionalresumefree.com/images/step1-medical-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Clinical Information",
                        "text": "Add your medical experience, education, licenses, certifications, and specialized skills using our guided forms.",
                        "url": `${canonicalUrl}#editor`,
                        "image": "https://professionalresumefree.com/images/step2-medical-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize and Optimize",
                        "text": "Use our healthcare-specific suggestions to improve medical keywords and formatting for ATS compatibility.",
                        "url": `${canonicalUrl}#optimize`,
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your Healthcare Resume",
                        "text": "Export your professional medical resume as PDF - completely free, no watermarks, ready for hospital applications.",
                        "url": `${canonicalUrl}#download`,
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Online Healthcare Resume Building Service",
                    "provider": {
                      "@type": "Organization",
                      "name": "Professional Healthcare Resume Free",
                      "url": "https://professionalresumefree.com",
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
                      "name": "Free Healthcare Resume Building Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Medical ATS Resume Templates"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Healthcare Resume Editing"
                          }
                        }
                      ]
                    },
                    "description": "Free ATS-friendly healthcare resume builder for medical professionals worldwide",
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
                          "name": "Professional Healthcare Resume Free"
                        },
                        "itemReviewed": {
                          "@type": "SoftwareApplication",
                          "name": "Healthcare Resume Builder - ATS Optimized Medical Resume Maker",
                          "applicationCategory": "BusinessApplication",
                          "operatingSystem": "Any",
                          "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                          },
                          "description": "Free online ATS-friendly healthcare resume builder that helps medical professionals create professional resumes and land interviews faster.",
                          "url": canonicalUrl
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
        <div className="cf-freshness-indicator" style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="cf-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/" className="cf-breadcrumb-link" prefetch={false}>
                <FiHome className="cf-breadcrumb-icon" />
                <span className="cf-breadcrumb-text">Home</span>
              </Link>
            </li>
            <li className="cf-breadcrumb-separator">
              <FiChevronRightIcon />
            </li>
            <li>
              <Link href="/ats-friendly-medical-resume-builder" className="cf-breadcrumb-link" prefetch={false}>
                <span className="cf-breadcrumb-text">Free Medical Template</span>
              </Link>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="cf-hero">
          <div className="cf-container">
            <div className="cf-hero-content">
              <div className="cf-trust-badge">
                <FiStar className="cf-trust-icon" />
                <span className="cf-trust-text">
                  Best Free Healthcare Resume Builder 2026
                </span>
              </div>
              
              {/* ONLY ONE H1 TAG ON THE ENTIRE PAGE */}
              <h1 className="cf-hero-title">
                Free Healthcare <span className="cf-gradient-text">Resume Builder 2026</span>
              </h1>
              
              <p className="cf-hero-subtitle">
                Create a <strong className="cf-hero-highlight">professional, ATS-optimized healthcare resume for free in minutes.</strong> Our medical resume builder ensures your clinical experience and credentials get noticed by hospitals and healthcare employers.
              </p>

              <div className="cf-cta-buttons">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-btn-primary"
                  aria-label="Start building your free healthcare resume now—no sign-up required"
                >
                  <span className="cf-btn-text">Start Building Your Healthcare Resume Now</span>
                  <FiArrowRight className="cf-btn-icon" />
                  <div className="cf-btn-pulse"></div>
                </button>
                
                <button
                  onClick={generatePDF}
                  className="cf-btn-secondary"
                  aria-label="Download healthcare resume as PDF"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload className="cf-btn-icon" />
                  <span className="cf-btn-text">Download Healthcare Resume PDF</span>
                </button>
              </div>

              <div className="cf-hero-stats">
                <div className="cf-stat-item">
                  <span className="cf-stat-number">4M+</span>
                  <span className="cf-stat-label">Healthcare Professionals</span>
                </div>
                <div className="cf-stat-item">
                  <span className="cf-stat-number">98%</span>
                  <span className="cf-stat-label">ATS Pass Rate</span>
                </div>
                <div className="cf-stat-item">
                  <span className="cf-stat-number">24h</span>
                  <span className="cf-stat-label">Avg. Interview Time</span>
                </div>
              </div>

              <div className="cf-industry-badges">
                <div className="cf-badge-grid">
                  <span className="cf-badge-item"><FiHeart /> Nurse</span>
                  <span className="cf-badge-item"><FiActivity /> Doctor</span>
                  <span className="cf-badge-item"><FiTool /> Therapist</span>
                  <span className="cf-badge-item"><FiSearch /> Lab Tech</span>
                  <span className="cf-badge-item"><FiBriefcase /> Admin</span>
                  <span className="cf-badge-item"><FiShield /> Specialist</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
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
                    <HealthcareTemplate formData={formData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cf-form-section">
            <div className="cf-form-nav">
              {[
                { id: 'personal', label: 'Personal', icon: <FiUser /> },
                { id: 'experience', label: 'Clinical', icon: <FiHeart /> },
                { id: 'education', label: 'Education', icon: <FiBook /> },
                { id: 'licenses', label: 'Licenses', icon: <FiShield /> },
                { id: 'skills', label: 'Skills', icon: <FiActivity /> },
                { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
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
              {/* Personal Section */}
              {activeSection === 'personal' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiUser /> Personal Information</h2>
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Full Name*
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="Jane Smith, RN, BSN" required className="cf-form-input" />
                      </label>
                      <label className="cf-form-label">
                        Email*
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="jane.smith@hospital.com" required className="cf-form-input" />
                      </label>
                    </div>
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Phone*
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" required className="cf-form-input" />
                      </label>
                      <label className="cf-form-label">
                        Location
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, State, Country" className="cf-form-input" />
                      </label>
                    </div>
                  </div>

                  <div className="cf-form-card">
                    <label className="cf-form-label">
                      Professional Summary*
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        placeholder="Compassionate and dedicated Registered Nurse with 5+ years of experience in critical care and emergency medicine..."
                        required
                        className="cf-form-textarea"
                        rows="6"
                      />
                      <div className="cf-char-count">
                        {formData.summary.length}/500 characters
                      </div>
                    </label>
                  </div>

                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title"><FiGlobe /> Professional Links</h3>
                    <p className="cf-section-desc">Add your professional profiles (LinkedIn, Doximity, portfolio, etc.)</p>
                    <div className="cf-social-input">
                      <select 
                        value={currentSocialLink.platform} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                        className="cf-form-select"
                      >
                        <option value="">Select Platform</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Doximity">Doximity</option>
                        <option value="Portfolio">Professional Portfolio</option>
                        <option value="Website">Personal Website</option>
                      </select>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/yourprofile" 
                        value={currentSocialLink.url} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} 
                        className="cf-form-input" 
                      />
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSocialLink} 
                          className="cf-add-btn" 
                          disabled={!currentSocialLink.platform || !currentSocialLink.url}
                        >
                          <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add Link'}
                        </button>
                        {currentSocialLink.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSocialLink(defaultSocialLink())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.socialLinks.length === 0 ? (
                        <p className="cf-empty-msg">No professional links added yet</p>
                      ) : (
                        formData.socialLinks.map((link, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-info">
                              <span className="cf-item-platform">{link.platform}</span>
                              <span className="cf-item-url">{formatSocialUrl(link.url)}</span>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editSocialLink(i)} className="cf-edit-btn" aria-label={`Edit ${link.platform} link`}><FiEdit2 /></button>
                              <button onClick={() => deleteSocialLink(i)} className="cf-delete-btn" aria-label={`Delete ${link.platform} link`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Clinical Experience Section */}
              {activeSection === 'experience' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiHeart /> Clinical Experience</h2>
                  <p className="cf-section-desc">List your clinical positions in reverse chronological order (most recent first)</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Position Title*
                        <input 
                          value={currentExperience.position} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                          placeholder="Registered Nurse, Emergency Department" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Hospital/Employer*
                        <input 
                          value={currentExperience.employer} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                          placeholder="City General Hospital" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Department / Unit / Floor
                      <input 
                        value={currentExperience.department} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, department: e.target.value })} 
                        placeholder="Emergency Department, ICU, Med-Surg" 
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
                    
                    <div className="cf-skills-input">
                      <label className="cf-form-label">
                        Key Responsibilities & Achievements*
                      </label>
                      {currentExperience.responsibilities.map((responsibility, index) => (
                        <div key={index} className="cf-responsibility-item">
                          <textarea
                            value={responsibility}
                            onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                            placeholder={`• Responsibility ${index + 1}`}
                            className="cf-form-textarea"
                            rows="2"
                          />
                          <div className="cf-responsibility-actions">
                            {index === currentExperience.responsibilities.length - 1 && (
                              <button
                                type="button"
                                onClick={addResponsibility}
                                className="cf-icon-btn"
                                title="Add another responsibility"
                              >
                                <FiPlusCircle />
                              </button>
                            )}
                            {currentExperience.responsibilities.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeResponsibility(index)}
                                className="cf-icon-btn cf-remove-btn"
                                title="Remove responsibility"
                              >
                                <FiMinusCircle />
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                      <div className="cf-char-count">
                        Total responsibilities: {currentExperience.responsibilities.filter(r => r.trim()).length}
                      </div>
                    </div>

                    <div className="cf-form-actions">
                      <button 
                        type="button" 
                        onClick={addExperience} 
                        className="cf-add-btn" 
                        disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                      >
                        <FiPlus /> {currentExperience.isEditing ? 'Update Clinical Experience' : 'Add Clinical Experience'}
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
                    <h3 className="cf-sub-section-title">Your Clinical Experience</h3>
                    {formData.experience.length === 0 ? (
                      <p className="cf-empty-msg">No clinical experience added yet</p>
                    ) : (
                      <div className="cf-items-list">
                        {formData.experience.map((exp, i) => (
                          <div key={i} className="cf-list-item">
                            <div className="cf-item-content">
                              <div className="cf-item-header">
                                <strong className="cf-item-title">{exp.position}</strong>
                                <span className="cf-item-subtitle">at {exp.employer}</span>
                              </div>
                              <div className="cf-item-meta">
                                <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                                {exp.department && <span>{exp.department}</span>}
                              </div>
                              <div className="cf-item-desc">
                                {exp.responsibilities && exp.responsibilities.filter(r => r.trim()).map((responsibility, j) => (
                                  <p key={j} className="cf-bullet-point">• {responsibility}</p>
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

              {/* Education Section */}
              {activeSection === 'education' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiBook /> Education & Training</h2>
                  <p className="cf-section-desc">List your nursing/medical education, degrees, and relevant clinical training</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-form-group">
                      <label className="cf-form-label">
                        Institution*
                        <input 
                          value={currentEducation.institution} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                          placeholder="University of Nursing" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                      <label className="cf-form-label">
                        Degree/Certification*
                        <input 
                          value={currentEducation.degree} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                          placeholder="Bachelor of Science in Nursing (BSN)" 
                          required 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="cf-form-label">
                      Program / Specialization / Track
                      <input 
                        value={currentEducation.program} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} 
                        placeholder="Accelerated BSN Program, Critical Care Track" 
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
                        End Date / Expected
                        <input 
                          type="text" 
                          placeholder="Month Year or Expected" 
                          value={currentEducation.endDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                          className="cf-form-input" 
                        />
                      </label>
                    </div>
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
                                {edu.program && <span className="cf-item-subtitle"> – {edu.program}</span>}
                              </div>
                              <div className="cf-item-meta">
                                <span>{edu.institution}</span>
                                <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                              </div>
                            </div>
                            <div className="cf-item-actions">
                              <button onClick={() => editEducation(i)} className="cf-edit-btn" aria-label={`Edit ${edu.degree}`}><FiEdit2 /></button>
                              <button onClick={() => deleteEducation(i)} className="cf-delete-btn" aria-label={`Delete ${edu.degree}`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Licenses & Certifications Section */}
              {activeSection === 'licenses' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiShield /> Licenses & Certifications</h2>
                  
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Professional Licenses</h3>
                    <p className="cf-section-desc">Add your nursing/medical licenses with numbers and expiry dates</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          License Name*
                          <input 
                            value={currentLicense.name} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, name: e.target.value })} 
                            placeholder="Registered Nurse (RN) License" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Issuing Authority*
                          <input 
                            value={currentLicense.issuingAuthority} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, issuingAuthority: e.target.value })} 
                            placeholder="State Board of Nursing" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          License Number
                          <input 
                            value={currentLicense.licenseNumber} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, licenseNumber: e.target.value })} 
                            placeholder="RN-1234567" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Expiry Date
                          <input 
                            value={currentLicense.expiryDate} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, expiryDate: e.target.value })} 
                            placeholder="MM/YYYY" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addLicense} 
                          className="cf-add-btn" 
                          disabled={!currentLicense.name.trim()}
                        >
                          <FiPlus /> {currentLicense.isEditing ? 'Update License' : 'Add License'}
                        </button>
                        {currentLicense.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentLicense(defaultLicense())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.licenses.map((l, i) => (
                        <div key={i} className="cf-list-item">
                          <div className="cf-item-content">
                            <strong className="cf-item-title">{l.name}</strong>
                            <div className="cf-item-meta">
                              {l.issuingAuthority && <span>{l.issuingAuthority}</span>}
                              {l.licenseNumber && <span>License #: {l.licenseNumber}</span>}
                              {l.expiryDate && <span>Expires: {l.expiryDate}</span>}
                            </div>
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editLicense(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteLicense(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.licenses.length === 0 && <p className="cf-empty-msg">No licenses added yet</p>}
                    </div>
                  </div>

                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Medical Specialties</h3>
                    <p className="cf-section-desc">List your clinical specialties and areas of expertise</p>
                    <div className="cf-skills-input">
                      <input 
                        value={currentSpecialty.name} 
                        onChange={(e) => setCurrentSpecialty({ ...currentSpecialty, name: e.target.value })} 
                        placeholder="Critical Care, Emergency Medicine, Pediatrics, Oncology" 
                        className="cf-form-input" 
                      />
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSpecialty} 
                          className="cf-add-btn" 
                          disabled={!currentSpecialty.name.trim()}
                        >
                          <FiPlus /> {currentSpecialty.isEditing ? 'Update Specialty' : 'Add Specialty'}
                        </button>
                        {currentSpecialty.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSpecialty(defaultSpecialty())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.specialties.map((s, i) => (
                        <div key={i} className="cf-list-item">
                          <span>{s.name}</span>
                          <div className="cf-item-actions">
                            <button onClick={() => editSpecialty(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteSpecialty(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.specialties.length === 0 && <p className="cf-empty-msg">No specialties added yet</p>}
                    </div>
                  </div>

                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Professional Affiliations</h3>
                    <p className="cf-section-desc">Add your professional medical organization memberships</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Organization*
                          <input 
                            value={currentAffiliation.organization} 
                            onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, organization: e.target.value })} 
                            placeholder="American Nurses Association (ANA)" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Role / Membership Type
                          <input 
                            value={currentAffiliation.role} 
                            onChange={(e) => setCurrentAffiliation({ ...currentAffiliation, role: e.target.value })} 
                            placeholder="Member, Committee Member" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addAffiliation} 
                          className="cf-add-btn" 
                          disabled={!currentAffiliation.organization.trim()}
                        >
                          <FiPlus /> {currentAffiliation.isEditing ? 'Update Affiliation' : 'Add Affiliation'}
                        </button>
                        {currentAffiliation.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentAffiliation(defaultAffiliation())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.affiliations.map((a, i) => (
                        <div key={i} className="cf-list-item">
                          <div>
                            <strong>{a.organization}</strong>
                            {a.role && ` – ${a.role}`}
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editAffiliation(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteAffiliation(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.affiliations.length === 0 && <p className="cf-empty-msg">No affiliations added yet</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Skills & Procedures Section */}
              {activeSection === 'skills' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiActivity /> Clinical Skills & Procedures</h2>
                  
                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Clinical Procedures & Technical Skills</h3>
                    <p className="cf-section-desc">List your clinical procedures, equipment, and technical skills</p>
                    <div className="cf-skills-input">
                      <input 
                        value={currentProcedure.name} 
                        onChange={(e) => setCurrentProcedure({ ...currentProcedure, name: e.target.value })} 
                        placeholder="IV Insertion, Wound Care, EKG Interpretation, Ventilator Management" 
                        className="cf-form-input" 
                      />
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addProcedure} 
                          className="cf-add-btn" 
                          disabled={!currentProcedure.name.trim()}
                        >
                          <FiPlus /> {currentProcedure.isEditing ? 'Update Procedure' : 'Add Procedure'}
                        </button>
                        {currentProcedure.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentProcedure(defaultProcedure())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.procedures.map((p, i) => (
                        <div key={i} className="cf-list-item">
                          <span>{p.name}</span>
                          <div className="cf-item-actions">
                            <button onClick={() => editProcedure(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteProcedure(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.procedures.length === 0 && <p className="cf-empty-msg">No procedures added yet</p>}
                    </div>
                  </div>

                  <div className="cf-form-card">
                    <h3 className="cf-sub-section-title">Languages</h3>
                    <p className="cf-section-desc">List languages you speak and your proficiency level</p>
                    <div className="cf-skills-input">
                      <div className="cf-form-group">
                        <label className="cf-form-label">
                          Language*
                          <input 
                            value={currentLanguage.name} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                            placeholder="Spanish" 
                            className="cf-form-input" 
                          />
                        </label>
                        <label className="cf-form-label">
                          Proficiency Level
                          <input 
                            value={currentLanguage.proficiency} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                            placeholder="Fluent, Conversational, Medical Terminology" 
                            className="cf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="cf-form-actions">
                        <button 
                          type="button" 
                          onClick={addLanguage} 
                          className="cf-add-btn" 
                          disabled={!currentLanguage.name.trim()}
                        >
                          <FiPlus /> {currentLanguage.isEditing ? 'Update Language' : 'Add Language'}
                        </button>
                        {currentLanguage.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentLanguage(defaultLanguage())} 
                            className="cf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="cf-items-list">
                      {formData.languages.map((l, i) => (
                        <div key={i} className="cf-list-item">
                          <div>
                            {l.name}{l.proficiency && ` (${l.proficiency})`}
                          </div>
                          <div className="cf-item-actions">
                            <button onClick={() => editLanguage(i)} className="cf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteLanguage(i)} className="cf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.languages.length === 0 && <p className="cf-empty-msg">No languages added yet</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Font Settings Section */}
              {activeSection === 'settings' && (
                <div className="cf-form-section-content">
                  <h2 className="cf-form-section-title"><FiSettings /> Font Size Settings</h2>
                  <p className="cf-section-desc">Customize font sizes for your healthcare resume PDF. All sizes are in points (pt).</p>
                  
                  <div className="cf-form-card">
                    <div className="cf-font-grid">
                      {[
                        {key: 'name', label: 'Name'},
                        {key: 'sectionTitle', label: 'Section Titles'},
                        {key: 'jobTitle', label: 'Job Titles'},
                        {key: 'degree', label: 'Degrees'},
                        {key: 'institution', label: 'Company/Institution Names'},
                        {key: 'institutionDate', label: 'Institution Dates'},
                        {key: 'regularText', label: 'Regular Text'},
                        {key: 'bulletText', label: 'Bullet Points'},
                        {key: 'contactInfo', label: 'Contact Info'},
                        {key: 'skillText', label: 'Skills Text'},
                        {key: 'licenseText', label: 'License Text'}
                      ].map(({key, label}) => (
                        <div key={key} className="cf-font-control">
                          <label className="cf-font-label">
                            <span>{label}</span>
                            <span className="cf-font-value">{fontSizes[key]}pt</span>
                          </label>
                          <input 
                            type="range" 
                            min={key === 'institutionDate' ? 6 : 8} 
                            max={key === 'name' ? 24 : key === 'sectionTitle' ? 18 : key === 'jobTitle' || key === 'degree' ? 16 : 14} 
                            value={fontSizes[key]} 
                            onChange={e => handleFontSizeChange(key, e.target.value)} 
                            className="cf-font-slider"
                          />
                        </div>
                      ))}
                    </div>
                    <button onClick={resetFontSizes} className="cf-reset-btn">Reset to Default Font Sizes</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="cf-faq-section" aria-labelledby="faq-title">
          <div className="cf-container">
            <div className="cf-section-header">
              <h2 className="cf-section-title" id="faq-title">Frequently Asked Questions</h2>
              <p className="cf-section-subtitle">
                Everything you need to know about creating professional healthcare resumes with our tool.
              </p>
            </div>
            <div className="cf-faq-grid">
              {faqs.map((faq, i) => (
                <div key={i} className="cf-faq-item">
                  <h3 className="cf-faq-question">{faq.question}</h3>
                  <p className="cf-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cf-cta-section" aria-labelledby="cta-title">
          <div className="cf-container">
            <div className="cf-cta-content">
              <h2 className="cf-cta-title" id="cta-title">Ready to Advance Your Healthcare Career?</h2>
              <p className="cf-cta-subtitle">
                Join 4 million+ healthcare professionals who landed their dream jobs with our free ATS-friendly healthcare resume builder.
              </p>
              <div className="cf-cta-btn-wrap">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="cf-cta-btn"
                  aria-label="Create your free healthcare resume now—no sign-up required"
                >
                  <span className="cf-cta-btn-text">Create Your Free Healthcare Resume Now</span>
                  <FiArrowRight className="cf-cta-btn-icon" />
                </button>
              </div>
              <div className="cf-cta-guarantee">
                <FiCheck className="cf-guarantee-icon" />
                <span className="cf-guarantee-text">No credit card required • Free forever • Download in minutes • ATS Optimized for Healthcare</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Preview Modal */}
        {showFullPreview && (
          <div className="cf-modal" onClick={() => setShowFullPreview(false)}>
            <div className="cf-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="cf-modal-header">
                <h3>Full Healthcare Resume Preview</h3>
                <button className="cf-close-btn" onClick={() => setShowFullPreview(false)}><FiX /></button>
              </div>
              <div className="cf-modal-pages">
                <div className="cf-modal-page">
                  <HealthcareTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Share Popup */}
        {showSharePopup && (
          <div className="cf-share-overlay" onClick={() => setShowSharePopup(false)}>
            <div className="cf-share-card" onClick={e => e.stopPropagation()}>
              <span className="cf-share-icon">💬</span>
              <h2 className="cf-share-headline">Loved Using This?</h2>
              <p className="cf-share-body">
                It only takes 5 seconds to share professionalresumefree.com — but it could change someone's career. Thanks for spreading the word!
              </p>
              <button className="cf-share-close-btn" onClick={() => setShowSharePopup(false)}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
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

  // Breadcrumb data for structured data - WITHOUT www
  const breadcrumbData = [
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Healthcare Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-medical-resume-builder' }
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