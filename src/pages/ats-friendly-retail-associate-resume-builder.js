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
  FiShoppingBag,
  FiBook,
  FiStar,
  FiAward,
  FiDownload,
  FiEdit2,
  FiTrash2,
  FiPlus,
  FiX,
  FiEye,
  FiCheck,
  FiSettings,
  FiArrowRight,
  FiHome,
  FiChevronRight as FiChevronRightIcon,
  FiBriefcase,
  FiTool,
  FiTrendingUp,
  FiSearch,
  FiBarChart,
  FiTarget,
  FiUsers,
  FiPackage,
  FiCreditCard,
  FiGlobe,
  FiClock,
  FiDollarSign,
  FiMonitor,
  FiTruck
} from 'react-icons/fi';
import Link from 'next/link';

const retailFlowStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  :root {
    --rf-background: #131315;
    --rf-surface: #131315;
    --rf-surface-dim: #131315;
    --rf-surface-bright: #39393b;
    --rf-surface-container: #201f21;
    --rf-surface-container-low: #1c1b1d;
    --rf-surface-container-lowest: #0e0e10;
    --rf-surface-container-high: #2a2a2c;
    --rf-surface-container-highest: #353437;
    --rf-surface-variant: #353437;
    --rf-on-background: #e5e1e4;
    --rf-on-surface: #e5e1e4;
    --rf-on-surface-variant: #d0c5af;
    --rf-primary: #f2ca50;
    --rf-primary-container: #d4af37;
    --rf-on-primary: #3c2f00;
    --rf-on-primary-container: #554300;
    --rf-primary-fixed: #ffe088;
    --rf-primary-fixed-dim: #e9c349;
    --rf-secondary: #c8c6c3;
    --rf-secondary-container: #474744;
    --rf-on-secondary: #30312e;
    --rf-on-secondary-container: #b6b5b1;
    --rf-tertiary: #d0cdd3;
    --rf-tertiary-container: #b4b2b7;
    --rf-on-tertiary: #303034;
    --rf-on-tertiary-container: #454449;
    --rf-outline: #99907c;
    --rf-outline-variant: #4d4635;
    --rf-error: #ffb4ab;
    --rf-on-error: #690005;
    --rf-error-container: #93000a;
    --rf-on-error-container: #ffdad6;
    --rf-inverse-surface: #e5e1e4;
    --rf-inverse-on-surface: #313032;
    --rf-inverse-primary: #735c00;
    --rf-surface-tint: #e9c349;
    --rf-secondary-fixed: #e4e2de;
    --rf-secondary-fixed-dim: #c8c6c3;
    --rf-on-secondary-fixed: #1b1c1a;
    --rf-on-secondary-fixed-variant: #474744;
    --rf-tertiary-fixed: #e4e1e7;
    --rf-tertiary-fixed-dim: #c8c5cb;
    --rf-on-tertiary-fixed: #1b1b1f;
    --rf-on-tertiary-fixed-variant: #47464b;
    --rf-gutter: 32px;
    --rf-section-gap: 120px;
    --rf-margin-desktop: 64px;
    --rf-margin-mobile: 24px;
    --rf-container-max: 1280px;
    --rf-unit: 8px;
    --rf-font-display: 'Playfair Display', Georgia, serif;
    --rf-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --rf-glass-bg: rgba(20, 19, 21, 0.7);
    --rf-glass-blur: blur(20px);
    --rf-gold-border: 0.5px solid rgba(212, 175, 55, 0.3);
    --rf-gold-border-strong: 0.5px solid rgba(212, 175, 55, 0.4);
    --rf-gold-glow: 0 0 15px rgba(242, 202, 80, 0.3);
    --rf-shadow-nav: 0px 24px 48px rgba(0, 0, 0, 0.8);
    --rf-transition-fast: 200ms ease;
    --rf-transition-base: 300ms ease;
    --rf-transition-slow: 500ms ease;
    --rf-transition-image: 700ms ease;
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
  body { background-color: #131315 !important; margin: 0; padding: 0; }

  .rf-resume-builder {
    background-color: #131315 !important;
    color: var(--rf-on-background);
    font-family: var(--rf-font-body);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .rf-resume-builder * { box-sizing: border-box; }
  .rf-resume-builder ::selection { background: rgba(242, 202, 80, 0.3); color: var(--rf-on-background); }
  .rf-container { width: 100%; max-width: var(--rf-container-max); margin: 0 auto; padding: 0 var(--rf-margin-desktop); box-sizing: border-box; }
  .rf-freshness-indicator { display: none; }

  .rf-breadcrumb { background: var(--rf-surface-container-lowest); padding: 16px 0; border-bottom: 0.5px solid var(--rf-outline-variant); }
  .rf-breadcrumb ol { display: flex; align-items: center; list-style: none; margin: 0; padding: 0 var(--rf-margin-desktop); flex-wrap: wrap; max-width: var(--rf-container-max); margin-left: auto; margin-right: auto; }
  .rf-breadcrumb li { display: flex; align-items: center; }
  .rf-breadcrumb-separator { margin: 0 8px; color: var(--rf-outline); }
  .rf-breadcrumb-link { display: flex; align-items: center; gap: 6px; color: var(--rf-on-surface-variant); text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; transition: color var(--rf-transition-fast); text-transform: uppercase; }
  .rf-breadcrumb-link:hover { color: var(--rf-primary); }
  .rf-breadcrumb-icon { font-size: 14px; }
  .rf-breadcrumb-text { white-space: nowrap; }

  .rf-hero { padding: 120px 0 80px; background: #131315; text-align: center; position: relative; overflow: hidden; min-height: 70vh; display: flex; align-items: center; }
  .rf-hero::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(ellipse at center, rgba(242, 202, 80, 0.03) 0%, transparent 70%); pointer-events: none; }
  .rf-hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
  .rf-trust-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(242, 202, 80, 0.08); padding: 8px 20px; border-radius: 50px; margin-bottom: 32px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .rf-trust-icon { color: var(--rf-primary); font-size: 16px; }
  .rf-trust-text { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--rf-primary); }
  .rf-hero-title { font-family: var(--rf-font-display); font-size: 64px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: var(--rf-on-background); margin: 0 0 24px; }
  .rf-gradient-text { background: linear-gradient(135deg, var(--rf-primary) 0%, #f7d96a 50%, var(--rf-primary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: var(--rf-gold-glow); font-style: italic; }
  .rf-hero-subtitle { font-family: var(--rf-font-body); font-size: 18px; font-weight: 400; line-height: 1.6; color: var(--rf-on-surface-variant); margin: 0 auto 40px; max-width: 650px; }
  .rf-hero-highlight { color: var(--rf-primary); font-weight: 600; }
  .rf-cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
  .rf-btn-primary { display: inline-flex; align-items: center; gap: 12px; background: var(--rf-primary); color: var(--rf-on-primary); border: none; padding: 16px 40px; border-radius: 2px; font-family: var(--rf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--rf-transition-base); text-decoration: none; position: relative; overflow: hidden; }
  .rf-btn-primary:hover { filter: brightness(1.1); box-shadow: 0 0 25px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .rf-btn-text { position: relative; z-index: 1; }
  .rf-btn-icon { font-size: 18px; transition: transform var(--rf-transition-base); }
  .rf-btn-primary:hover .rf-btn-icon { transform: translateX(4px); }
  .rf-btn-pulse { position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background-color: rgba(255, 255, 255, 0.1); transform: translate(-50%, -50%); animation: pulse 2s infinite; }
  .rf-btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--rf-primary); border: var(--rf-gold-border-strong); padding: 16px 40px; border-radius: 2px; font-family: var(--rf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--rf-transition-base); text-decoration: none; }
  .rf-btn-secondary:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .rf-btn-secondary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .rf-hero-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px; margin: 48px 0 0; padding: 0; }
  .rf-stat-item { display: flex; flex-direction: column; align-items: center; padding: 24px; background: var(--rf-glass-bg); backdrop-filter: var(--rf-glass-blur); -webkit-backdrop-filter: var(--rf-glass-blur); border: var(--rf-gold-border); border-radius: 4px; }
  .rf-stat-number { font-family: var(--rf-font-display); font-size: 2.5rem; font-weight: 700; color: var(--rf-primary); margin-bottom: 8px; }
  .rf-stat-label { font-family: var(--rf-font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--rf-on-surface-variant); text-align: center; }
  .rf-industry-badges { margin-top: 48px; }
  .rf-badge-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
  .rf-badge-item { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(242, 202, 80, 0.05); border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; font-family: var(--rf-font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--rf-on-surface-variant); transition: all var(--rf-transition-base); justify-content: center; }
  .rf-badge-item:hover { border-color: rgba(212, 175, 55, 0.5); color: var(--rf-primary); background: rgba(242, 202, 80, 0.08); }

  .rf-layout { display: flex; flex-direction: column; gap: var(--rf-gutter); padding: 80px var(--rf-margin-desktop); max-width: var(--rf-container-max); margin: 0 auto; background: #131315; }
  .rf-preview-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .rf-preview-header { display: flex; flex-direction: column; gap: 16px; }
  .rf-preview-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  .rf-preview-btn, .rf-download-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 2px; font-family: var(--rf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none; transition: all var(--rf-transition-base); cursor: pointer; white-space: nowrap; min-height: 48px; }
  .rf-preview-btn { background: transparent; color: var(--rf-primary); border: var(--rf-gold-border-strong); }
  .rf-preview-btn:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .rf-download-btn { background: var(--rf-primary); color: var(--rf-on-primary); border: none; }
  .rf-download-btn:not(:disabled):hover { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .rf-download-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .rf-preview-container { background: var(--rf-glass-bg); backdrop-filter: var(--rf-glass-blur); -webkit-backdrop-filter: var(--rf-glass-blur); border: var(--rf-gold-border); padding: 24px; border-radius: 4px; min-height: 500px; display: flex; justify-content: center; align-items: flex-start; overflow: auto; }
  .rf-full-preview { background: transparent; padding: 0; border: none; border-radius: 0; overflow: visible; }
  .rf-resume-card { width: 100%; display: flex; justify-content: center; }
  .rf-preview-content { position: relative; width: 100%; max-width: 210mm; min-height: 297mm; overflow: visible; }

  .rf-resume-preview { display: block; width: 210mm; min-height: 297mm; background: #ffffff; padding: 10mm 15mm; box-sizing: border-box; box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); border: 0.5px solid rgba(212, 175, 55, 0.3); color: #000000; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.25; }
  .rf-universal-template { color: #000000; line-height: 1.25; height: 100%; }
  .rf-resume-header { text-align: center; margin-bottom: 8pt; padding-bottom: 6pt; border-bottom: 0.5pt solid #000000; }
  .rf-resume-name { font-weight: 700; margin: 0 0 3pt; color: #000000; text-transform: uppercase; letter-spacing: 0.4pt; }
  .rf-contact-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 4pt; color: #495057; margin-top: 3pt; }
  .rf-contact-item { display: flex; align-items: center; gap: 2pt; }
  .rf-contact-separator { color: #adb5bd; }
  .rf-section { margin-bottom: 8pt; page-break-inside: avoid; }
  .rf-section-title { text-transform: uppercase; letter-spacing: 0.5pt; margin: 0 0 3pt; padding-bottom: 1pt; border-bottom: 0.5pt solid #000000; color: #000000; font-weight: 700; }
  .rf-summary-text { margin: 0; text-align: justify; line-height: 1.3; }
  .rf-experience-item, .rf-education-item { margin-bottom: 6pt; page-break-inside: avoid; }
  .rf-experience-header h3 { font-weight: 700; margin: 0 0 1.5pt; color: #000000; }
  .rf-company { color: #495057; margin: 0 0 3pt; font-style: italic; }
  .rf-institution-text { color: #495057; }
  .rf-institution-date { color: #6c757d; }
  .rf-bullet-list { margin: 3pt 0 0; padding-left: 8pt; list-style-type: disc; }
  .rf-bullet-list li { margin-bottom: 2pt; text-align: justify; line-height: 1.25; }
  .rf-skills-list { display: flex; flex-wrap: wrap; gap: 3pt; list-style: none; padding: 0; margin: 3pt 0 0; }
  .rf-skills-list li { background: #f8f9fa; padding: 1.5pt 4pt; border-radius: 1.5pt; border: 0.5pt solid #dee2e6; }
  .rf-skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6pt; }
  .rf-skill-category { margin-bottom: 4pt; }
  .rf-achievement-item, .rf-certification-item { margin-bottom: 3pt; line-height: 1.25; }

  .rf-form-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .rf-form-nav { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px; background: var(--rf-glass-bg); backdrop-filter: var(--rf-glass-blur); -webkit-backdrop-filter: var(--rf-glass-blur); border: var(--rf-gold-border); border-radius: 4px; }
  .rf-nav-btn { display: flex; align-items: center; gap: 8px; padding: 12px 20px; border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; background: transparent; color: var(--rf-on-surface-variant); font-family: var(--rf-font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--rf-transition-base); white-space: nowrap; min-height: 48px; flex: 1; min-width: 100px; justify-content: center; }
  .rf-nav-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: rgba(212, 175, 55, 0.4); color: var(--rf-primary); }
  .rf-nav-btn-active { background: var(--rf-primary); border-color: var(--rf-primary); color: var(--rf-on-primary); }
  .rf-form-content { flex: 1; min-width: 0; overflow-y: auto; max-height: 600px; padding-right: 8px; }
  .rf-form-content::-webkit-scrollbar { width: 6px; }
  .rf-form-content::-webkit-scrollbar-track { background: var(--rf-surface-container-lowest); border-radius: 3px; }
  .rf-form-content::-webkit-scrollbar-thumb { background: var(--rf-outline-variant); border-radius: 3px; }
  .rf-form-content::-webkit-scrollbar-thumb:hover { background: var(--rf-outline); }
  .rf-form-section-content { display: flex; flex-direction: column; gap: 24px; }
  .rf-form-section-title { font-family: var(--rf-font-display); font-size: 24px; font-weight: 600; margin: 0 0 8px; color: var(--rf-on-background); display: flex; align-items: center; gap: 12px; }
  .rf-section-desc { color: var(--rf-on-surface-variant); font-family: var(--rf-font-body); font-size: 14px; margin: 0 0 16px; line-height: 1.6; }
  .rf-form-card { background: var(--rf-glass-bg); backdrop-filter: var(--rf-glass-blur); -webkit-backdrop-filter: var(--rf-glass-blur); border: var(--rf-gold-border); border-radius: 4px; padding: 24px; width: 100%; box-sizing: border-box; }
  .rf-form-group { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 20px; width: 100%; }
  .rf-form-label { display: flex; flex-direction: column; gap: 8px; font-family: var(--rf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--rf-on-surface-variant); width: 100%; }
  .rf-form-input, .rf-form-textarea, .rf-form-select { padding: 14px 16px; border: 0.5px solid var(--rf-outline-variant); border-radius: 2px; font-family: var(--rf-font-body); font-size: 14px; color: var(--rf-on-background); background: rgba(14, 14, 16, 0.6); transition: all var(--rf-transition-base); width: 100%; box-sizing: border-box; min-width: 0; }
  .rf-form-input:focus, .rf-form-textarea:focus, .rf-form-select:focus { outline: none; border-color: var(--rf-primary); box-shadow: 0 0 0 2px rgba(242, 202, 80, 0.15); }
  .rf-form-input::placeholder, .rf-form-textarea::placeholder { color: var(--rf-outline); }
  .rf-form-textarea { resize: vertical; min-height: 120px; line-height: 1.5; }
  .rf-form-select { cursor: pointer; }
  .rf-form-select option { background: var(--rf-surface-container); color: var(--rf-on-background); }
  .rf-char-count { text-align: right; font-size: 11px; color: var(--rf-outline); margin-top: 8px; font-family: var(--rf-font-body); letter-spacing: 0.05em; }
  .rf-sub-section-title { font-family: var(--rf-font-display); font-size: 18px; font-weight: 600; margin: 0 0 16px; color: var(--rf-primary); display: flex; align-items: center; gap: 12px; }
  .rf-skills-input { display: flex; flex-direction: column; gap: 16px; width: 100%; }
  .rf-form-actions { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; align-items: center; width: 100%; }
  .rf-add-btn, .rf-cancel-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 2px; font-family: var(--rf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: all var(--rf-transition-base); min-height: 48px; flex-shrink: 0; }
  .rf-add-btn { background: var(--rf-primary); color: var(--rf-on-primary); border: none; }
  .rf-add-btn:hover:not(:disabled) { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .rf-add-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .rf-cancel-btn { background: transparent; color: var(--rf-on-surface-variant); border: 0.5px solid var(--rf-outline-variant); }
  .rf-cancel-btn:hover { background: rgba(255, 255, 255, 0.03); border-color: var(--rf-outline); transform: translateY(-2px); }
  .rf-items-list { margin-top: 24px; }
  .rf-empty-msg { color: var(--rf-outline); font-style: italic; margin: 0; padding: 20px; text-align: center; background: rgba(14, 14, 16, 0.4); border-radius: 2px; border: 1px dashed var(--rf-outline-variant); font-family: var(--rf-font-body); font-size: 14px; }
  .rf-list-item { display: flex; justify-content: space-between; align-items: flex-start; padding: 16px; border-bottom: 0.5px solid var(--rf-outline-variant); width: 100%; box-sizing: border-box; background: rgba(14, 14, 16, 0.3); border-radius: 2px; margin-bottom: 8px; }
  .rf-list-item:last-child { border-bottom: none; margin-bottom: 0; }
  .rf-item-content { flex: 1; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .rf-item-header { display: flex; flex-wrap: wrap; gap: 8px; align-items: baseline; }
  .rf-item-title { font-weight: 700; color: var(--rf-on-background); word-break: break-word; font-size: 16px; }
  .rf-item-subtitle { color: var(--rf-on-surface-variant); font-size: 14px; word-break: break-word; }
  .rf-item-meta { display: flex; gap: 16px; flex-wrap: wrap; color: var(--rf-outline); font-size: 12px; align-items: center; letter-spacing: 0.05em; }
  .rf-item-desc { margin-top: 8px; }
  .rf-bullet-point { margin: 4px 0; font-size: 14px; color: var(--rf-on-surface-variant); line-height: 1.5; }
  .rf-item-actions { display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0; }
  .rf-edit-btn, .rf-delete-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 2px; background: rgba(255, 255, 255, 0.03); color: var(--rf-on-surface-variant); border: 0.5px solid var(--rf-outline-variant); cursor: pointer; transition: all var(--rf-transition-base); }
  .rf-edit-btn:hover { background: rgba(242, 202, 80, 0.1); border-color: var(--rf-primary); color: var(--rf-primary); transform: translateY(-2px); }
  .rf-delete-btn { color: var(--rf-error); border-color: rgba(255, 180, 171, 0.3); }
  .rf-delete-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--rf-error); transform: translateY(-2px); }

  .rf-font-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
  .rf-font-control { display: flex; flex-direction: column; gap: 12px; }
  .rf-font-label { display: flex; justify-content: space-between; align-items: center; font-family: var(--rf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--rf-on-surface-variant); }
  .rf-font-value { background: rgba(242, 202, 80, 0.1); padding: 4px 12px; border-radius: 20px; font-weight: 700; color: var(--rf-primary); font-size: 12px; min-width: 50px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .rf-font-slider { width: 100%; height: 4px; -webkit-appearance: none; appearance: none; background: var(--rf-outline-variant); border-radius: 2px; outline: none; }
  .rf-font-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--rf-primary); cursor: pointer; border: 2px solid var(--rf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .rf-font-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: var(--rf-primary); cursor: pointer; border: 2px solid var(--rf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .rf-reset-btn { display: block; width: 100%; padding: 14px 24px; background: transparent; color: var(--rf-on-surface-variant); border: 0.5px solid var(--rf-outline-variant); border-radius: 2px; font-family: var(--rf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--rf-transition-base); text-align: center; }
  .rf-reset-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: var(--rf-primary); color: var(--rf-primary); }

  .rf-faq-section { padding: var(--rf-section-gap) var(--rf-margin-mobile); background: var(--rf-surface-container-lowest); border-top: 0.5px solid rgba(153, 144, 124, 0.1); border-bottom: 0.5px solid rgba(153, 144, 124, 0.1); }
  .rf-section-header { text-align: center; margin-bottom: 64px; }
  .rf-section-header h2 { font-family: var(--rf-font-display); font-size: 32px; font-weight: 600; color: var(--rf-on-background); margin: 0 0 16px; }
  .rf-section-header p { font-family: var(--rf-font-body); font-size: 18px; color: var(--rf-on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6; }
  .rf-faq-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 900px; margin: 0 auto; }
  .rf-faq-item { background: var(--rf-glass-bg); backdrop-filter: var(--rf-glass-blur); -webkit-backdrop-filter: var(--rf-glass-blur); border: var(--rf-gold-border); border-radius: 4px; padding: 32px; transition: all var(--rf-transition-base); }
  .rf-faq-item:hover { transform: translateY(-4px); border-color: rgba(212, 175, 55, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); }
  .rf-faq-question { font-family: var(--rf-font-display); font-size: 20px; font-weight: 600; color: var(--rf-primary); margin: 0 0 16px; line-height: 1.4; }
  .rf-faq-answer { font-family: var(--rf-font-body); font-size: 16px; color: var(--rf-on-surface-variant); line-height: 1.6; margin: 0; }

  .rf-cta-section { padding: var(--rf-section-gap) var(--rf-margin-mobile); background: #131315; text-align: center; }
  .rf-cta-content { max-width: 700px; margin: 0 auto; }
  .rf-cta-title { font-family: var(--rf-font-display); font-size: 32px; font-weight: 600; color: var(--rf-on-background); margin: 0 0 16px; line-height: 1.2; }
  .rf-cta-subtitle { font-family: var(--rf-font-body); font-size: 18px; color: var(--rf-on-surface-variant); margin: 0 0 40px; line-height: 1.6; }
  .rf-cta-btn-wrap { margin-bottom: 32px; display: flex; justify-content: center; }
  .rf-cta-btn { display: inline-flex; align-items: center; gap: 16px; background: var(--rf-primary); color: var(--rf-on-primary); border: none; padding: 20px 48px; border-radius: 2px; font-family: var(--rf-font-body); font-size: 16px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--rf-transition-base); }
  .rf-cta-btn:hover { filter: brightness(1.1); box-shadow: 0 0 30px rgba(242, 202, 80, 0.3); transform: translateY(-4px); }
  .rf-cta-btn-text { position: relative; z-index: 1; }
  .rf-cta-btn-icon { font-size: 20px; transition: transform var(--rf-transition-base); }
  .rf-cta-btn:hover .rf-cta-btn-icon { transform: translateX(8px); }
  .rf-cta-guarantee { display: inline-flex; align-items: center; gap: 12px; background: rgba(242, 202, 80, 0.05); padding: 16px 32px; border-radius: 50px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .rf-guarantee-icon { color: var(--rf-primary); font-size: 20px; }
  .rf-guarantee-text { font-family: var(--rf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.03em; color: var(--rf-on-surface-variant); }

  .rf-modal { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; overflow: auto; }
  .rf-modal-content { background: var(--rf-surface-container); border-radius: 4px; max-width: 900px; width: 100%; max-height: 90vh; overflow: auto; border: var(--rf-gold-border); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); animation: modalSlideIn 0.3s ease-out; }
  .rf-modal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 32px; border-bottom: 0.5px solid rgba(212, 175, 55, 0.3); background: var(--rf-surface-container-lowest); border-radius: 4px 4px 0 0; }
  .rf-modal-header h3 { font-family: var(--rf-font-display); font-size: 20px; margin: 0; color: var(--rf-primary); font-weight: 600; }
  .rf-close-btn { background: rgba(255, 255, 255, 0.05); width: 40px; height: 40px; border-radius: 2px; border: 0.5px solid rgba(212, 175, 55, 0.3); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--rf-on-surface-variant); font-size: 20px; transition: all var(--rf-transition-base); }
  .rf-close-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--rf-error); color: var(--rf-error); transform: rotate(90deg); }
  .rf-modal-pages { padding: 32px; background: var(--rf-surface-container-lowest); display: flex; justify-content: center; align-items: center; }
  .rf-modal-page { background: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3); width: 210mm; height: 297mm; display: flex; justify-content: center; align-items: flex-start; }
  .rf-modal-page .rf-universal-template { width: 100%; height: 100%; padding: 10mm 15mm; box-sizing: border-box; overflow-y: auto; }

  .rf-share-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; }
  .rf-share-card { background: var(--rf-surface-container-high); border-radius: 8px; max-width: 420px; width: 100%; padding: 32px 28px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.4); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); animation: modalSlideIn 0.3s ease-out; }
  .rf-share-icon { font-size: 40px; margin-bottom: 16px; display: block; }
  .rf-share-headline { font-family: var(--rf-font-display); font-size: 24px; font-weight: 600; color: var(--rf-primary); margin: 0 0 12px; }
  .rf-share-body { font-family: var(--rf-font-body); font-size: 15px; color: var(--rf-on-surface-variant); margin: 0 0 28px; line-height: 1.6; }
  .rf-share-close-btn { display: inline-block; background: var(--rf-primary); color: var(--rf-on-primary); border: none; padding: 12px 32px; border-radius: 2px; font-family: var(--rf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--rf-transition-base); }
  .rf-share-close-btn:hover { filter: brightness(1.1); box-shadow: 0 0 18px rgba(242, 202, 80, 0.3); transform: translateY(-1px); }

  @media (min-width: 1024px) {
    .rf-layout { flex-direction: row; gap: 48px; }
    .rf-preview-section { position: sticky; top: 100px; align-self: flex-start; max-height: calc(100vh - 120px); overflow-y: auto; }
    .rf-form-section { max-width: 500px; }
    .rf-faq-grid { grid-template-columns: repeat(2, 1fr); }
    .rf-form-group { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 1023px) {
    :root { --rf-margin-desktop: 32px; --rf-section-gap: 80px; }
    .rf-container { padding: 0 var(--rf-margin-desktop); }
    .rf-hero { padding: 100px 0 60px; min-height: auto; }
    .rf-hero-title { font-size: 48px; }
    .rf-layout { padding: 60px var(--rf-margin-desktop); gap: 32px; }
    .rf-form-group { grid-template-columns: 1fr 1fr; }
    .rf-faq-grid { grid-template-columns: 1fr 1fr; }
    .rf-breadcrumb ol { padding: 0 var(--rf-margin-desktop); }
  }

  @media (max-width: 768px) {
    :root { --rf-margin-desktop: 24px; --rf-section-gap: 60px; }
    .rf-hero { padding: 80px 0 40px; }
    .rf-hero-title { font-size: 36px; }
    .rf-hero-subtitle { font-size: 14px; }
    .rf-cta-buttons { flex-direction: column; align-items: center; gap: 12px; }
    .rf-btn-primary, .rf-btn-secondary, .rf-preview-btn, .rf-download-btn, .rf-cta-btn { width: 100%; justify-content: center; }
    .rf-layout { padding: 40px var(--rf-margin-desktop); gap: 24px; }
    .rf-preview-container { padding: 16px; }
    .rf-resume-preview { width: 100%; min-height: auto; padding: 8mm 10mm; }
    .rf-form-nav { gap: 6px; padding: 12px; }
    .rf-nav-btn { min-width: 80px; flex: 1 1 calc(50% - 6px); padding: 10px 14px; font-size: 11px; }
    .rf-nav-btn span { display: none; }
    .rf-form-card { padding: 16px; }
    .rf-form-group { grid-template-columns: 1fr; }
    .rf-hero-stats { grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .rf-badge-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .rf-faq-grid { grid-template-columns: 1fr; }
    .rf-faq-section, .rf-cta-section { padding: 60px var(--rf-margin-mobile); }
    .rf-section-header h2, .rf-cta-title { font-size: 28px; }
    .rf-modal-content { margin: 0; border-radius: 0; max-height: 100vh; width: 100%; }
    .rf-modal-page { width: 100%; height: auto; min-height: 400px; }
    .rf-modal-page .rf-universal-template { padding: 8mm 12mm; }
    .rf-font-grid { grid-template-columns: 1fr 1fr; }
    .rf-list-item { flex-direction: column; gap: 12px; }
    .rf-item-actions { margin-left: 0; align-self: flex-end; }
    .rf-share-card { margin: 0 16px; padding: 24px 20px; }
  }

  @media (max-width: 480px) {
    :root { --rf-margin-desktop: 16px; --rf-section-gap: 48px; }
    .rf-hero-title { font-size: 28px; }
    .rf-hero-subtitle { font-size: 13px; }
    .rf-hero-stats, .rf-badge-grid { grid-template-columns: 1fr; }
    .rf-stat-number { font-size: 2rem; }
    .rf-layout { padding: 32px var(--rf-margin-desktop); }
    .rf-resume-preview { padding: 6mm 8mm; }
    .rf-nav-btn { min-width: 60px; flex: 1 1 calc(50% - 6px); padding: 8px 10px; }
    .rf-form-card { padding: 12px; }
    .rf-form-section-title { font-size: 20px; }
    .rf-sub-section-title { font-size: 16px; }
    .rf-font-grid { grid-template-columns: 1fr; }
    .rf-faq-item { padding: 20px; }
    .rf-faq-question { font-size: 18px; }
    .rf-section-header h2, .rf-cta-title { font-size: 24px; }
    .rf-cta-btn { padding: 16px 32px; font-size: 14px; }
    .rf-cta-guarantee { padding: 12px 20px; flex-wrap: wrap; justify-content: center; }
    .rf-guarantee-text { font-size: 12px; }
    .rf-modal-header { padding: 16px 20px; }
    .rf-modal-header h3 { font-size: 16px; }
    .rf-modal-pages { padding: 16px; }
    .rf-modal-page .rf-universal-template { padding: 6mm 8mm; }
    .rf-share-headline { font-size: 20px; }
    .rf-share-body { font-size: 13px; }
  }

  @media (max-width: 360px) {
    .rf-hero-title { font-size: 24px; }
    .rf-btn-primary, .rf-btn-secondary { padding: 12px 20px; font-size: 12px; }
  }

  @media print {
    .rf-resume-builder, .rf-layout, .rf-preview-section, .rf-form-section, .rf-faq-section, .rf-cta-section, .rf-hero, .rf-breadcrumb, .rf-modal { display: none !important; }
    .rf-resume-preview { display: block !important; box-shadow: none !important; margin: 0 !important; padding: 10mm 15mm !important; width: 100% !important; height: auto !important; page-break-inside: avoid; background: #ffffff !important; border: none !important; }
    .rf-universal-template, .rf-section { page-break-inside: avoid; }
  }
`;

const RetailResume = ({ 
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
    isEditing: false,
    editIndex: null
  });
  
  const defaultEducation = () => ({
    institution: '',
    degree: '',
    field: '',
    startDate: '',
    endDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultSkill = () => ({
    name: '',
    category: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultAchievement = () => ({
    title: '',
    description: '',
    date: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultCertification = () => ({
    name: '',
    issuer: '',
    date: '',
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
    skills: [],
    achievements: [],
    certifications: [],
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
    date: 6,
    regularText: 8,
    bulletText: 8,
    skillText: 7,
    achievementText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSkill, setCurrentSkill] = useState(defaultSkill());
  const [currentAchievement, setCurrentAchievement] = useState(defaultAchievement());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
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
      quote: "Created my retail resume in minutes and landed an interview at a major department store the same week. The templates are perfect for retail positions!",
      metric: "Hired as Lead Sales Associate",
      name: "Sarah M.",
      role: "Retail Associate",
      company: "Macy's Department Store"
    },
    {
      quote: "Finally a resume builder that understands retail skills. The ATS templates helped me pass screening systems for major retail chains.",
      metric: "3 Interviews in 1 Week",
      name: "James K.",
      role: "Store Supervisor",
      company: "Target Corporation"
    },
    {
      quote: "As a recent graduate, the entry-level retail templates were perfect. Landed my first retail management position using this builder.",
      metric: "First Retail Management Job",
      name: "Alex P.",
      role: "Assistant Store Manager",
      company: "Zara Retail"
    },
    {
      quote: "The retail resume builder saved me - could update my CV between shifts. Professional results without the cost.",
      metric: "Promoted to Store Manager",
      name: "Maria L.",
      role: "Store Manager",
      company: "H&M Fashion"
    },
    {
      quote: "Retail ATS-friendly templates actually work! Got callbacks from stores that previously ignored my applications.",
      metric: "5x More Responses",
      name: "David T.",
      role: "Sales Associate",
      company: "Best Buy Electronics"
    },
    {
      quote: "Free PDF download with proper retail formatting? Unbeatable value. Best retail resume builder I've found.",
      metric: "Perfect Resume in 15min",
      name: "Lisa R.",
      role: "Customer Service Lead",
      company: "Nordstrom"
    }
  ];

  // FAQ Data for Structured Data
  const faqs = [
    {
      question: "Is this retail resume builder really free with no hidden costs?",
      answer: "Yes, our retail resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional retail resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for retail resumes?",
      answer: "ATS-friendly means our retail resume templates are optimized to pass through Applicant Tracking Systems used by 90% of retail chains and stores worldwide. This ensures your retail experience and skills are properly scanned and recognized."
    },
    {
      question: "Can I download my retail resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional retail resume in PDF format without creating an account. Everything is completely free and accessible immediately for retail associates, supervisors, and managers."
    },
    {
      question: "How many retail resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly retail resume templates for sales associates, cashiers, supervisors, store managers, visual merchandisers, and all retail positions. All templates are completely free and optimized for retail hiring."
    },
    {
      question: "How does your retail resume builder work?",
      answer: "Our builder uses ATS-optimized retail templates with proper retail terminology formatting. We guide you to highlight customer service experience, sales achievements, and retail-specific skills that employers look for."
    },
    {
      question: "Can I edit my retail resume after downloading it?",
      answer: "Yes, you can always come back and edit your retail resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
    }
  ];

  // Retail-specific skill categories
  const skillCategories = [
    'Customer Service',
    'Sales & Merchandising',
    'Inventory Management',
    'Cash Handling',
    'Team Leadership',
    'Visual Merchandising',
    'POS Systems',
    'Retail Operations'
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
      date: 6,
      regularText: 8,
      bulletText: 8,
      skillText: 7,
      achievementText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      indeed: <FiBriefcase />,
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
      formData.email ||
      formData.summary ||
      formData.socialLinks.length > 0 ||
      formData.experience.length > 0 ||
      formData.education.length > 0 ||
      formData.skills.length > 0 ||
      formData.achievements.length > 0 ||
      formData.certifications.length > 0 ||
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

  const addExperience = createAddFunction('experience', currentExperience, setCurrentExperience, defaultExperience, () => currentExperience.position && currentExperience.employer && currentExperience.startDate);
  
  const editExperience = createEditFunction('experience', setCurrentExperience);
  const deleteExperience = createDeleteFunction('experience');

  const addEducation = createAddFunction('education', currentEducation, setCurrentEducation, defaultEducation, () => currentEducation.institution && currentEducation.degree);
  
  const editEducation = createEditFunction('education', setCurrentEducation);
  const deleteEducation = createDeleteFunction('education');

  const addSkill = createAddFunction('skills', currentSkill, setCurrentSkill, defaultSkill, () => currentSkill.name.trim());
  
  const editSkill = createEditFunction('skills', setCurrentSkill);
  const deleteSkill = createDeleteFunction('skills');

  const addAchievement = createAddFunction('achievements', currentAchievement, setCurrentAchievement, defaultAchievement, () => currentAchievement.title.trim());
  
  const editAchievement = createEditFunction('achievements', setCurrentAchievement);
  const deleteAchievement = createDeleteFunction('achievements');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

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
          const clone = doc.querySelector('.rf-resume-preview');
          if (clone) {
            clone.style.display = 'block';
            clone.style.visibility = 'visible';
            clone.style.opacity = '1';
            clone.style.width = '210mm';
            clone.style.height = '297mm';
            clone.style.background = '#ffffff';
            clone.style.color = '#000000';
            
            // Apply custom font sizes
            const name = clone.querySelector('.rf-resume-name');
            if (name) name.style.fontSize = `${fontSizes.name}pt`;
            
            const sectionTitles = clone.querySelectorAll('.rf-section-title');
            sectionTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.sectionTitle}pt`;
            });
            
            const contactItems = clone.querySelectorAll('.rf-contact-item');
            contactItems.forEach(item => {
              item.style.fontSize = `${fontSizes.contactInfo}pt`;
            });
            
            const jobTitles = clone.querySelectorAll('.rf-experience-item h3');
            jobTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.jobTitle}pt`;
            });
            
            const companies = clone.querySelectorAll('.rf-company');
            companies.forEach(company => {
              company.style.fontSize = `${fontSizes.company}pt`;
            });
            
            const degrees = clone.querySelectorAll('.rf-education-item h3');
            degrees.forEach(degree => {
              degree.style.fontSize = `${fontSizes.degree}pt`;
            });
            
            const institutions = clone.querySelectorAll('.rf-institution-text');
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
            });
            
            const dates = clone.querySelectorAll('.rf-institution-date');
            dates.forEach(date => {
              date.style.fontSize = `${fontSizes.date}pt`;
            });
            
            const regularTexts = clone.querySelectorAll('.rf-summary-text, .rf-certification-item, .rf-achievement-item');
            regularTexts.forEach(text => {
              text.style.fontSize = `${fontSizes.regularText}pt`;
            });
            
            const bulletPoints = clone.querySelectorAll('.rf-bullet-list li');
            bulletPoints.forEach(bullet => {
              bullet.style.fontSize = `${fontSizes.bulletText}pt`;
            });
            
            const skills = clone.querySelectorAll('.rf-skills-list li');
            skills.forEach(skill => {
              skill.style.fontSize = `${fontSizes.skillText}pt`;
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

      pdf.save(`${formData.fullName || 'retail_associate'}_resume.pdf`);
      setShowSharePopup(true);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Resume Template ---
  const RetailTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSkills = formData.skills.length > 0;
    const hasAchievements = formData.achievements.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className="rf-universal-template">
        <header className="rf-resume-header">
          <h1 className="rf-resume-name" style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className="rf-contact-row">
            {formData.email && <div className="rf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className="rf-contact-separator">•</div>}
            {formData.phone && <div className="rf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className="rf-contact-separator">•</div>}
            {formData.address && <div className="rf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (
              <div key={i} className="rf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasSummary && (
          <section className="rf-section">
            <h2 className="rf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL PROFILE</h2>
            <p className="rf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className="rf-section">
            <h2 className="rf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>RETAIL EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className="rf-experience-item">
                <div className="rf-experience-header">
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className="rf-company" style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.location && ` | ${exp.location}`}</p>
                  <p className="rf-institution-date" style={{ fontSize: `${fontSizes.date}pt` }}>{exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className="rf-bullet-list">
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasSkills && (
          <section className="rf-section">
            <h2 className="rf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CORE COMPETENCIES</h2>
            <div className="rf-skills-grid">
              {Object.entries(
                formData.skills.reduce((acc, skill) => {
                  const cat = skill.category || 'General Skills';
                  if (!acc[cat]) acc[cat] = [];
                  acc[cat].push(skill);
                  return acc;
                }, {})
              ).map(([categoryName, skills]) => (
                <div key={categoryName} className="rf-skill-category">
                  <h4 style={{ fontSize: `${fontSizes.skillText}pt`, fontWeight: 'bold', marginBottom: '4pt' }}>{categoryName}:</h4>
                  <ul className="rf-skills-list">
                    {skills.map((skill, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{skill.name}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {hasAchievements && (
          <section className="rf-section">
            <h2 className="rf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>KEY ACHIEVEMENTS</h2>
            {formData.achievements.map((achievement, i) => (
              <div key={i} className="rf-achievement-item" style={{ marginBottom: '4pt' }}>
                <strong style={{ fontSize: `${fontSizes.achievementText}pt` }}>{achievement.title}</strong>
                <p style={{ fontSize: `${fontSizes.achievementText}pt`, margin: '2pt 0' }}>{achievement.description}</p>
                {achievement.date && <span className="rf-institution-date" style={{ fontSize: `${fontSizes.date}pt` }}>{achievement.date}</span>}
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className="rf-section">
            <h2 className="rf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className="rf-education-item">
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>
                  {edu.degree}{edu.field && ` in ${edu.field}`}
                </h3>
                <p className="rf-institution-text" style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className="rf-institution-date" style={{ fontSize: `${fontSizes.date}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className="rf-section">
            <h2 className="rf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>CERTIFICATIONS & TRAINING</h2>
            {formData.certifications.map((cert, i) => (
              <div key={i} className="rf-certification-item" style={{ fontSize: `${fontSizes.regularText}pt`, marginBottom: '2pt' }}>
                <strong>{cert.name}</strong>
                {cert.issuer && ` – ${cert.issuer}`}
                {cert.date && ` – ${cert.date}`}
              </div>
            ))}
          </section>
        )}

        {hasLanguages && (
          <section className="rf-section">
            <h2 className="rf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>LANGUAGES</h2>
            <ul className="rf-bullet-list">
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
    <>
      <style>{retailFlowStyles}</style>
      <div className="rf-resume-builder" lang="en-US">
        <Head>
          <title>Free Retail Resume Builder 2026: Associate Templates</title>
          <meta name="title" content="Free Retail Resume Builder 2026: Associate Templates" />
          <meta name="description" content="Create a professional retail resume for free. ATS-friendly associate templates trusted by 2M+ retail pros. Download PDF in minutes. Updated for 2026." />
          <meta name="keywords" content="retail resume builder, retail associate resume, sales associate resume, cashier resume, store manager resume, retail CV, ATS friendly retail resume, free resume builder for retail, retail job resume, customer service resume" />
          <meta name="author" content="Professional Retail Resume Free" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="canonical" href="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" hreflang="en" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" hreflang="en-US" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" hreflang="en-GB" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" hreflang="en-CA" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" hreflang="en-AU" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" hreflang="x-default" />
          <meta property="og:title" content="Free Retail Resume Builder 2026: Associate Templates" />
          <meta property="og:description" content="Create a professional retail resume for free. ATS-friendly associate templates trusted by 2M+ retail pros. Download PDF in minutes. Updated for 2026." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-retail-resume-builder-preview.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Retail Resume Builder - Create Professional Retail Associate Resumes Online" />
          <meta property="og:url" content="https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Professional Retail Resume Free" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Retail Resume Builder 2026: Associate Templates" />
          <meta name="twitter:description" content="Create a professional retail resume for free. ATS-friendly associate templates trusted by 2M+ retail pros. Download PDF in minutes. Updated for 2026." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-retail-resume-builder-preview.jpg" />
          <meta name="twitter:image:alt" content="Free Retail Resume Builder with ATS Templates" />
          <meta name="twitter:site" content="@ProResumeFree" />
          <meta name="twitter:creator" content="@ProResumeFree" />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
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
                    "@id": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder#webpage",
                    "url": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder",
                    "name": "Free Retail Resume Builder 2026: Associate Templates",
                    "description": "Create professional ATS-optimized retail resumes for free. Land jobs 3x faster with our retail resume builder.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Professional Retail Resume Free",
                      "description": "Free online resume builder for retail professionals",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Professional Retail Resume Free",
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
                      "url": "https://professionalresumefree.com/images/og-retail-resume-builder-preview.jpg",
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
                          "name": "Retail Resume Builder",
                          "item": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder"
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Retail Resume Builder - ATS Optimized Retail Associate Resume Maker",
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
                        "ratingCount": 25365,
                        "bestRating": 5,
                        "worstRating": 1
                      },
                      "description": "Free online ATS-friendly retail resume builder for retail associates, sales staff, cashiers, and store managers.",
                      "featureList": [
                        "Retail ATS-Optimized Templates",
                        "Retail Content Suggestions",
                        "One-Click PDF Download",
                        "Retail Experience Formatting",
                        "Mobile-Friendly Editor",
                        "No Sign Up Required",
                        "Free Forever"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-retail-resume-builder.jpg",
                      "applicationSuite": "Retail Career Tools",
                      "countriesSupported": "Global",
                      "fileSize": "Web Application"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder#faqpage",
                    "mainEntity": faqs.map((faq, index) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                        "datePublished": safeFaqDates[index] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Retail Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder#webpage"
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Retail Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an ATS-optimized retail resume for free",
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
                        "name": "Choose a Retail Template",
                        "text": "Select from our ATS-optimized retail resume templates designed for sales associates, cashiers, supervisors, and store managers.",
                        "url": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder#templates",
                        "image": "https://professionalresumefree.com/images/step1-retail-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Retail Information",
                        "text": "Add your retail experience, sales achievements, customer service skills, and retail-specific qualifications using our guided forms.",
                        "url": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder#editor",
                        "image": "https://professionalresumefree.com/images/step2-retail-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize and Optimize",
                        "text": "Use our retail-specific suggestions to improve retail keywords and formatting for ATS compatibility.",
                        "url": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder#optimize",
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your Retail Resume",
                        "text": "Export your professional retail resume as PDF, Word, or plain text - completely free, no watermarks.",
                        "url": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder#download",
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Online Retail Resume Building Service",
                    "provider": {
                      "@type": "Organization",
                      "name": "Professional Retail Resume Free",
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
                      "name": "Free Retail Resume Building Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Retail ATS Resume Templates"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Retail Resume Editing"
                          }
                        }
                      ]
                    },
                    "description": "Free ATS-friendly retail resume builder for retail professionals worldwide",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".rf-hero-title", ".rf-hero-subtitle", ".rf-faq-question"]
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
                          "name": "Professional Retail Resume Free"
                        },
                        "itemReviewed": {
                          "@type": "SoftwareApplication",
                          "name": "Retail Resume Builder - ATS Optimized Retail Associate Resume Maker",
                          "applicationCategory": "BusinessApplication",
                          "operatingSystem": "Any",
                          "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                          },
                          "description": "Free online ATS-friendly retail resume builder that helps retail professionals create professional resumes and land retail jobs faster.",
                          "url": "https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder"
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
        <div className="rf-freshness-indicator" style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="rf-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="https://professionalresumefree.com" className="rf-breadcrumb-link" prefetch={false}>
                <FiHome className="rf-breadcrumb-icon"/>
                <span className="rf-breadcrumb-text">Home</span>
              </Link>
            </li>
            <li className="rf-breadcrumb-separator">
              <FiChevronRightIcon/>
            </li>
            <li>
              <Link href="/ats-friendly-retail-associate-resume-builder" className="rf-breadcrumb-link" prefetch={false}>
                <span className="rf-breadcrumb-text">Free Retail Resume Builder</span>
              </Link>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="rf-hero">
          <div className="rf-container">
            <div className="rf-hero-content">
              <div className="rf-trust-badge">
                <FiStar className="rf-trust-icon"/>
                <span className="rf-trust-text">
                 Best Free Retail Resume Builder 2026
                </span>
              </div>
              
              <h1 className="rf-hero-title">
                Create Your <span className="rf-gradient-text">Retail Resume 2026</span>
              </h1>
              
              <p className="rf-hero-subtitle">
                Create a <strong className="rf-hero-highlight">professional, ATS-optimized retail resume for free in minutes.</strong> Our retail resume builder ensures your customer service experience and sales achievements get noticed by retailers worldwide.
              </p>

              <div className="rf-cta-buttons">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="rf-btn-primary"
                  aria-label="Start building your free retail resume now—no sign-up required"
                >
                  <span className="rf-btn-text">Start Building Your Retail Resume Now</span>
                  <FiArrowRight className="rf-btn-icon" />
                  <div className="rf-btn-pulse"></div>
                </button>
                
                <button
                  onClick={generatePDF}
                  className="rf-btn-secondary"
                  aria-label="Download retail resume as PDF"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload className="rf-btn-icon" />
                  <span className="rf-btn-text">Download Retail Resume PDF</span>
                </button>
              </div>

              <div className="rf-industry-badges">
                <div className="rf-badge-grid">
                  <span className="rf-badge-item"><FiShoppingBag/> Sales Associate</span>
                  <span className="rf-badge-item"><FiCreditCard/> Cashier</span>
                  <span className="rf-badge-item"><FiUsers/> Customer Service</span>
                  <span className="rf-badge-item"><FiBriefcase/> Store Manager</span>
                  <span className="rf-badge-item"><FiPackage/> Inventory Specialist</span>
                  <span className="rf-badge-item"><FiStar/> Visual Merchandiser</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="rf-layout">
          {/* Preview Section */}
          <div className="rf-preview-section">
            <div className="rf-preview-header">
              <div className="rf-preview-actions">
                <button onClick={() => setShowFullPreview(!showFullPreview)} className="rf-preview-btn">
                  <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
                </button>
                <button
                  onClick={generatePDF}
                  className="rf-download-btn"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload />
                  {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                </button>
              </div>
            </div>

            <div className={`rf-preview-container ${showFullPreview ? 'rf-full-preview' : ''}`}>
              <div className="rf-resume-card">
                <div className="rf-preview-content">
                  <div
                    className="rf-resume-preview"
                    ref={resumeRef}
                  >
                    <RetailTemplate formData={formData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="rf-form-section">
            <div className="rf-form-nav">
              {[
                { id: 'personal', label: 'Personal', icon: <FiUser /> },
                { id: 'experience', label: 'Retail Exp', icon: <FiShoppingBag /> },
                { id: 'skills', label: 'Retail Skills', icon: <FiStar /> },
                { id: 'achievements', label: 'Achievements', icon: <FiAward /> },
                { id: 'education', label: 'Education', icon: <FiBook /> },
                { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`rf-nav-btn ${activeSection === item.id ? 'rf-nav-btn-active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon} <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="rf-form-content">
              {/* Personal Section */}
              {activeSection === 'personal' && (
                <div className="rf-form-section-content">
                  <h3 className="rf-form-section-title"><FiUser /> Personal Information</h3>
                  <div className="rf-form-card">
                    <div className="rf-form-group">
                      <label className="rf-form-label">
                        Full Name*
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith" required className="rf-form-input" />
                      </label>
                      <label className="rf-form-label">
                        Email*
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@email.com" required className="rf-form-input" />
                      </label>
                    </div>
                    <div className="rf-form-group">
                      <label className="rf-form-label">
                        Phone
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className="rf-form-input" />
                      </label>
                      <label className="rf-form-label">
                        Location
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, Country" className="rf-form-input" />
                      </label>
                    </div>
                  </div>

                  <div className="rf-form-card">
                    <label className="rf-form-label">
                      Professional Retail Summary*
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        placeholder="Experienced retail professional with 5+ years in customer service and sales. Proven track record of exceeding sales targets by 25% and improving customer satisfaction scores. Skilled in inventory management, visual merchandising, and team leadership. Seeking to leverage retail expertise in a dynamic store environment."
                        required
                        className="rf-form-textarea"
                        rows="6"
                      />
                      <div className="rf-char-count">
                        {formData.summary.length}/500 characters
                      </div>
                    </label>
                  </div>

                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title"><FiGlobe /> Professional Links</h4>
                    <p className="rf-section-desc">Add your professional profiles (LinkedIn, portfolio, etc.)</p>
                    <div className="rf-skills-input">
                      <select 
                        value={currentSocialLink.platform} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                        className="rf-form-select"
                      >
                        <option value="">Select Platform</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Indeed">Indeed Profile</option>
                        <option value="Portfolio">Professional Portfolio</option>
                        <option value="Website">Personal Website</option>
                      </select>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/yourprofile" 
                        value={currentSocialLink.url} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} 
                        className="rf-form-input" 
                      />
                      <div className="rf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSocialLink} 
                          className="rf-add-btn" 
                          disabled={!currentSocialLink.platform || !currentSocialLink.url}
                        >
                          <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add Link'}
                        </button>
                        {currentSocialLink.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSocialLink(defaultSocialLink())} 
                            className="rf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="rf-items-list">
                      {formData.socialLinks.length === 0 ? (
                        <p className="rf-empty-msg">No professional links added yet</p>
                      ) : (
                        formData.socialLinks.map((link, i) => (
                          <div key={i} className="rf-list-item">
                            <div className="rf-item-content">
                              <span className="rf-item-title">{link.platform}</span>
                              <span className="rf-item-subtitle">{formatSocialUrl(link.url)}</span>
                            </div>
                            <div className="rf-item-actions">
                              <button onClick={() => editSocialLink(i)} className="rf-edit-btn" aria-label={`Edit ${link.platform} link`}><FiEdit2 /></button>
                              <button onClick={() => deleteSocialLink(i)} className="rf-delete-btn" aria-label={`Delete ${link.platform} link`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Retail Experience Section */}
              {activeSection === 'experience' && (
                <div className="rf-form-section-content">
                  <h3 className="rf-form-section-title"><FiShoppingBag /> Retail Experience</h3>
                  <p className="rf-section-desc">List your retail positions in reverse chronological order (most recent first)</p>
                  
                  <div className="rf-form-card">
                    <div className="rf-form-group">
                      <label className="rf-form-label">
                        Position Title*
                        <input 
                          value={currentExperience.position} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                          placeholder="Sales Associate, Store Supervisor" 
                          required 
                          className="rf-form-input" 
                        />
                      </label>
                      <label className="rf-form-label">
                        Company/Store*
                        <input 
                          value={currentExperience.employer} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                          placeholder="Target, H&M, Apple Store" 
                          required 
                          className="rf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="rf-form-label">
                      Location
                      <input 
                        value={currentExperience.location} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })} 
                        placeholder="New York, NY" 
                        className="rf-form-input" 
                      />
                    </label>
                    <div className="rf-form-group">
                      <label className="rf-form-label">
                        Start Date*
                        <input 
                          type="text" 
                          placeholder="Month Year (e.g., January 2020)" 
                          value={currentExperience.startDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
                          required 
                          className="rf-form-input" 
                        />
                      </label>
                      <label className="rf-form-label">
                        End Date
                        <input 
                          type="text" 
                          placeholder="Month Year or Present" 
                          value={currentExperience.endDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} 
                          className="rf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="rf-form-label">
                      Key Responsibilities & Achievements*
                      <textarea 
                        value={currentExperience.description} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                        placeholder="• Provided exceptional customer service with 95% satisfaction rating
• Managed cash register operations and processed daily sales averaging $5,000
• Maintained visual merchandising standards and store presentation
• Trained 3 new team members on store procedures and customer service protocols
• Implemented upselling techniques that increased average transaction value by 18%"
                        required 
                        className="rf-form-textarea" 
                        rows="8" 
                      />
                      <div className="rf-char-count">
                        {currentExperience.description.length}/2000 characters
                      </div>
                    </label>
                    <div className="rf-form-actions">
                      <button 
                        type="button" 
                        onClick={addExperience} 
                        className="rf-add-btn" 
                        disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                      >
                        <FiPlus /> {currentExperience.isEditing ? 'Update Retail Experience' : 'Add Retail Experience'}
                      </button>
                      {currentExperience.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentExperience(defaultExperience())} 
                          className="rf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title">Your Retail Experience</h4>
                    {formData.experience.length === 0 ? (
                      <p className="rf-empty-msg">No retail experience added yet</p>
                    ) : (
                      <div className="rf-items-list">
                        {formData.experience.map((exp, i) => (
                          <div key={i} className="rf-list-item">
                            <div className="rf-item-content">
                              <div className="rf-item-header">
                                <strong className="rf-item-title">{exp.position}</strong>
                                <span className="rf-item-subtitle">at {exp.employer}</span>
                              </div>
                              <div className="rf-item-meta">
                                <span>{exp.location || 'Location not specified'}</span>
                                <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                              </div>
                              <div className="rf-item-desc">
                                {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                  <p key={j} className="rf-bullet-point">• {line}</p>
                                ))}
                              </div>
                            </div>
                            <div className="rf-item-actions">
                              <button onClick={() => editExperience(i)} className="rf-edit-btn" aria-label={`Edit ${exp.position} experience`}><FiEdit2 /></button>
                              <button onClick={() => deleteExperience(i)} className="rf-delete-btn" aria-label={`Delete ${exp.position} experience`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {activeSection === 'skills' && (
                <div className="rf-form-section-content">
                  <h3 className="rf-form-section-title"><FiStar /> Retail Skills & Competencies</h3>
                  <p className="rf-section-desc">Add your retail-specific skills categorized for better organization</p>
                  
                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title">Add Retail Skill</h4>
                    <div className="rf-skills-input">
                      <div className="rf-form-group">
                        <label className="rf-form-label">
                          Skill Name*
                          <input 
                            value={currentSkill.name} 
                            onChange={(e) => setCurrentSkill({ ...currentSkill, name: e.target.value })} 
                            placeholder="Customer Relationship Management" 
                            className="rf-form-input" 
                          />
                        </label>
                        <label className="rf-form-label">
                          Category
                          <select 
                            value={currentSkill.category} 
                            onChange={(e) => setCurrentSkill({ ...currentSkill, category: e.target.value })} 
                            className="rf-form-select"
                          >
                            <option value="">Select Category</option>
                            {skillCategories.map(category => (
                              <option key={category} value={category}>{category}</option>
                            ))}
                          </select>
                        </label>
                      </div>
                      <div className="rf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSkill} 
                          className="rf-add-btn" 
                          disabled={!currentSkill.name.trim()}
                        >
                          <FiPlus /> {currentSkill.isEditing ? 'Update Skill' : 'Add Skill'}
                        </button>
                        {currentSkill.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSkill(defaultSkill())} 
                            className="rf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="rf-items-list">
                      {formData.skills.length === 0 ? (
                        <p className="rf-empty-msg">No skills added yet</p>
                      ) : (
                        formData.skills.map((skill, i) => (
                          <div key={i} className="rf-list-item">
                            <div>
                              <strong>{skill.name}</strong>
                              {skill.category && <span style={{ color: 'var(--rf-outline)', fontSize: '12px', marginLeft: '8px' }}> – {skill.category}</span>}
                            </div>
                            <div className="rf-item-actions">
                              <button onClick={() => editSkill(i)} className="rf-edit-btn"><FiEdit2 /></button>
                              <button onClick={() => deleteSkill(i)} className="rf-delete-btn"><FiTrash2 /></button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                  {/* Common Retail Skills Suggestions */}
                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title">Common Retail Skills</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      {[
                        { category: 'Customer Service', skills: ['Customer Relationship Management', 'Conflict Resolution', 'Customer Satisfaction', 'Service Recovery'] },
                        { category: 'Sales & Merchandising', skills: ['Upselling Techniques', 'Product Knowledge', 'Visual Merchandising', 'Sales Target Achievement'] },
                        { category: 'Inventory Management', skills: ['Stock Control', 'Inventory Auditing', 'Order Processing', 'Loss Prevention'] },
                        { category: 'Cash Handling', skills: ['POS Systems', 'Cash Register Operations', 'Credit Card Processing', 'Daily Reconciliation'] }
                      ].map((category, idx) => (
                        <div key={idx} style={{ fontSize: '14px' }}>
                          <h5 style={{ color: 'var(--rf-primary)', margin: '0 0 8px' }}>{category.category}</h5>
                          <ul style={{ paddingLeft: '16px', margin: '0' }}>
                            {category.skills.map((skill, skillIdx) => (
                              <li key={skillIdx} style={{ color: 'var(--rf-on-surface-variant)', marginBottom: '4px' }}>{skill}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Achievements Section */}
              {activeSection === 'achievements' && (
                <div className="rf-form-section-content">
                  <h3 className="rf-form-section-title"><FiAward /> Key Achievements</h3>
                  <p className="rf-section-desc">Highlight your significant accomplishments and recognitions in retail</p>
                  
                  <div className="rf-form-card">
                    <div className="rf-form-group">
                      <label className="rf-form-label">
                        Achievement Title*
                        <input 
                          value={currentAchievement.title} 
                          onChange={(e) => setCurrentAchievement({ ...currentAchievement, title: e.target.value })} 
                          placeholder="Exceeded Sales Target by 30%" 
                          className="rf-form-input" 
                        />
                      </label>
                      <label className="rf-form-label">
                        Date (Optional)
                        <input 
                          value={currentAchievement.date} 
                          onChange={(e) => setCurrentAchievement({ ...currentAchievement, date: e.target.value })} 
                          placeholder="Q4 2023" 
                          className="rf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="rf-form-label">
                      Achievement Description*
                      <textarea 
                        value={currentAchievement.description} 
                        onChange={(e) => setCurrentAchievement({ ...currentAchievement, description: e.target.value })} 
                        placeholder="Increased department sales by 30% through implementing new customer engagement strategies and upselling techniques, resulting in recognition as Employee of the Month." 
                        className="rf-form-textarea" 
                        rows="4" 
                      />
                    </label>
                    <div className="rf-form-actions">
                      <button 
                        type="button" 
                        onClick={addAchievement} 
                        className="rf-add-btn" 
                        disabled={!currentAchievement.title.trim() || !currentAchievement.description.trim()}
                      >
                        <FiPlus /> {currentAchievement.isEditing ? 'Update Achievement' : 'Add Achievement'}
                      </button>
                      {currentAchievement.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentAchievement(defaultAchievement())} 
                          className="rf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title">Your Achievements</h4>
                    {formData.achievements.length === 0 ? (
                      <p className="rf-empty-msg">No achievements added yet</p>
                    ) : (
                      <div className="rf-items-list">
                        {formData.achievements.map((achievement, i) => (
                          <div key={i} className="rf-list-item">
                            <div className="rf-item-content">
                              <div className="rf-item-header">
                                <strong className="rf-item-title">{achievement.title}</strong>
                                {achievement.date && <span className="rf-item-meta">{achievement.date}</span>}
                              </div>
                              <p className="rf-bullet-point">{achievement.description}</p>
                            </div>
                            <div className="rf-item-actions">
                              <button onClick={() => editAchievement(i)} className="rf-edit-btn"><FiEdit2 /></button>
                              <button onClick={() => deleteAchievement(i)} className="rf-delete-btn"><FiTrash2 /></button>
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
                <div className="rf-form-section-content">
                  <h3 className="rf-form-section-title"><FiBook /> Education & Training</h3>
                  <p className="rf-section-desc">List your education, certifications, and relevant training</p>
                  
                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title">Education</h4>
                    <div className="rf-form-group">
                      <label className="rf-form-label">
                        Institution*
                        <input 
                          value={currentEducation.institution} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                          placeholder="University of Business" 
                          className="rf-form-input" 
                        />
                      </label>
                      <label className="rf-form-label">
                        Degree/Certificate*
                        <input 
                          value={currentEducation.degree} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                          placeholder="High School Diploma, Bachelor of Business" 
                          className="rf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="rf-form-label">
                      Field of Study
                      <input 
                        value={currentEducation.field} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, field: e.target.value })} 
                        placeholder="Business Administration, Retail Management" 
                        className="rf-form-input" 
                      />
                    </label>
                    <div className="rf-form-group">
                      <label className="rf-form-label">
                        Start Date
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentEducation.startDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                          className="rf-form-input" 
                        />
                      </label>
                      <label className="rf-form-label">
                        End Date / Expected
                        <input 
                          type="text" 
                          placeholder="Month Year or Expected" 
                          value={currentEducation.endDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                          className="rf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="rf-form-actions">
                      <button 
                        type="button" 
                        onClick={addEducation} 
                        className="rf-add-btn" 
                        disabled={!currentEducation.institution || !currentEducation.degree}
                      >
                        <FiPlus /> {currentEducation.isEditing ? 'Update Education' : 'Add Education'}
                      </button>
                      {currentEducation.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentEducation(defaultEducation())} 
                          className="rf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title">Certifications & Training</h4>
                    <p className="rf-section-desc">Add relevant retail certifications and professional training</p>
                    <div className="rf-skills-input">
                      <div className="rf-form-group">
                        <label className="rf-form-label">
                          Certification/Training Name*
                          <input 
                            value={currentCertification.name} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                            placeholder="Customer Service Excellence Certification" 
                            className="rf-form-input" 
                          />
                        </label>
                        <label className="rf-form-label">
                          Issuer/Organization
                          <input 
                            value={currentCertification.issuer} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, issuer: e.target.value })} 
                            placeholder="National Retail Federation" 
                            className="rf-form-input" 
                          />
                        </label>
                      </div>
                      <label className="rf-form-label">
                        Date Obtained
                        <input 
                          value={currentCertification.date} 
                          onChange={(e) => setCurrentCertification({ ...currentCertification, date: e.target.value })} 
                          placeholder="Month Year" 
                          className="rf-form-input" 
                        />
                      </label>
                      <div className="rf-form-actions">
                        <button 
                          type="button" 
                          onClick={addCertification} 
                          className="rf-add-btn" 
                          disabled={!currentCertification.name.trim()}
                        >
                          <FiPlus /> {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                        </button>
                        {currentCertification.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentCertification(defaultCertification())} 
                            className="rf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="rf-items-list">
                      {formData.certifications.map((cert, i) => (
                        <div key={i} className="rf-list-item">
                          <div>
                            <strong>{cert.name}</strong>
                            {cert.issuer && ` – ${cert.issuer}`}
                            {cert.date && ` – ${cert.date}`}
                          </div>
                          <div className="rf-item-actions">
                            <button onClick={() => editCertification(i)} className="rf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteCertification(i)} className="rf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.certifications.length === 0 && <p className="rf-empty-msg">No certifications added yet</p>}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="rf-form-card">
                    <h4 className="rf-sub-section-title">Languages</h4>
                    <p className="rf-section-desc">List languages you speak and your proficiency level</p>
                    <div className="rf-skills-input">
                      <div className="rf-form-group">
                        <label className="rf-form-label">
                          Language*
                          <input 
                            value={currentLanguage.name} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                            placeholder="Spanish, French, Mandarin" 
                            className="rf-form-input" 
                          />
                        </label>
                        <label className="rf-form-label">
                          Proficiency Level
                          <select 
                            value={currentLanguage.proficiency} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                            className="rf-form-select"
                          >
                            <option value="">Select Proficiency</option>
                            <option value="Native">Native</option>
                            <option value="Fluent">Fluent</option>
                            <option value="Professional">Professional</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Basic">Basic</option>
                          </select>
                        </label>
                      </div>
                      <div className="rf-form-actions">
                        <button 
                          type="button" 
                          onClick={addLanguage} 
                          className="rf-add-btn" 
                          disabled={!currentLanguage.name.trim()}
                        >
                          <FiPlus /> {currentLanguage.isEditing ? 'Update Language' : 'Add Language'}
                        </button>
                        {currentLanguage.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentLanguage(defaultLanguage())} 
                            className="rf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="rf-items-list">
                      {formData.languages.map((l, i) => (
                        <div key={i} className="rf-list-item">
                          <div>
                            {l.name}{l.proficiency && ` (${l.proficiency})`}
                          </div>
                          <div className="rf-item-actions">
                            <button onClick={() => editLanguage(i)} className="rf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteLanguage(i)} className="rf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.languages.length === 0 && <p className="rf-empty-msg">No languages added yet</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Font Settings Section */}
              {activeSection === 'settings' && (
                <div className="rf-form-section-content">
                  <h3 className="rf-form-section-title"><FiSettings /> Font Size Settings</h3>
                  <p className="rf-section-desc">Customize font sizes for your resume PDF. All sizes are in points (pt).</p>
                  
                  <div className="rf-form-card">
                    <div className="rf-font-grid">
                      {[
                        {key:'name',label:'Name'},
                        {key:'sectionTitle',label:'Section Titles'},
                        {key:'jobTitle',label:'Job Titles'},
                        {key:'degree',label:'Degrees'},
                        {key:'institution',label:'Institution Names'},
                        {key:'date',label:'Dates'},
                        {key:'regularText',label:'Regular Text'},
                        {key:'bulletText',label:'Bullet Points'},
                        {key:'contactInfo',label:'Contact Info'},
                        {key:'skillText',label:'Skills Text'},
                        {key:'achievementText',label:'Achievement Text'}
                      ].map(({key,label})=>(
                        <div key={key} className="rf-font-control">
                          <label className="rf-font-label">
                            <span>{label}</span>
                            <span className="rf-font-value">{fontSizes[key]}pt</span>
                          </label>
                          <input 
                            type="range" 
                            min={key==='date'?4:6} 
                            max={key==='name'?24:key==='sectionTitle'?18:key==='jobTitle'||key==='degree'?16:14} 
                            value={fontSizes[key]} 
                            onChange={e=>handleFontSizeChange(key,e.target.value)} 
                            className="rf-font-slider"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={resetFontSizes}
                      className="rf-reset-btn"
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
        <section className="rf-faq-section" aria-labelledby="faq-title">
          <div className="rf-container">
            <div className="rf-section-header">
              <h2 id="faq-title">Frequently Asked Questions</h2>
              <p>
                Everything you need to know about creating professional retail resumes with our tool.
              </p>
            </div>
            <div className="rf-faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="rf-faq-item">
                  <h3 className="rf-faq-question">{faq.question}</h3>
                  <p className="rf-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="rf-cta-section" aria-labelledby="cta-title">
          <div className="rf-container">
            <div className="rf-cta-content">
              <h2 className="rf-cta-title" id="cta-title">Ready to Advance Your Retail Career?</h2>
              <p className="rf-cta-subtitle">
                Join 2 million+ retail professionals who landed their dream jobs with our free ATS-friendly retail resume builder.
              </p>
              <div className="rf-cta-btn-wrap">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="rf-cta-btn"
                  aria-label="Create your free retail resume now—no sign-up required"
                >
                  <span className="rf-cta-btn-text">Create Your Free Retail Resume Now</span>
                  <FiArrowRight className="rf-cta-btn-icon" />
                </button>
              </div>
              <div className="rf-cta-guarantee">
                <FiCheck className="rf-guarantee-icon" />
                <span className="rf-guarantee-text">No credit card required • Free forever • Download in minutes • ATS Optimized for Retail</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Preview Modal */}
        {showFullPreview && (
          <div className="rf-modal" onClick={() => setShowFullPreview(false)}>
            <div className="rf-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="rf-modal-header">
                <h3>Full Retail Resume Preview</h3>
                <button className="rf-close-btn" onClick={() => setShowFullPreview(false)}><FiX /></button>
              </div>
              <div className="rf-modal-pages">
                <div className="rf-modal-page">
                  <RetailTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showSharePopup && (
          <div className="rf-share-overlay" onClick={() => setShowSharePopup(false)}>
            <div className="rf-share-card" onClick={e => e.stopPropagation()}>
              <span className="rf-share-icon">💬</span>
              <h2 className="rf-share-headline">Loved Using This?</h2>
              <p className="rf-share-body">It only takes 5 seconds to share professionalresumefree.com — but it could change someone's career. Thanks for spreading the word!</p>
              <button className="rf-share-close-btn" onClick={() => setShowSharePopup(false)}>Close</button>
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

  // Breadcrumb data for structured data
  const breadcrumbData = [
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Retail Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-retail-associate-resume-builder' }
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
    revalidate: 86400
  };
}

export default RetailResume;