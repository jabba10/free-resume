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
  FiShield,
  FiBook,
  FiActivity,
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
  FiLock,
  FiVideo,
  FiAlertCircle,
  FiUsers,
  FiCamera
} from 'react-icons/fi';
import Link from 'next/link';

const securityFlowStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

  :root {
    --sf-background: #131315;
    --sf-surface: #131315;
    --sf-surface-dim: #131315;
    --sf-surface-bright: #39393b;
    --sf-surface-container: #201f21;
    --sf-surface-container-low: #1c1b1d;
    --sf-surface-container-lowest: #0e0e10;
    --sf-surface-container-high: #2a2a2c;
    --sf-surface-container-highest: #353437;
    --sf-surface-variant: #353437;
    --sf-on-background: #e5e1e4;
    --sf-on-surface: #e5e1e4;
    --sf-on-surface-variant: #d0c5af;
    --sf-primary: #f2ca50;
    --sf-primary-container: #d4af37;
    --sf-on-primary: #3c2f00;
    --sf-on-primary-container: #554300;
    --sf-primary-fixed: #ffe088;
    --sf-primary-fixed-dim: #e9c349;
    --sf-secondary: #c8c6c3;
    --sf-secondary-container: #474744;
    --sf-on-secondary: #30312e;
    --sf-on-secondary-container: #b6b5b1;
    --sf-tertiary: #d0cdd3;
    --sf-tertiary-container: #b4b2b7;
    --sf-on-tertiary: #303034;
    --sf-on-tertiary-container: #454449;
    --sf-outline: #99907c;
    --sf-outline-variant: #4d4635;
    --sf-error: #ffb4ab;
    --sf-on-error: #690005;
    --sf-error-container: #93000a;
    --sf-on-error-container: #ffdad6;
    --sf-inverse-surface: #e5e1e4;
    --sf-inverse-on-surface: #313032;
    --sf-inverse-primary: #735c00;
    --sf-surface-tint: #e9c349;
    --sf-secondary-fixed: #e4e2de;
    --sf-secondary-fixed-dim: #c8c6c3;
    --sf-on-secondary-fixed: #1b1c1a;
    --sf-on-secondary-fixed-variant: #474744;
    --sf-tertiary-fixed: #e4e1e7;
    --sf-tertiary-fixed-dim: #c8c5cb;
    --sf-on-tertiary-fixed: #1b1b1f;
    --sf-on-tertiary-fixed-variant: #47464b;
    --sf-gutter: 32px;
    --sf-section-gap: 120px;
    --sf-margin-desktop: 64px;
    --sf-margin-mobile: 24px;
    --sf-container-max: 1280px;
    --sf-unit: 8px;
    --sf-font-display: 'Playfair Display', Georgia, serif;
    --sf-font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --sf-glass-bg: rgba(20, 19, 21, 0.7);
    --sf-glass-blur: blur(20px);
    --sf-gold-border: 0.5px solid rgba(212, 175, 55, 0.3);
    --sf-gold-border-strong: 0.5px solid rgba(212, 175, 55, 0.4);
    --sf-gold-glow: 0 0 15px rgba(242, 202, 80, 0.3);
    --sf-shadow-nav: 0px 24px 48px rgba(0, 0, 0, 0.8);
    --sf-transition-fast: 200ms ease;
    --sf-transition-base: 300ms ease;
    --sf-transition-slow: 500ms ease;
    --sf-transition-image: 700ms ease;
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

  .sf-resume-builder {
    background-color: #131315 !important;
    color: var(--sf-on-background);
    font-family: var(--sf-font-body);
    line-height: 1.6;
    overflow-x: hidden;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .sf-resume-builder * { box-sizing: border-box; }
  .sf-resume-builder ::selection { background: rgba(242, 202, 80, 0.3); color: var(--sf-on-background); }
  .sf-container { width: 100%; max-width: var(--sf-container-max); margin: 0 auto; padding: 0 var(--sf-margin-desktop); box-sizing: border-box; }
  .sf-freshness-indicator { display: none; }

  .sf-breadcrumb { background: var(--sf-surface-container-lowest); padding: 16px 0; border-bottom: 0.5px solid var(--sf-outline-variant); }
  .sf-breadcrumb ol { display: flex; align-items: center; list-style: none; margin: 0; padding: 0 var(--sf-margin-desktop); flex-wrap: wrap; max-width: var(--sf-container-max); margin-left: auto; margin-right: auto; }
  .sf-breadcrumb li { display: flex; align-items: center; }
  .sf-breadcrumb-separator { margin: 0 8px; color: var(--sf-outline); }
  .sf-breadcrumb-link { display: flex; align-items: center; gap: 6px; color: var(--sf-on-surface-variant); text-decoration: none; font-size: 12px; font-weight: 500; letter-spacing: 0.05em; transition: color var(--sf-transition-fast); text-transform: uppercase; }
  .sf-breadcrumb-link:hover { color: var(--sf-primary); }
  .sf-breadcrumb-icon { font-size: 14px; }
  .sf-breadcrumb-text { white-space: nowrap; }

  .sf-hero { padding: 120px 0 80px; background: #131315; text-align: center; position: relative; overflow: hidden; min-height: 70vh; display: flex; align-items: center; }
  .sf-hero::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(ellipse at center, rgba(242, 202, 80, 0.03) 0%, transparent 70%); pointer-events: none; }
  .sf-hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 1; }
  .sf-trust-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(242, 202, 80, 0.08); padding: 8px 20px; border-radius: 50px; margin-bottom: 32px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .sf-trust-icon { color: var(--sf-primary); font-size: 16px; }
  .sf-trust-text { font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--sf-primary); }
  .sf-hero-title { font-family: var(--sf-font-display); font-size: 64px; font-weight: 700; line-height: 1.1; letter-spacing: -0.02em; color: var(--sf-on-background); margin: 0 0 24px; }
  .sf-gradient-text { background: linear-gradient(135deg, var(--sf-primary) 0%, #f7d96a 50%, var(--sf-primary) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; text-shadow: var(--sf-gold-glow); font-style: italic; }
  .sf-hero-subtitle { font-family: var(--sf-font-body); font-size: 18px; font-weight: 400; line-height: 1.6; color: var(--sf-on-surface-variant); margin: 0 auto 40px; max-width: 650px; }
  .sf-hero-highlight { color: var(--sf-primary); font-weight: 600; }
  .sf-cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 48px; }
  .sf-btn-primary { display: inline-flex; align-items: center; gap: 12px; background: var(--sf-primary); color: var(--sf-on-primary); border: none; padding: 16px 40px; border-radius: 2px; font-family: var(--sf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--sf-transition-base); text-decoration: none; position: relative; overflow: hidden; }
  .sf-btn-primary:hover { filter: brightness(1.1); box-shadow: 0 0 25px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .sf-btn-text { position: relative; z-index: 1; }
  .sf-btn-icon { font-size: 18px; transition: transform var(--sf-transition-base); }
  .sf-btn-primary:hover .sf-btn-icon { transform: translateX(4px); }
  .sf-btn-pulse { position: absolute; top: 50%; left: 50%; width: 0; height: 0; border-radius: 50%; background-color: rgba(255, 255, 255, 0.1); transform: translate(-50%, -50%); animation: pulse 2s infinite; }
  .sf-btn-secondary { display: inline-flex; align-items: center; gap: 8px; background: transparent; color: var(--sf-primary); border: var(--sf-gold-border-strong); padding: 16px 40px; border-radius: 2px; font-family: var(--sf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--sf-transition-base); text-decoration: none; }
  .sf-btn-secondary:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .sf-btn-secondary:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .sf-industry-badges { margin-top: 48px; }
  .sf-badge-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
  .sf-badge-item { display: flex; align-items: center; gap: 8px; padding: 12px 16px; background: rgba(242, 202, 80, 0.05); border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; font-family: var(--sf-font-body); font-size: 12px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; color: var(--sf-on-surface-variant); transition: all var(--sf-transition-base); justify-content: center; }
  .sf-badge-item:hover { border-color: rgba(212, 175, 55, 0.5); color: var(--sf-primary); background: rgba(242, 202, 80, 0.08); }

  .sf-layout { display: flex; flex-direction: column; gap: var(--sf-gutter); padding: 80px var(--sf-margin-desktop); max-width: var(--sf-container-max); margin: 0 auto; background: #131315; }
  .sf-preview-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .sf-preview-header { display: flex; flex-direction: column; gap: 16px; }
  .sf-preview-actions { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
  .sf-preview-btn, .sf-download-btn { display: inline-flex; align-items: center; gap: 8px; padding: 14px 28px; border-radius: 2px; font-family: var(--sf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; text-decoration: none; transition: all var(--sf-transition-base); cursor: pointer; white-space: nowrap; min-height: 48px; }
  .sf-preview-btn { background: transparent; color: var(--sf-primary); border: var(--sf-gold-border-strong); }
  .sf-preview-btn:hover { background: rgba(242, 202, 80, 0.05); transform: translateY(-2px); }
  .sf-download-btn { background: var(--sf-primary); color: var(--sf-on-primary); border: none; }
  .sf-download-btn:not(:disabled):hover { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .sf-download-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .sf-preview-container { background: var(--sf-glass-bg); backdrop-filter: var(--sf-glass-blur); -webkit-backdrop-filter: var(--sf-glass-blur); border: var(--sf-gold-border); padding: 24px; border-radius: 4px; min-height: 500px; display: flex; justify-content: center; align-items: flex-start; overflow: auto; }
  .sf-full-preview { background: transparent; padding: 0; border: none; border-radius: 0; overflow: visible; }
  .sf-resume-card { width: 100%; display: flex; justify-content: center; }
  .sf-preview-content { position: relative; width: 100%; max-width: 210mm; min-height: 297mm; overflow: visible; }

  .sf-resume-preview { display: block; width: 210mm; min-height: 297mm; background: #ffffff; padding: 10mm 15mm; box-sizing: border-box; box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); border: 0.5px solid rgba(212, 175, 55, 0.3); color: #000000; font-family: 'Helvetica Neue', Arial, sans-serif; line-height: 1.25; }
  .sf-universal-template { color: #000000; line-height: 1.25; height: 100%; }
  .sf-resume-header { text-align: center; margin-bottom: 8pt; padding-bottom: 6pt; border-bottom: 0.5pt solid #000000; }
  .sf-resume-name { font-weight: 700; margin: 0 0 3pt; color: #000000; text-transform: uppercase; letter-spacing: 0.4pt; }
  .sf-contact-row { display: flex; flex-wrap: wrap; justify-content: center; gap: 4pt; color: #495057; margin-top: 3pt; }
  .sf-contact-item { display: flex; align-items: center; gap: 2pt; }
  .sf-contact-separator { color: #adb5bd; }
  .sf-section { margin-bottom: 8pt; page-break-inside: avoid; }
  .sf-section-title { text-transform: uppercase; letter-spacing: 0.5pt; margin: 0 0 3pt; padding-bottom: 1pt; border-bottom: 0.5pt solid #000000; color: #000000; font-weight: 700; }
  .sf-summary-text { margin: 0; text-align: justify; line-height: 1.3; }
  .sf-experience-item, .sf-education-item { margin-bottom: 6pt; page-break-inside: avoid; }
  .sf-experience-header h3 { font-weight: 700; margin: 0 0 1.5pt; color: #000000; }
  .sf-company { color: #495057; margin: 0 0 3pt; font-style: italic; }
  .sf-institution-text { color: #495057; }
  .sf-institution-date { color: #6c757d; }
  .sf-bullet-list { margin: 3pt 0 0; padding-left: 8pt; list-style-type: disc; }
  .sf-bullet-list li { margin-bottom: 2pt; text-align: justify; line-height: 1.25; }
  .sf-skills-list { display: flex; flex-wrap: wrap; gap: 3pt; list-style: none; padding: 0; margin: 3pt 0 0; }
  .sf-skills-list li { background: #f8f9fa; padding: 1.5pt 4pt; border-radius: 1.5pt; border: 0.5pt solid #dee2e6; }
  .sf-license-item, .sf-cert-item { margin-bottom: 3pt; line-height: 1.25; }

  .sf-form-section { flex: 1; display: flex; flex-direction: column; gap: 24px; min-width: 0; }
  .sf-form-nav { display: flex; flex-wrap: wrap; gap: 8px; padding: 16px; background: var(--sf-glass-bg); backdrop-filter: var(--sf-glass-blur); -webkit-backdrop-filter: var(--sf-glass-blur); border: var(--sf-gold-border); border-radius: 4px; }
  .sf-nav-btn { display: flex; align-items: center; gap: 8px; padding: 12px 20px; border: 0.5px solid rgba(212, 175, 55, 0.2); border-radius: 2px; background: transparent; color: var(--sf-on-surface-variant); font-family: var(--sf-font-body); font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--sf-transition-base); white-space: nowrap; min-height: 48px; flex: 1; min-width: 100px; justify-content: center; }
  .sf-nav-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: rgba(212, 175, 55, 0.4); color: var(--sf-primary); }
  .sf-nav-btn-active { background: var(--sf-primary); border-color: var(--sf-primary); color: var(--sf-on-primary); }
  .sf-form-content { flex: 1; min-width: 0; overflow-y: auto; max-height: 600px; padding-right: 8px; }
  .sf-form-content::-webkit-scrollbar { width: 6px; }
  .sf-form-content::-webkit-scrollbar-track { background: var(--sf-surface-container-lowest); border-radius: 3px; }
  .sf-form-content::-webkit-scrollbar-thumb { background: var(--sf-outline-variant); border-radius: 3px; }
  .sf-form-content::-webkit-scrollbar-thumb:hover { background: var(--sf-outline); }
  .sf-form-section-content { display: flex; flex-direction: column; gap: 24px; }
  .sf-form-section-title { font-family: var(--sf-font-display); font-size: 24px; font-weight: 600; margin: 0 0 8px; color: var(--sf-on-background); display: flex; align-items: center; gap: 12px; }
  .sf-section-desc { color: var(--sf-on-surface-variant); font-family: var(--sf-font-body); font-size: 14px; margin: 0 0 16px; line-height: 1.6; }
  .sf-form-card { background: var(--sf-glass-bg); backdrop-filter: var(--sf-glass-blur); -webkit-backdrop-filter: var(--sf-glass-blur); border: var(--sf-gold-border); border-radius: 4px; padding: 24px; width: 100%; box-sizing: border-box; }
  .sf-form-group { display: grid; grid-template-columns: 1fr; gap: 20px; margin-bottom: 20px; width: 100%; }
  .sf-form-label { display: flex; flex-direction: column; gap: 8px; font-family: var(--sf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--sf-on-surface-variant); width: 100%; }
  .sf-form-input, .sf-form-textarea, .sf-form-select { padding: 14px 16px; border: 0.5px solid var(--sf-outline-variant); border-radius: 2px; font-family: var(--sf-font-body); font-size: 14px; color: var(--sf-on-background); background: rgba(14, 14, 16, 0.6); transition: all var(--sf-transition-base); width: 100%; box-sizing: border-box; min-width: 0; }
  .sf-form-input:focus, .sf-form-textarea:focus, .sf-form-select:focus { outline: none; border-color: var(--sf-primary); box-shadow: 0 0 0 2px rgba(242, 202, 80, 0.15); }
  .sf-form-input::placeholder, .sf-form-textarea::placeholder { color: var(--sf-outline); }
  .sf-form-textarea { resize: vertical; min-height: 120px; line-height: 1.5; }
  .sf-form-select { cursor: pointer; }
  .sf-form-select option { background: var(--sf-surface-container); color: var(--sf-on-background); }
  .sf-char-count { text-align: right; font-size: 11px; color: var(--sf-outline); margin-top: 8px; font-family: var(--sf-font-body); letter-spacing: 0.05em; }
  .sf-sub-section-title { font-family: var(--sf-font-display); font-size: 18px; font-weight: 600; margin: 0 0 16px; color: var(--sf-primary); display: flex; align-items: center; gap: 12px; }
  .sf-skills-input { display: flex; flex-direction: column; gap: 16px; width: 100%; }
  .sf-form-actions { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; align-items: center; width: 100%; }
  .sf-add-btn, .sf-cancel-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 2px; font-family: var(--sf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; white-space: nowrap; transition: all var(--sf-transition-base); min-height: 48px; flex-shrink: 0; }
  .sf-add-btn { background: var(--sf-primary); color: var(--sf-on-primary); border: none; }
  .sf-add-btn:hover:not(:disabled) { filter: brightness(1.1); box-shadow: 0 0 20px rgba(242, 202, 80, 0.3); transform: translateY(-2px); }
  .sf-add-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .sf-cancel-btn { background: transparent; color: var(--sf-on-surface-variant); border: 0.5px solid var(--sf-outline-variant); }
  .sf-cancel-btn:hover { background: rgba(255, 255, 255, 0.03); border-color: var(--sf-outline); transform: translateY(-2px); }
  .sf-items-list { margin-top: 24px; }
  .sf-empty-msg { color: var(--sf-outline); font-style: italic; margin: 0; padding: 20px; text-align: center; background: rgba(14, 14, 16, 0.4); border-radius: 2px; border: 1px dashed var(--sf-outline-variant); font-family: var(--sf-font-body); font-size: 14px; }
  .sf-list-item { display: flex; justify-content: space-between; align-items: flex-start; padding: 16px; border-bottom: 0.5px solid var(--sf-outline-variant); width: 100%; box-sizing: border-box; background: rgba(14, 14, 16, 0.3); border-radius: 2px; margin-bottom: 8px; }
  .sf-list-item:last-child { border-bottom: none; margin-bottom: 0; }
  .sf-item-content { flex: 1; display: flex; flex-direction: column; gap: 8px; min-width: 0; }
  .sf-item-header { display: flex; flex-wrap: wrap; gap: 8px; align-items: baseline; }
  .sf-item-title { font-weight: 700; color: var(--sf-on-background); word-break: break-word; font-size: 16px; }
  .sf-item-subtitle { color: var(--sf-on-surface-variant); font-size: 14px; word-break: break-word; }
  .sf-item-meta { display: flex; gap: 16px; flex-wrap: wrap; color: var(--sf-outline); font-size: 12px; align-items: center; letter-spacing: 0.05em; }
  .sf-item-desc { margin-top: 8px; }
  .sf-bullet-point { margin: 4px 0; font-size: 14px; color: var(--sf-on-surface-variant); line-height: 1.5; }
  .sf-item-actions { display: flex; gap: 8px; margin-left: 16px; flex-shrink: 0; }
  .sf-edit-btn, .sf-delete-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 2px; background: rgba(255, 255, 255, 0.03); color: var(--sf-on-surface-variant); border: 0.5px solid var(--sf-outline-variant); cursor: pointer; transition: all var(--sf-transition-base); }
  .sf-edit-btn:hover { background: rgba(242, 202, 80, 0.1); border-color: var(--sf-primary); color: var(--sf-primary); transform: translateY(-2px); }
  .sf-delete-btn { color: var(--sf-error); border-color: rgba(255, 180, 171, 0.3); }
  .sf-delete-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--sf-error); transform: translateY(-2px); }

  .sf-font-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; margin-bottom: 30px; }
  .sf-font-control { display: flex; flex-direction: column; gap: 12px; }
  .sf-font-label { display: flex; justify-content: space-between; align-items: center; font-family: var(--sf-font-body); font-weight: 600; font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--sf-on-surface-variant); }
  .sf-font-value { background: rgba(242, 202, 80, 0.1); padding: 4px 12px; border-radius: 20px; font-weight: 700; color: var(--sf-primary); font-size: 12px; min-width: 50px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .sf-font-slider { width: 100%; height: 4px; -webkit-appearance: none; appearance: none; background: var(--sf-outline-variant); border-radius: 2px; outline: none; }
  .sf-font-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%; background: var(--sf-primary); cursor: pointer; border: 2px solid var(--sf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .sf-font-slider::-moz-range-thumb { width: 18px; height: 18px; border-radius: 50%; background: var(--sf-primary); cursor: pointer; border: 2px solid var(--sf-background); box-shadow: 0 0 10px rgba(242, 202, 80, 0.3); }
  .sf-reset-btn { display: block; width: 100%; padding: 14px 24px; background: transparent; color: var(--sf-on-surface-variant); border: 0.5px solid var(--sf-outline-variant); border-radius: 2px; font-family: var(--sf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--sf-transition-base); text-align: center; }
  .sf-reset-btn:hover { background: rgba(242, 202, 80, 0.05); border-color: var(--sf-primary); color: var(--sf-primary); }

  .sf-faq-section { padding: var(--sf-section-gap) var(--sf-margin-mobile); background: var(--sf-surface-container-lowest); border-top: 0.5px solid rgba(153, 144, 124, 0.1); border-bottom: 0.5px solid rgba(153, 144, 124, 0.1); }
  .sf-section-header { text-align: center; margin-bottom: 64px; }
  .sf-section-header h2 { font-family: var(--sf-font-display); font-size: 32px; font-weight: 600; color: var(--sf-on-background); margin: 0 0 16px; }
  .sf-section-header p { font-family: var(--sf-font-body); font-size: 18px; color: var(--sf-on-surface-variant); max-width: 600px; margin: 0 auto; line-height: 1.6; }
  .sf-faq-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 900px; margin: 0 auto; }
  .sf-faq-item { background: var(--sf-glass-bg); backdrop-filter: var(--sf-glass-blur); -webkit-backdrop-filter: var(--sf-glass-blur); border: var(--sf-gold-border); border-radius: 4px; padding: 32px; transition: all var(--sf-transition-base); }
  .sf-faq-item:hover { transform: translateY(-4px); border-color: rgba(212, 175, 55, 0.5); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3); }
  .sf-faq-question { font-family: var(--sf-font-display); font-size: 20px; font-weight: 600; color: var(--sf-primary); margin: 0 0 16px; line-height: 1.4; }
  .sf-faq-answer { font-family: var(--sf-font-body); font-size: 16px; color: var(--sf-on-surface-variant); line-height: 1.6; margin: 0; }

  .sf-cta-section { padding: var(--sf-section-gap) var(--sf-margin-mobile); background: #131315; text-align: center; }
  .sf-cta-content { max-width: 700px; margin: 0 auto; }
  .sf-cta-title { font-family: var(--sf-font-display); font-size: 32px; font-weight: 600; color: var(--sf-on-background); margin: 0 0 16px; line-height: 1.2; }
  .sf-cta-subtitle { font-family: var(--sf-font-body); font-size: 18px; color: var(--sf-on-surface-variant); margin: 0 0 40px; line-height: 1.6; }
  .sf-cta-btn-wrap { margin-bottom: 32px; display: flex; justify-content: center; }
  .sf-cta-btn { display: inline-flex; align-items: center; gap: 16px; background: var(--sf-primary); color: var(--sf-on-primary); border: none; padding: 20px 48px; border-radius: 2px; font-family: var(--sf-font-body); font-size: 16px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--sf-transition-base); }
  .sf-cta-btn:hover { filter: brightness(1.1); box-shadow: 0 0 30px rgba(242, 202, 80, 0.3); transform: translateY(-4px); }
  .sf-cta-btn-text { position: relative; z-index: 1; }
  .sf-cta-btn-icon { font-size: 20px; transition: transform var(--sf-transition-base); }
  .sf-cta-btn:hover .sf-cta-btn-icon { transform: translateX(8px); }
  .sf-cta-guarantee { display: inline-flex; align-items: center; gap: 12px; background: rgba(242, 202, 80, 0.05); padding: 16px 32px; border-radius: 50px; border: 0.5px solid rgba(212, 175, 55, 0.3); }
  .sf-guarantee-icon { color: var(--sf-primary); font-size: 20px; }
  .sf-guarantee-text { font-family: var(--sf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.03em; color: var(--sf-on-surface-variant); }

  .sf-modal { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; overflow: auto; }
  .sf-modal-content { background: var(--sf-surface-container); border-radius: 4px; max-width: 900px; width: 100%; max-height: 90vh; overflow: auto; border: var(--sf-gold-border); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5); animation: modalSlideIn 0.3s ease-out; }
  .sf-modal-header { display: flex; justify-content: space-between; align-items: center; padding: 24px 32px; border-bottom: 0.5px solid rgba(212, 175, 55, 0.3); background: var(--sf-surface-container-lowest); border-radius: 4px 4px 0 0; }
  .sf-modal-header h3 { font-family: var(--sf-font-display); font-size: 20px; margin: 0; color: var(--sf-primary); font-weight: 600; }
  .sf-close-btn { background: rgba(255, 255, 255, 0.05); width: 40px; height: 40px; border-radius: 2px; border: 0.5px solid rgba(212, 175, 55, 0.3); display: flex; align-items: center; justify-content: center; cursor: pointer; color: var(--sf-on-surface-variant); font-size: 20px; transition: all var(--sf-transition-base); }
  .sf-close-btn:hover { background: rgba(255, 180, 171, 0.1); border-color: var(--sf-error); color: var(--sf-error); transform: rotate(90deg); }
  .sf-modal-pages { padding: 32px; background: var(--sf-surface-container-lowest); display: flex; justify-content: center; align-items: center; }
  .sf-modal-page { background: #ffffff; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3); width: 210mm; height: 297mm; display: flex; justify-content: center; align-items: flex-start; }
  .sf-modal-page .sf-universal-template { width: 100%; height: 100%; padding: 10mm 15mm; box-sizing: border-box; overflow-y: auto; }

  .sf-share-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); z-index: 9999; display: flex; justify-content: center; align-items: center; padding: 20px; }
  .sf-share-card { background: var(--sf-surface-container-high); border-radius: 8px; max-width: 420px; width: 100%; padding: 32px 28px; text-align: center; border: 0.5px solid rgba(212, 175, 55, 0.4); box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6); animation: modalSlideIn 0.3s ease-out; }
  .sf-share-icon { font-size: 40px; margin-bottom: 16px; display: block; }
  .sf-share-headline { font-family: var(--sf-font-display); font-size: 24px; font-weight: 600; color: var(--sf-primary); margin: 0 0 12px; }
  .sf-share-body { font-family: var(--sf-font-body); font-size: 15px; color: var(--sf-on-surface-variant); margin: 0 0 28px; line-height: 1.6; }
  .sf-share-close-btn { display: inline-block; background: var(--sf-primary); color: var(--sf-on-primary); border: none; padding: 12px 32px; border-radius: 2px; font-family: var(--sf-font-body); font-size: 14px; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase; cursor: pointer; transition: all var(--sf-transition-base); }
  .sf-share-close-btn:hover { filter: brightness(1.1); box-shadow: 0 0 18px rgba(242, 202, 80, 0.3); transform: translateY(-1px); }

  @media (min-width: 1024px) {
    .sf-layout { flex-direction: row; gap: 48px; }
    .sf-preview-section { position: sticky; top: 100px; align-self: flex-start; max-height: calc(100vh - 120px); overflow-y: auto; }
    .sf-form-section { max-width: 500px; }
    .sf-faq-grid { grid-template-columns: repeat(2, 1fr); }
    .sf-form-group { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 1023px) {
    :root { --sf-margin-desktop: 32px; --sf-section-gap: 80px; }
    .sf-container { padding: 0 var(--sf-margin-desktop); }
    .sf-hero { padding: 100px 0 60px; min-height: auto; }
    .sf-hero-title { font-size: 48px; }
    .sf-layout { padding: 60px var(--sf-margin-desktop); gap: 32px; }
    .sf-form-group { grid-template-columns: 1fr 1fr; }
    .sf-faq-grid { grid-template-columns: 1fr 1fr; }
    .sf-breadcrumb ol { padding: 0 var(--sf-margin-desktop); }
  }

  @media (max-width: 768px) {
    :root { --sf-margin-desktop: 24px; --sf-section-gap: 60px; }
    .sf-hero { padding: 80px 0 40px; }
    .sf-hero-title { font-size: 36px; }
    .sf-hero-subtitle { font-size: 14px; }
    .sf-cta-buttons { flex-direction: column; align-items: center; gap: 12px; }
    .sf-btn-primary, .sf-btn-secondary, .sf-preview-btn, .sf-download-btn, .sf-cta-btn { width: 100%; justify-content: center; }
    .sf-layout { padding: 40px var(--sf-margin-desktop); gap: 24px; }
    .sf-preview-container { padding: 16px; }
    .sf-resume-preview { width: 100%; min-height: auto; padding: 8mm 10mm; }
    .sf-form-nav { gap: 6px; padding: 12px; }
    .sf-nav-btn { min-width: 80px; flex: 1 1 calc(50% - 6px); padding: 10px 14px; font-size: 11px; }
    .sf-nav-btn span { display: none; }
    .sf-form-card { padding: 16px; }
    .sf-form-group { grid-template-columns: 1fr; }
    .sf-badge-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }
    .sf-faq-grid { grid-template-columns: 1fr; }
    .sf-faq-section, .sf-cta-section { padding: 60px var(--sf-margin-mobile); }
    .sf-section-header h2, .sf-cta-title { font-size: 28px; }
    .sf-modal-content { margin: 0; border-radius: 0; max-height: 100vh; width: 100%; }
    .sf-modal-page { width: 100%; height: auto; min-height: 400px; }
    .sf-modal-page .sf-universal-template { padding: 8mm 12mm; }
    .sf-font-grid { grid-template-columns: 1fr 1fr; }
    .sf-list-item { flex-direction: column; gap: 12px; }
    .sf-item-actions { margin-left: 0; align-self: flex-end; }
    .sf-share-card { margin: 0 16px; padding: 24px 20px; }
  }

  @media (max-width: 480px) {
    :root { --sf-margin-desktop: 16px; --sf-section-gap: 48px; }
    .sf-hero-title { font-size: 28px; }
    .sf-hero-subtitle { font-size: 13px; }
    .sf-badge-grid { grid-template-columns: 1fr; }
    .sf-layout { padding: 32px var(--sf-margin-desktop); }
    .sf-resume-preview { padding: 6mm 8mm; }
    .sf-nav-btn { min-width: 60px; flex: 1 1 calc(50% - 6px); padding: 8px 10px; }
    .sf-form-card { padding: 12px; }
    .sf-form-section-title { font-size: 20px; }
    .sf-sub-section-title { font-size: 16px; }
    .sf-font-grid { grid-template-columns: 1fr; }
    .sf-faq-item { padding: 20px; }
    .sf-faq-question { font-size: 18px; }
    .sf-section-header h2, .sf-cta-title { font-size: 24px; }
    .sf-cta-btn { padding: 16px 32px; font-size: 14px; }
    .sf-cta-guarantee { padding: 12px 20px; flex-wrap: wrap; justify-content: center; }
    .sf-guarantee-text { font-size: 12px; }
    .sf-modal-header { padding: 16px 20px; }
    .sf-modal-header h3 { font-size: 16px; }
    .sf-modal-pages { padding: 16px; }
    .sf-modal-page .sf-universal-template { padding: 6mm 8mm; }
    .sf-share-headline { font-size: 20px; }
    .sf-share-body { font-size: 13px; }
  }

  @media (max-width: 360px) {
    .sf-hero-title { font-size: 24px; }
    .sf-btn-primary, .sf-btn-secondary { padding: 12px 20px; font-size: 12px; }
  }

  @media print {
    .sf-resume-builder, .sf-layout, .sf-preview-section, .sf-form-section, .sf-faq-section, .sf-cta-section, .sf-hero, .sf-breadcrumb, .sf-modal { display: none !important; }
    .sf-resume-preview { display: block !important; box-shadow: none !important; margin: 0 !important; padding: 10mm 15mm !important; width: 100% !important; height: auto !important; page-break-inside: avoid; background: #ffffff !important; border: none !important; }
    .sf-universal-template, .sf-section { page-break-inside: avoid; }
  }
`;

const SecurityGuardResume = ({ 
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

  // --- Default item factories for Security Industry ---
  const defaultExperience = () => ({
    employer: '',
    position: '',
    facilityType: '',
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
  
  const defaultCertification = () => ({
    name: '',
    issuingOrganization: '',
    dateObtained: '',
    expiryDate: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultTraining = () => ({
    name: '',
    provider: '',
    dateCompleted: '',
    isEditing: false,
    editIndex: null
  });
  
  const defaultEquipment = () => ({
    name: '',
    proficiency: '',
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
    certifications: [],
    trainings: [],
    equipment: [],
    languages: [],
    socialLinks: []
  });

  // Font size state
  const [fontSizes, setFontSizes] = useState({
    name: 16,
    sectionTitle: 11,
    contactInfo: 8,
    jobTitle: 10,
    company: 8,
    degree: 9,
    institution: 8,
    institutionDate: 7,
    regularText: 9,
    bulletText: 8,
    skillText: 8,
    licenseText: 8
  });

  const [currentExperience, setCurrentExperience] = useState(defaultExperience());
  const [currentEducation, setCurrentEducation] = useState(defaultEducation());
  const [currentSpecialty, setCurrentSpecialty] = useState(defaultSpecialty());
  const [currentLicense, setCurrentLicense] = useState(defaultLicense());
  const [currentCertification, setCurrentCertification] = useState(defaultCertification());
  const [currentTraining, setCurrentTraining] = useState(defaultTraining());
  const [currentEquipment, setCurrentEquipment] = useState(defaultEquipment());
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage());
  const [currentSocialLink, setCurrentSocialLink] = useState(defaultSocialLink());

  const [activeSection, setActiveSection] = useState('personal');
  const resumeRef = useRef(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [showFullPreview, setShowFullPreview] = useState(false);
  const [showSharePopup, setShowSharePopup] = useState(false);

  // Testimonials for Structured Data - Security Industry
  const testimonials = [
    {
      quote: "Created my security guard resume in 10 minutes and got callbacks from top security firms. The industry-specific templates are exactly what I needed!",
      metric: "Hired in 1 Week",
      name: "Michael R.",
      role: "Armed Security Officer",
      company: "Global Security Solutions"
    },
    {
      quote: "Finally a resume builder that understands security certifications and licensing requirements. The templates helped me highlight my CPP certification properly.",
      metric: "3 Interviews in 5 Days",
      name: "James K.",
      role: "Certified Protection Officer",
      company: "Corporate Security Firm"
    },
    {
      quote: "As a recent security training graduate, the entry-level templates were perfect. Landed my first corporate security position using this builder.",
      metric: "First Job After Training",
      name: "Alex P.",
      role: "Security Guard",
      company: "Commercial Office Complex"
    },
    {
      quote: "The security resume builder saved me - could update my CV between shifts. Professional results that impressed government contractors.",
      metric: "Government Contract Success",
      name: "Maria L.",
      role: "Government Security Specialist",
      company: "Federal Facility"
    },
    {
      quote: "Security ATS-friendly templates actually work! Got callbacks from companies that previously ignored my applications.",
      metric: "4x More Responses",
      name: "David T.",
      role: "CCTV Surveillance Operator",
      company: "Retail Security Company"
    },
    {
      quote: "Free PDF download with proper security industry formatting? Unbeatable value. Best security resume builder I've found.",
      metric: "Perfect Resume in 15min",
      name: "Lisa R.",
      role: "Security Supervisor",
      company: "Mall Security Division"
    }
  ];

  // FAQ Data for Structured Data - Security Industry
  const faqs = [
    {
      question: "Is this security guard resume builder really free with no hidden costs?",
      answer: "Yes, our security guard resume builder is completely free with no hidden costs or watermarks. Create, edit, and download your professional security resume in PDF format without any payment required."
    },
    {
      question: "What does ATS-friendly mean for security guard resumes?",
      answer: "ATS-friendly means our security resume templates are optimized to pass through Applicant Tracking Systems used by 95% of security companies and corporate employers. This ensures your security experience, certifications, and licenses are properly scanned and recognized."
    },
    {
      question: "Can I download my security guard resume as PDF without creating an account?",
      answer: "Absolutely! Download your professional security guard resume in PDF format without creating an account. Everything is completely free and accessible immediately for armed guards, surveillance operators, and security professionals."
    },
    {
      question: "How many security guard resume templates are available for free?",
      answer: "We offer professionally designed ATS-friendly security guard resume templates for armed security, unarmed security, surveillance operators, executive protection, corporate security, and all security specialties. All templates are completely free and optimized for security industry hiring."
    },
    {
      question: "How does your security guard resume builder work?",
      answer: "Our builder uses ATS-optimized security guard templates with proper security terminology formatting. We guide you to highlight security experience, certifications, licenses, and specialized skills that security employers look for."
    },
    {
      question: "Can I edit my security guard resume after downloading it?",
      answer: "Yes, you can always come back and edit your security guard resume. Your work saves automatically, and you can download updated versions as many times as needed—completely free."
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
      sectionTitle: 11,
      contactInfo: 8,
      jobTitle: 10,
      company: 8,
      degree: 9,
      institution: 8,
      institutionDate: 7,
      regularText: 9,
      bulletText: 8,
      skillText: 8,
      licenseText: 8
    });
  };

  // --- Utility Functions ---
  const getSocialIcon = (platform) => {
    const icons = {
      linkedin: <FiGlobe />,
      website: <FiGlobe />,
      portfolio: <FiGlobe />,
      linkedinsafety: <FiShield />
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
      formData.certifications.length > 0 ||
      formData.trainings.length > 0 ||
      formData.equipment.length > 0 ||
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

  const addSpecialty = createAddFunction('specialties', currentSpecialty, setCurrentSpecialty, defaultSpecialty, () => currentSpecialty.name.trim());
  const editSpecialty = createEditFunction('specialties', setCurrentSpecialty);
  const deleteSpecialty = createDeleteFunction('specialties');

  const addLicense = createAddFunction('licenses', currentLicense, setCurrentLicense, defaultLicense, () => currentLicense.name.trim());
  const editLicense = createEditFunction('licenses', setCurrentLicense);
  const deleteLicense = createDeleteFunction('licenses');

  const addCertification = createAddFunction('certifications', currentCertification, setCurrentCertification, defaultCertification, () => currentCertification.name.trim());
  const editCertification = createEditFunction('certifications', setCurrentCertification);
  const deleteCertification = createDeleteFunction('certifications');

  const addTraining = createAddFunction('trainings', currentTraining, setCurrentTraining, defaultTraining, () => currentTraining.name.trim());
  const editTraining = createEditFunction('trainings', setCurrentTraining);
  const deleteTraining = createDeleteFunction('trainings');

  const addEquipment = createAddFunction('equipment', currentEquipment, setCurrentEquipment, defaultEquipment, () => currentEquipment.name.trim());
  const editEquipment = createEditFunction('equipment', setCurrentEquipment);
  const deleteEquipment = createDeleteFunction('equipment');

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
          const clone = doc.querySelector('.sf-resume-preview');
          if (clone) {
            clone.style.display = 'block';
            clone.style.visibility = 'visible';
            clone.style.opacity = '1';
            clone.style.width = '210mm';
            clone.style.height = '297mm';
            clone.style.background = '#ffffff';
            clone.style.color = '#000000';
            
            const name = clone.querySelector('.sf-resume-name');
            if (name) name.style.fontSize = `${fontSizes.name}pt`;
            
            const sectionTitles = clone.querySelectorAll('.sf-section-title');
            sectionTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.sectionTitle}pt`;
            });
            
            const contactItems = clone.querySelectorAll('.sf-contact-item');
            contactItems.forEach(item => {
              item.style.fontSize = `${fontSizes.contactInfo}pt`;
            });
            
            const jobTitles = clone.querySelectorAll('.sf-experience-item h3');
            jobTitles.forEach(title => {
              title.style.fontSize = `${fontSizes.jobTitle}pt`;
            });
            
            const companies = clone.querySelectorAll('.sf-company');
            companies.forEach(company => {
              company.style.fontSize = `${fontSizes.company}pt`;
            });
            
            const degrees = clone.querySelectorAll('.sf-education-item h3');
            degrees.forEach(degree => {
              degree.style.fontSize = `${fontSizes.degree}pt`;
            });
            
            const institutions = clone.querySelectorAll('.sf-institution-text');
            institutions.forEach(institution => {
              institution.style.fontSize = `${fontSizes.institution}pt`;
            });
            
            const institutionDates = clone.querySelectorAll('.sf-institution-date');
            institutionDates.forEach(date => {
              date.style.fontSize = `${fontSizes.institutionDate}pt`;
            });
            
            const regularTexts = clone.querySelectorAll('.sf-summary-text, .sf-license-item, .sf-cert-item');
            regularTexts.forEach(text => {
              text.style.fontSize = `${fontSizes.regularText}pt`;
            });
            
            const bulletPoints = clone.querySelectorAll('.sf-bullet-list li');
            bulletPoints.forEach(bullet => {
              bullet.style.fontSize = `${fontSizes.bulletText}pt`;
            });
            
            const skills = clone.querySelectorAll('.sf-skills-list li');
            skills.forEach(skill => {
              skill.style.fontSize = `${fontSizes.skillText}pt`;
            });
            
            const licenseTexts = clone.querySelectorAll('.sf-license-item');
            licenseTexts.forEach(license => {
              license.style.fontSize = `${fontSizes.licenseText}pt`;
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

      pdf.save(`${formData.fullName || 'security_guard_resume'}_resume.pdf`);
      setShowSharePopup(true);
    } catch (err) {
      console.error("PDF Error:", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // --- Security Guard Resume Template ---
  const SecurityGuardTemplate = ({ formData }) => {
    const hasSummary = formData.summary && formData.summary.trim().length > 0;
    const hasExperience = formData.experience.length > 0;
    const hasEducation = formData.education.length > 0;
    const hasSpecialties = formData.specialties.length > 0;
    const hasLicenses = formData.licenses.length > 0;
    const hasCertifications = formData.certifications.length > 0;
    const hasTrainings = formData.trainings.length > 0;
    const hasEquipment = formData.equipment.length > 0;
    const hasLanguages = formData.languages.length > 0;

    return (
      <div className="sf-universal-template">
        <header className="sf-resume-header">
          <h1 className="sf-resume-name" style={{ fontSize: `${fontSizes.name}pt` }}>
            {formData.fullName || 'Your Name'}
          </h1>
          <div className="sf-contact-row">
            {formData.email && <div className="sf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMail /> {formData.email}</div>}
            {(formData.email && (formData.phone || formData.address)) && <div className="sf-contact-separator">•</div>}
            {formData.phone && <div className="sf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiPhone /> {formData.phone}</div>}
            {(formData.phone && formData.address) && <div className="sf-contact-separator">•</div>}
            {formData.address && <div className="sf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}><FiMapPin /> {formData.address}</div>}
            {formData.socialLinks.map((link, i) => (
              <div key={i} className="sf-contact-item" style={{ fontSize: `${fontSizes.contactInfo}pt` }}>
                {getSocialIcon(link.platform)} {formatSocialUrl(link.url)}
              </div>
            ))}
          </div>
        </header>

        {hasSummary && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SECURITY PROFESSIONAL SUMMARY</h2>
            <p className="sf-summary-text" style={{ fontSize: `${fontSizes.regularText}pt` }}>{formData.summary}</p>
          </section>
        )}

        {hasExperience && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SECURITY EXPERIENCE</h2>
            {formData.experience.map((exp, i) => (
              <div key={i} className="sf-experience-item">
                <div className="sf-experience-header">
                  <h3 style={{ fontSize: `${fontSizes.jobTitle}pt` }}>{exp.position}</h3>
                  <p className="sf-company" style={{ fontSize: `${fontSizes.company}pt` }}>{exp.employer}{exp.facilityType && ` – ${exp.facilityType}`} | {exp.startDate} – {exp.endDate || 'Present'}</p>
                </div>
                <ul className="sf-bullet-list">
                  {exp.description.split('\n').filter(line => line.trim()).map((line, j) => <li key={j} style={{ fontSize: `${fontSizes.bulletText}pt` }}>{line}</li>)}
                </ul>
              </div>
            ))}
          </section>
        )}

        {hasEducation && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>EDUCATION & TRAINING</h2>
            {formData.education.map((edu, i) => (
              <div key={i} className="sf-education-item">
                <h3 style={{ fontSize: `${fontSizes.degree}pt` }}>
                  {edu.degree}{edu.program && ` – ${edu.program}`}
                </h3>
                <p className="sf-institution-text" style={{ fontSize: `${fontSizes.institution}pt` }}>
                  {edu.institution} | 
                  <span className="sf-institution-date" style={{ fontSize: `${fontSizes.institutionDate}pt` }}>
                    {edu.startDate} – {edu.endDate || 'Present'}
                  </span>
                </p>
              </div>
            ))}
          </section>
        )}

        {hasSpecialties && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SECURITY SPECIALTIES</h2>
            <ul className="sf-skills-list">
              {formData.specialties.map((s, i) => <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>{s.name}</li>)}
            </ul>
          </section>
        )}

        {hasLicenses && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SECURITY LICENSES</h2>
            {formData.licenses.map((l, i) => (
              <div key={i} className="sf-license-item" style={{ fontSize: `${fontSizes.licenseText}pt` }}>
                <strong>{l.name}</strong>
                {l.issuingAuthority && ` – ${l.issuingAuthority}`}
                {l.licenseNumber && ` (License #: ${l.licenseNumber})`}
                {l.expiryDate && ` – Expires: ${l.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasCertifications && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>PROFESSIONAL CERTIFICATIONS</h2>
            {formData.certifications.map((c, i) => (
              <div key={i} className="sf-cert-item" style={{ fontSize: `${fontSizes.licenseText}pt` }}>
                <strong>{c.name}</strong>
                {c.issuingOrganization && ` – ${c.issuingOrganization}`}
                {c.dateObtained && ` – Obtained: ${c.dateObtained}`}
                {c.expiryDate && ` – Expires: ${c.expiryDate}`}
              </div>
            ))}
          </section>
        )}

        {hasTrainings && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SECURITY TRAINING</h2>
            {formData.trainings.map((t, i) => (
              <div key={i} className="sf-cert-item" style={{ fontSize: `${fontSizes.licenseText}pt` }}>
                <strong>{t.name}</strong>
                {t.provider && ` – ${t.provider}`}
                {t.dateCompleted && ` – Completed: ${t.dateCompleted}`}
              </div>
            ))}
          </section>
        )}

        {hasEquipment && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>SECURITY EQUIPMENT PROFICIENCY</h2>
            <ul className="sf-skills-list">
              {formData.equipment.map((e, i) => (
                <li key={i} style={{ fontSize: `${fontSizes.skillText}pt` }}>
                  {e.name}{e.proficiency && ` (${e.proficiency})`}
                </li>
              ))}
            </ul>
          </section>
        )}

        {hasLanguages && (
          <section className="sf-section">
            <h2 className="sf-section-title" style={{ fontSize: `${fontSizes.sectionTitle}pt` }}>LANGUAGES</h2>
            <ul className="sf-bullet-list">
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
      <style>{securityFlowStyles}</style>
      <div className="sf-resume-builder" lang="en-US">
        <Head>
          <title>Free Security Guard Resume Builder 2026: ATS Templates for Security Pros</title>
          <meta name="title" content="Free Security Guard Resume Builder 2026: ATS Templates for Security Pros" />
          <meta name="description" content="Create your professional security guard resume for free in 2026. ATS-optimized templates help security professionals highlight certifications, licenses & experience. Start now—no sign-up." />
          <meta name="keywords" content="security guard resume builder, security guard resume, security officer resume, armed guard resume, ATS friendly security resume, free resume builder for security professionals, security guard CV, surveillance operator resume, corporate security resume, executive protection resume" />
          <meta name="author" content="Professional Security Resume Free" />
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
          <meta name="date" content={safeCurrentDate} />
          <meta name="last-modified" content={safeLastModifiedDate} />
          <meta name="revisit-after" content="1 days" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="canonical" href="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" hreflang="en" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" hreflang="en-US" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" hreflang="en-GB" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" hreflang="en-CA" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" hreflang="en-AU" />
          <link rel="alternate" href="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" hreflang="x-default" />
          <meta property="og:title" content="Free Security Guard Resume Builder 2026: ATS Templates for Security Pros" />
          <meta property="og:description" content="Create your professional security guard resume for free in 2026. ATS-optimized templates help security professionals highlight certifications, licenses & experience. Start now—no sign-up." />
          <meta property="og:image" content="https://professionalresumefree.com/images/og-security-guard-resume-builder-preview.jpg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Free Security Guard Resume Builder - Create Professional Security Resumes Online" />
          <meta property="og:url" content="https://professionalresumefree.com/ats-friendly-security-guard-resume-builder" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Professional Security Resume Free" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="en_GB" />
          <meta property="og:locale:alternate" content="en_CA" />
          <meta property="og:locale:alternate" content="en_AU" />
          <meta property="og:updated_time" content={safeLastModifiedDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Free Security Guard Resume Builder 2026: ATS Templates for Security Pros" />
          <meta name="twitter:description" content="Create your professional security guard resume for free in 2026. ATS-optimized templates help security professionals highlight certifications, licenses & experience. Start now—no sign-up." />
          <meta name="twitter:image" content="https://professionalresumefree.com/images/twitter-security-guard-resume-builder-preview.jpg" />
          <meta name="twitter:image:alt" content="Free Security Guard Resume Builder with ATS Templates" />
          <meta name="twitter:site" content="@ProResumeFree" />
          <meta name="twitter:creator" content="@ProResumeFree" />
          <meta name="theme-color" content="#111111" />
          <meta name="msapplication-TileColor" content="#111111" />
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
                    "@id": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder#webpage",
                    "url": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder",
                    "name": "Free Security Guard Resume Builder 2026 - ATS Templates for Security Pros",
                    "description": "Create professional ATS-optimized security guard resumes for free. Land interviews 3x faster with our security resume builder.",
                    "datePublished": "2026-01-01",
                    "dateModified": safeLastModifiedDate,
                    "inLanguage": "en-US",
                    "isPartOf": {
                      "@type": "WebSite",
                      "@id": "https://professionalresumefree.com/#website",
                      "url": "https://professionalresumefree.com",
                      "name": "Professional Security Resume Free",
                      "description": "Free online resume builder for security professionals",
                      "publisher": {
                        "@type": "Organization",
                        "@id": "https://professionalresumefree.com/#organization",
                        "name": "Professional Security Resume Free",
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
                      "url": "https://professionalresumefree.com/images/og-security-guard-resume-builder-preview.jpg",
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
                          "name": "Security Guard Resume Builder",
                          "item": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder"
                        }
                      ]
                    },
                    "mainEntity": {
                      "@type": "SoftwareApplication",
                      "name": "Security Guard Resume Builder - ATS Optimized Security Resume Maker",
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
                        "ratingCount": 42365,
                        "bestRating": 5,
                        "worstRating": 1
                      },
                      "description": "Free online ATS-friendly security guard resume builder for security guards, officers, surveillance operators, and protection specialists.",
                      "featureList": [
                        "Security ATS-Optimized Templates",
                        "Security Certification Formatting",
                        "One-Click PDF Download",
                        "License-Focused Sections",
                        "Mobile-Friendly Editor",
                        "No Sign Up Required",
                        "Free Forever"
                      ],
                      "softwareVersion": "2026.1.0",
                      "screenshot": "https://professionalresumefree.com/images/screenshot-security-guard-resume-builder.jpg",
                      "applicationSuite": "Security Career Tools",
                      "countriesSupported": "Global",
                      "fileSize": "Web Application"
                    }
                  },
                  {
                    "@type": "FAQPage",
                    "@id": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder#faqpage",
                    "mainEntity": faqs.map((faq, index) => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                        "datePublished": safeFaqDates[index] || safeCurrentDate,
                        "author": {
                          "@type": "Person",
                          "name": "Security Guard Resume Builder Support Team"
                        }
                      },
                      "mainEntityOfPage": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder#webpage"
                    }))
                  },
                  {
                    "@type": "HowTo",
                    "name": "How to Create a Professional Security Guard Resume with Our Free Builder",
                    "description": "Step-by-step guide to create an ATS-optimized security guard resume for free",
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
                        "name": "Choose a Security Guard Template",
                        "text": "Select from our ATS-optimized security guard resume templates designed for armed guards, unarmed guards, surveillance operators, and executive protection specialists.",
                        "url": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder#templates",
                        "image": "https://professionalresumefree.com/images/step1-security-template.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Enter Your Security Information",
                        "text": "Add your security experience, licenses, certifications, training, and specialized skills using our guided forms.",
                        "url": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder#editor",
                        "image": "https://professionalresumefree.com/images/step2-security-info.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Customize and Optimize",
                        "text": "Use our security-specific suggestions to improve security keywords, certifications, and formatting for ATS compatibility.",
                        "url": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder#optimize",
                        "image": "https://professionalresumefree.com/images/step3-optimize.jpg"
                      },
                      {
                        "@type": "HowToStep",
                        "position": 4,
                        "name": "Download Your Security Guard Resume",
                        "text": "Export your professional security guard resume as PDF, Word, or plain text - completely free, no watermarks.",
                        "url": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder#download",
                        "image": "https://professionalresumefree.com/images/step4-download.jpg"
                      }
                    ]
                  },
                  {
                    "@type": "Service",
                    "serviceType": "Online Security Guard Resume Building Service",
                    "provider": {
                      "@type": "Organization",
                      "name": "Professional Security Resume Free",
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
                      "name": "Free Security Guard Resume Building Services",
                      "itemListElement": [
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Security ATS Resume Templates"
                          }
                        },
                        {
                          "@type": "Offer",
                          "itemOffered": {
                            "@type": "Service",
                            "name": "Security Resume Editing"
                          }
                        }
                      ]
                    },
                    "description": "Free ATS-friendly security guard resume builder for security professionals worldwide",
                    "offers": {
                      "@type": "Offer",
                      "price": "0",
                      "priceCurrency": "USD"
                    }
                  },
                  {
                    "@type": "SpeakableSpecification",
                    "cssSelector": [".sf-hero-title", ".sf-hero-subtitle", ".sf-faq-question"]
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
                          "name": "Professional Security Resume Free"
                        },
                        "itemReviewed": {
                          "@type": "SoftwareApplication",
                          "name": "Security Guard Resume Builder - ATS Optimized Security Resume Maker",
                          "applicationCategory": "BusinessApplication",
                          "operatingSystem": "Any",
                          "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                          },
                          "description": "Free online ATS-friendly security guard resume builder that helps security professionals create professional resumes and land security jobs faster.",
                          "url": "https://professionalresumefree.com/ats-friendly-security-guard-resume-builder"
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
        <div className="sf-freshness-indicator" style={{ display: 'none' }}>
          <meta name="build-timestamp" content={buildTimestamp} />
          <meta name="content-freshness" content={freshnessIndicator} />
        </div>

        {/* Breadcrumb Navigation */}
        <nav className="sf-breadcrumb" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="https://professionalresumefree.com" className="sf-breadcrumb-link" prefetch={false}>
                <FiHome className="sf-breadcrumb-icon"/>
                <span className="sf-breadcrumb-text">Home</span>
              </Link>
            </li>
            <li className="sf-breadcrumb-separator">
              <FiChevronRightIcon/>
            </li>
            <li>
              <Link href="/ats-friendly-security-guard-resume-builder" className="sf-breadcrumb-link" prefetch={false}>
                <span className="sf-breadcrumb-text">Free Security Template</span>
              </Link>
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="sf-hero">
          <div className="sf-container">
            <div className="sf-hero-content">
              <div className="sf-trust-badge">
                <FiStar className="sf-trust-icon"/>
                <span className="sf-trust-text">
                 Best Free Security Guard Resume Builder 2026
                </span>
              </div>
              
              <h1 className="sf-hero-title">
                Create Your <span className="sf-gradient-text">Security Guard Resume 2026</span>
              </h1>
              
              <p className="sf-hero-subtitle">
                Create a <strong className="sf-hero-highlight">professional, ATS-optimized security guard resume for free in minutes.</strong> Our security resume builder helps you highlight certifications, licenses, and security experience that impress hiring managers.
              </p>

              <div className="sf-cta-buttons">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="sf-btn-primary"
                  aria-label="Start building your free security guard resume now—no sign-up required"
                >
                  <span className="sf-btn-text">Start Building Your Security Resume Now</span>
                  <FiArrowRight className="sf-btn-icon" />
                  <div className="sf-btn-pulse"></div>
                </button>
                
                <button
                  onClick={generatePDF}
                  className="sf-btn-secondary"
                  aria-label="Download security guard resume as PDF"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload className="sf-btn-icon" />
                  <span className="sf-btn-text">Download Security Resume PDF</span>
                </button>
              </div>

              <div className="sf-industry-badges">
                <div className="sf-badge-grid">
                  <span className="sf-badge-item"><FiShield /> Armed Security Guard</span>
                  <span className="sf-badge-item"><FiUsers /> Corporate Security</span>
                  <span className="sf-badge-item"><FiCamera /> Surveillance Operator</span>
                  <span className="sf-badge-item"><FiLock /> Executive Protection</span>
                  <span className="sf-badge-item"><FiVideo /> CCTV Monitoring</span>
                  <span className="sf-badge-item"><FiAlertCircle /> Event Security</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="sf-layout">
          {/* Preview Section */}
          <div className="sf-preview-section">
            <div className="sf-preview-header">
              <div className="sf-preview-actions">
                <button onClick={() => setShowFullPreview(!showFullPreview)} className="sf-preview-btn">
                  <FiEye /> {showFullPreview ? 'Hide Full Preview' : 'Show Full Preview'}
                </button>
                <button
                  onClick={generatePDF}
                  className="sf-download-btn"
                  disabled={isGeneratingPDF || !hasContent()}
                >
                  <FiDownload />
                  {isGeneratingPDF ? 'Generating PDF...' : 'Download PDF'}
                </button>
              </div>
            </div>

            <div className={`sf-preview-container ${showFullPreview ? 'sf-full-preview' : ''}`}>
              <div className="sf-resume-card">
                <div className="sf-preview-content">
                  <div
                    className="sf-resume-preview"
                    ref={resumeRef}
                  >
                    <SecurityGuardTemplate formData={formData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="sf-form-section">
            <div className="sf-form-nav">
              {[
                { id: 'personal', label: 'Personal', icon: <FiUser /> },
                { id: 'experience', label: 'Security Exp', icon: <FiShield /> },
                { id: 'education', label: 'Education', icon: <FiBook /> },
                { id: 'licenses', label: 'Licenses & Certs', icon: <FiFileText /> },
                { id: 'skills', label: 'Skills & Training', icon: <FiActivity /> },
                { id: 'settings', label: 'Font Settings', icon: <FiSettings /> },
              ].map((item) => (
                <button
                  key={item.id}
                  className={`sf-nav-btn ${activeSection === item.id ? 'sf-nav-btn-active' : ''}`}
                  onClick={() => setActiveSection(item.id)}
                >
                  {item.icon} <span>{item.label}</span>
                </button>
              ))}
            </div>

            <div className="sf-form-content">
              {/* Personal Section */}
              {activeSection === 'personal' && (
                <div className="sf-form-section-content">
                  <h3 className="sf-form-section-title"><FiUser /> Personal Information</h3>
                  <div className="sf-form-card">
                    <div className="sf-form-group">
                      <label className="sf-form-label">
                        Full Name*
                        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} placeholder="John Smith, Security Officer" required className="sf-form-input" />
                      </label>
                      <label className="sf-form-label">
                        Email*
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="john.smith@security.com" required className="sf-form-input" />
                      </label>
                    </div>
                    <div className="sf-form-group">
                      <label className="sf-form-label">
                        Phone*
                        <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" required className="sf-form-input" />
                      </label>
                      <label className="sf-form-label">
                        Location*
                        <input type="text" name="address" value={formData.address} onChange={handleInputChange} placeholder="City, State, Country" required className="sf-form-input" />
                      </label>
                    </div>
                  </div>

                  <div className="sf-form-card">
                    <label className="sf-form-label">
                      Professional Security Summary*
                      <textarea
                        name="summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        placeholder="Experienced and vigilant Security Officer with 5+ years of experience in corporate security and facility protection. Highly skilled in surveillance monitoring, access control, incident response, and emergency procedures. Proven track record of maintaining secure environments and preventing security breaches. Certified in First Aid/CPR and experienced with various security equipment."
                        required
                        className="sf-form-textarea"
                        rows="6"
                      />
                      <div className="sf-char-count">
                        {formData.summary.length}/500 characters
                      </div>
                    </label>
                  </div>

                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title"><FiGlobe /> Professional Links</h4>
                    <p className="sf-section-desc">Add your professional security profiles (LinkedIn, portfolio, etc.)</p>
                    <div className="sf-skills-input">
                      <select 
                        value={currentSocialLink.platform} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, platform: e.target.value })} 
                        className="sf-form-select"
                      >
                        <option value="">Select Platform</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Website">Professional Website</option>
                        <option value="Portfolio">Security Portfolio</option>
                        <option value="LinkedInSafety">LinkedIn for Safety Pros</option>
                        <option value="Other">Other Professional Profile</option>
                      </select>
                      <input 
                        type="url" 
                        placeholder="https://linkedin.com/in/yourprofile" 
                        value={currentSocialLink.url} 
                        onChange={(e) => setCurrentSocialLink({ ...currentSocialLink, url: e.target.value })} 
                        className="sf-form-input" 
                      />
                      <div className="sf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSocialLink} 
                          className="sf-add-btn" 
                          disabled={!currentSocialLink.platform || !currentSocialLink.url}
                        >
                          <FiPlus /> {currentSocialLink.isEditing ? 'Update' : 'Add Link'}
                        </button>
                        {currentSocialLink.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSocialLink(defaultSocialLink())} 
                            className="sf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="sf-items-list">
                      {formData.socialLinks.length === 0 ? (
                        <p className="sf-empty-msg">No professional links added yet</p>
                      ) : (
                        formData.socialLinks.map((link, i) => (
                          <div key={i} className="sf-list-item">
                            <div className="sf-item-content">
                              <span className="sf-item-title">{link.platform}</span>
                              <span className="sf-item-subtitle">{formatSocialUrl(link.url)}</span>
                            </div>
                            <div className="sf-item-actions">
                              <button onClick={() => editSocialLink(i)} className="sf-edit-btn" aria-label={`Edit ${link.platform} link`}><FiEdit2 /></button>
                              <button onClick={() => deleteSocialLink(i)} className="sf-delete-btn" aria-label={`Delete ${link.platform} link`}><FiTrash2 /></button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Security Experience Section */}
              {activeSection === 'experience' && (
                <div className="sf-form-section-content">
                  <h3 className="sf-form-section-title"><FiShield /> Security Experience</h3>
                  <p className="sf-section-desc">List your security positions in reverse chronological order (most recent first)</p>
                  
                  <div className="sf-form-card">
                    <div className="sf-form-group">
                      <label className="sf-form-label">
                        Position Title*
                        <input 
                          value={currentExperience.position} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, position: e.target.value })} 
                          placeholder="Security Officer, Armed Security Guard, Surveillance Operator" 
                          required 
                          className="sf-form-input" 
                        />
                      </label>
                      <label className="sf-form-label">
                        Security Company/Employer*
                        <input 
                          value={currentExperience.employer} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, employer: e.target.value })} 
                          placeholder="Global Security Solutions Inc." 
                          required 
                          className="sf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="sf-form-label">
                      Facility Type / Location / Site
                      <input 
                        value={currentExperience.facilityType} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, facilityType: e.target.value })} 
                        placeholder="Corporate Office Building / Retail Mall / Government Facility" 
                        className="sf-form-input" 
                      />
                    </label>
                    <div className="sf-form-group">
                      <label className="sf-form-label">
                        Start Date*
                        <input 
                          type="text" 
                          placeholder="Month Year (e.g., January 2020)" 
                          value={currentExperience.startDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, startDate: e.target.value })} 
                          required 
                          className="sf-form-input" 
                        />
                      </label>
                      <label className="sf-form-label">
                        End Date
                        <input 
                          type="text" 
                          placeholder="Month Year or Present" 
                          value={currentExperience.endDate} 
                          onChange={(e) => setCurrentExperience({ ...currentExperience, endDate: e.target.value })} 
                          className="sf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="sf-form-label">
                      Key Security Responsibilities & Achievements*
                      <textarea 
                        value={currentExperience.description} 
                        onChange={(e) => setCurrentExperience({ ...currentExperience, description: e.target.value })} 
                        placeholder="• Monitored and operated CCTV systems covering 50+ cameras across facility
• Conducted regular patrols of premises, checking for security breaches and safety hazards
• Controlled access points, verifying credentials and maintaining visitor logs
• Responded promptly to security incidents and emergency situations
• Prepared detailed incident reports and maintained daily activity logs
• Collaborated with local law enforcement during investigations
• Reduced unauthorized access incidents by 40% through enhanced monitoring procedures"
                        required 
                        className="sf-form-textarea" 
                        rows="8" 
                      />
                      <div className="sf-char-count">
                        {currentExperience.description.length}/2000 characters
                      </div>
                    </label>
                    <div className="sf-form-actions">
                      <button 
                        type="button" 
                        onClick={addExperience} 
                        className="sf-add-btn" 
                        disabled={!currentExperience.position || !currentExperience.employer || !currentExperience.startDate}
                      >
                        <FiPlus /> {currentExperience.isEditing ? 'Update Security Experience' : 'Add Security Experience'}
                      </button>
                      {currentExperience.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentExperience(defaultExperience())} 
                          className="sf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title">Your Security Experience</h4>
                    {formData.experience.length === 0 ? (
                      <p className="sf-empty-msg">No security experience added yet</p>
                    ) : (
                      <div className="sf-items-list">
                        {formData.experience.map((exp, i) => (
                          <div key={i} className="sf-list-item">
                            <div className="sf-item-content">
                              <div className="sf-item-header">
                                <strong className="sf-item-title">{exp.position}</strong>
                                <span className="sf-item-subtitle">at {exp.employer}</span>
                              </div>
                              <div className="sf-item-meta">
                                <span>{exp.startDate} – {exp.endDate || 'Present'}</span>
                                {exp.facilityType && <span>{exp.facilityType}</span>}
                              </div>
                              <div className="sf-item-desc">
                                {exp.description.split('\n').filter(l => l.trim()).map((line, j) => (
                                  <p key={j} className="sf-bullet-point">• {line}</p>
                                ))}
                              </div>
                            </div>
                            <div className="sf-item-actions">
                              <button onClick={() => editExperience(i)} className="sf-edit-btn" aria-label={`Edit ${exp.position} experience`}><FiEdit2 /></button>
                              <button onClick={() => deleteExperience(i)} className="sf-delete-btn" aria-label={`Delete ${exp.position} experience`}><FiTrash2 /></button>
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
                <div className="sf-form-section-content">
                  <h3 className="sf-form-section-title"><FiBook /> Education & Security Training</h3>
                  <p className="sf-section-desc">List your formal education and relevant security training programs</p>
                  
                  <div className="sf-form-card">
                    <div className="sf-form-group">
                      <label className="sf-form-label">
                        Institution/Training Center*
                        <input 
                          value={currentEducation.institution} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, institution: e.target.value })} 
                          placeholder="National Security Training Academy" 
                          required 
                          className="sf-form-input" 
                        />
                      </label>
                      <label className="sf-form-label">
                        Degree/Certificate/Program*
                        <input 
                          value={currentEducation.degree} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, degree: e.target.value })} 
                          placeholder="Security Officer Training Program" 
                          required 
                          className="sf-form-input" 
                        />
                      </label>
                    </div>
                    <label className="sf-form-label">
                      Specialization / Focus Area
                      <input 
                        value={currentEducation.program} 
                        onChange={(e) => setCurrentEducation({ ...currentEducation, program: e.target.value })} 
                        placeholder="Armed Security, Executive Protection, Surveillance" 
                        className="sf-form-input" 
                      />
                    </label>
                    <div className="sf-form-group">
                      <label className="sf-form-label">
                        Start Date
                        <input 
                          type="text" 
                          placeholder="Month Year" 
                          value={currentEducation.startDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, startDate: e.target.value })} 
                          className="sf-form-input" 
                        />
                      </label>
                      <label className="sf-form-label">
                        End Date / Expected
                        <input 
                          type="text" 
                          placeholder="Month Year or Expected" 
                          value={currentEducation.endDate} 
                          onChange={(e) => setCurrentEducation({ ...currentEducation, endDate: e.target.value })} 
                          className="sf-form-input" 
                        />
                      </label>
                    </div>
                    <div className="sf-form-actions">
                      <button 
                        type="button" 
                        onClick={addEducation} 
                        className="sf-add-btn" 
                        disabled={!currentEducation.institution || !currentEducation.degree}
                      >
                        <FiPlus /> {currentEducation.isEditing ? 'Update Education' : 'Add Education'}
                      </button>
                      {currentEducation.isEditing && (
                        <button 
                          type="button" 
                          onClick={() => setCurrentEducation(defaultEducation())} 
                          className="sf-cancel-btn"
                        >
                          <FiX /> Cancel
                        </button>
                      )}
                    </div>
                  </div>
                  
                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title">Your Education & Training</h4>
                    {formData.education.length === 0 ? (
                      <p className="sf-empty-msg">No education/training added yet</p>
                    ) : (
                      <div className="sf-items-list">
                        {formData.education.map((edu, i) => (
                          <div key={i} className="sf-list-item">
                            <div className="sf-item-content">
                              <div className="sf-item-header">
                                <strong className="sf-item-title">{edu.degree}</strong>
                                {edu.program && <span className="sf-item-subtitle"> – {edu.program}</span>}
                              </div>
                              <div className="sf-item-meta">
                                <span>{edu.institution}</span>
                                <span>{edu.startDate} – {edu.endDate || 'Present'}</span>
                              </div>
                            </div>
                            <div className="sf-item-actions">
                              <button onClick={() => editEducation(i)} className="sf-edit-btn" aria-label={`Edit ${edu.degree}`}><FiEdit2 /></button>
                              <button onClick={() => deleteEducation(i)} className="sf-delete-btn" aria-label={`Delete ${edu.degree}`}><FiTrash2 /></button>
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
                <div className="sf-form-section-content">
                  <h3 className="sf-form-section-title"><FiFileText /> Security Licenses & Certifications</h3>
                  
                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title"><FiShield /> Security Licenses</h4>
                    <p className="sf-section-desc">Add your state/province/country security licenses</p>
                    <div className="sf-skills-input">
                      <div className="sf-form-group">
                        <label className="sf-form-label">
                          License Name*
                          <input 
                            value={currentLicense.name} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, name: e.target.value })} 
                            placeholder="State Armed Security Guard License" 
                            className="sf-form-input" 
                          />
                        </label>
                        <label className="sf-form-label">
                          Issuing Authority*
                          <input 
                            value={currentLicense.issuingAuthority} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, issuingAuthority: e.target.value })} 
                            placeholder="State Security Licensing Board" 
                            className="sf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="sf-form-group">
                        <label className="sf-form-label">
                          License Number
                          <input 
                            value={currentLicense.licenseNumber} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, licenseNumber: e.target.value })} 
                            placeholder="SG-1234567" 
                            className="sf-form-input" 
                          />
                        </label>
                        <label className="sf-form-label">
                          Expiry Date
                          <input 
                            value={currentLicense.expiryDate} 
                            onChange={(e) => setCurrentLicense({ ...currentLicense, expiryDate: e.target.value })} 
                            placeholder="Month Year" 
                            className="sf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="sf-form-actions">
                        <button 
                          type="button" 
                          onClick={addLicense} 
                          className="sf-add-btn" 
                          disabled={!currentLicense.name.trim()}
                        >
                          <FiPlus /> {currentLicense.isEditing ? 'Update License' : 'Add License'}
                        </button>
                        {currentLicense.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentLicense(defaultLicense())} 
                            className="sf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="sf-items-list">
                      {formData.licenses.map((l, i) => (
                        <div key={i} className="sf-list-item">
                          <div>
                            <strong>{l.name}</strong>
                            {l.issuingAuthority && ` – ${l.issuingAuthority}`}
                            {l.licenseNumber && ` (#${l.licenseNumber})`}
                            {l.expiryDate && ` – Expires: ${l.expiryDate}`}
                          </div>
                          <div className="sf-item-actions">
                            <button onClick={() => editLicense(i)} className="sf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteLicense(i)} className="sf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.licenses.length === 0 && <p className="sf-empty-msg">No licenses added yet</p>}
                    </div>
                  </div>

                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title"><FiAward /> Professional Certifications</h4>
                    <p className="sf-section-desc">Add your professional security certifications</p>
                    <div className="sf-skills-input">
                      <div className="sf-form-group">
                        <label className="sf-form-label">
                          Certification Name*
                          <input 
                            value={currentCertification.name} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, name: e.target.value })} 
                            placeholder="CPP (Certified Protection Professional)" 
                            className="sf-form-input" 
                          />
                        </label>
                        <label className="sf-form-label">
                          Issuing Organization*
                          <input 
                            value={currentCertification.issuingOrganization} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, issuingOrganization: e.target.value })} 
                            placeholder="ASIS International" 
                            className="sf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="sf-form-group">
                        <label className="sf-form-label">
                          Date Obtained
                          <input 
                            value={currentCertification.dateObtained} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, dateObtained: e.target.value })} 
                            placeholder="Month Year" 
                            className="sf-form-input" 
                          />
                        </label>
                        <label className="sf-form-label">
                          Expiry Date
                          <input 
                            value={currentCertification.expiryDate} 
                            onChange={(e) => setCurrentCertification({ ...currentCertification, expiryDate: e.target.value })} 
                            placeholder="Month Year" 
                            className="sf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="sf-form-actions">
                        <button 
                          type="button" 
                          onClick={addCertification} 
                          className="sf-add-btn" 
                          disabled={!currentCertification.name.trim()}
                        >
                          <FiPlus /> {currentCertification.isEditing ? 'Update Certification' : 'Add Certification'}
                        </button>
                        {currentCertification.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentCertification(defaultCertification())} 
                            className="sf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="sf-items-list">
                      {formData.certifications.map((c, i) => (
                        <div key={i} className="sf-list-item">
                          <div>
                            <strong>{c.name}</strong>
                            {c.issuingOrganization && ` – ${c.issuingOrganization}`}
                            {c.dateObtained && ` – Obtained: ${c.dateObtained}`}
                            {c.expiryDate && ` – Expires: ${c.expiryDate}`}
                          </div>
                          <div className="sf-item-actions">
                            <button onClick={() => editCertification(i)} className="sf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteCertification(i)} className="sf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.certifications.length === 0 && <p className="sf-empty-msg">No certifications added yet</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Skills & Training Section */}
              {activeSection === 'skills' && (
                <div className="sf-form-section-content">
                  <h3 className="sf-form-section-title"><FiActivity /> Skills, Training & Equipment</h3>
                  
                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title">Security Specialties</h4>
                    <p className="sf-section-desc">List your security specialties and areas of expertise</p>
                    <div className="sf-skills-input">
                      <input 
                        value={currentSpecialty.name} 
                        onChange={(e) => setCurrentSpecialty({ ...currentSpecialty, name: e.target.value })} 
                        placeholder="Access Control, CCTV Surveillance, Executive Protection, Crowd Management" 
                        className="sf-form-input" 
                      />
                      <div className="sf-form-actions">
                        <button 
                          type="button" 
                          onClick={addSpecialty} 
                          className="sf-add-btn" 
                          disabled={!currentSpecialty.name.trim()}
                        >
                          <FiPlus /> {currentSpecialty.isEditing ? 'Update Specialty' : 'Add Specialty'}
                        </button>
                        {currentSpecialty.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentSpecialty(defaultSpecialty())} 
                            className="sf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="sf-items-list">
                      {formData.specialties.map((s, i) => (
                        <div key={i} className="sf-list-item">
                          <span>{s.name}</span>
                          <div className="sf-item-actions">
                            <button onClick={() => editSpecialty(i)} className="sf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteSpecialty(i)} className="sf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.specialties.length === 0 && <p className="sf-empty-msg">No specialties added yet</p>}
                    </div>
                  </div>

                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title"><FiTool /> Security Training</h4>
                    <p className="sf-section-desc">Add your specialized security training programs</p>
                    <div className="sf-skills-input">
                      <div className="sf-form-group">
                        <label className="sf-form-label">
                          Training Program*
                          <input 
                            value={currentTraining.name} 
                            onChange={(e) => setCurrentTraining({ ...currentTraining, name: e.target.value })} 
                            placeholder="First Aid & CPR Certification" 
                            className="sf-form-input" 
                          />
                        </label>
                        <label className="sf-form-label">
                          Training Provider
                          <input 
                            value={currentTraining.provider} 
                            onChange={(e) => setCurrentTraining({ ...currentTraining, provider: e.target.value })} 
                            placeholder="American Red Cross" 
                            className="sf-form-input" 
                          />
                        </label>
                      </div>
                      <label className="sf-form-label">
                        Date Completed
                        <input 
                          value={currentTraining.dateCompleted} 
                          onChange={(e) => setCurrentTraining({ ...currentTraining, dateCompleted: e.target.value })} 
                          placeholder="Month Year" 
                          className="sf-form-input" 
                        />
                      </label>
                      <div className="sf-form-actions">
                        <button 
                          type="button" 
                          onClick={addTraining} 
                          className="sf-add-btn" 
                          disabled={!currentTraining.name.trim()}
                        >
                          <FiPlus /> {currentTraining.isEditing ? 'Update Training' : 'Add Training'}
                        </button>
                        {currentTraining.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentTraining(defaultTraining())} 
                            className="sf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="sf-items-list">
                      {formData.trainings.map((t, i) => (
                        <div key={i} className="sf-list-item">
                          <div>
                            <strong>{t.name}</strong>
                            {t.provider && ` – ${t.provider}`}
                            {t.dateCompleted && ` – Completed: ${t.dateCompleted}`}
                          </div>
                          <div className="sf-item-actions">
                            <button onClick={() => editTraining(i)} className="sf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteTraining(i)} className="sf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.trainings.length === 0 && <p className="sf-empty-msg">No training added yet</p>}
                    </div>
                  </div>

                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title"><FiTool /> Security Equipment Proficiency</h4>
                    <p className="sf-section-desc">List security equipment and systems you're proficient with</p>
                    <div className="sf-skills-input">
                      <div className="sf-form-group">
                        <label className="sf-form-label">
                          Equipment/System*
                          <input 
                            value={currentEquipment.name} 
                            onChange={(e) => setCurrentEquipment({ ...currentEquipment, name: e.target.value })} 
                            placeholder="CCTV Surveillance Systems" 
                            className="sf-form-input" 
                          />
                        </label>
                        <label className="sf-form-label">
                          Proficiency Level
                          <input 
                            value={currentEquipment.proficiency} 
                            onChange={(e) => setCurrentEquipment({ ...currentEquipment, proficiency: e.target.value })} 
                            placeholder="Advanced, Certified, Experienced" 
                            className="sf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="sf-form-actions">
                        <button 
                          type="button" 
                          onClick={addEquipment} 
                          className="sf-add-btn" 
                          disabled={!currentEquipment.name.trim()}
                        >
                          <FiPlus /> {currentEquipment.isEditing ? 'Update Equipment' : 'Add Equipment'}
                        </button>
                        {currentEquipment.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentEquipment(defaultEquipment())} 
                            className="sf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="sf-items-list">
                      {formData.equipment.map((e, i) => (
                        <div key={i} className="sf-list-item">
                          <div>
                            {e.name}{e.proficiency && ` (${e.proficiency})`}
                          </div>
                          <div className="sf-item-actions">
                            <button onClick={() => editEquipment(i)} className="sf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteEquipment(i)} className="sf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.equipment.length === 0 && <p className="sf-empty-msg">No equipment added yet</p>}
                    </div>
                  </div>

                  <div className="sf-form-card">
                    <h4 className="sf-sub-section-title">Languages</h4>
                    <p className="sf-section-desc">List languages you speak and your proficiency level</p>
                    <div className="sf-skills-input">
                      <div className="sf-form-group">
                        <label className="sf-form-label">
                          Language*
                          <input 
                            value={currentLanguage.name} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, name: e.target.value })} 
                            placeholder="Spanish" 
                            className="sf-form-input" 
                          />
                        </label>
                        <label className="sf-form-label">
                          Proficiency Level
                          <input 
                            value={currentLanguage.proficiency} 
                            onChange={(e) => setCurrentLanguage({ ...currentLanguage, proficiency: e.target.value })} 
                            placeholder="Fluent, Conversational, Basic" 
                            className="sf-form-input" 
                          />
                        </label>
                      </div>
                      <div className="sf-form-actions">
                        <button 
                          type="button" 
                          onClick={addLanguage} 
                          className="sf-add-btn" 
                          disabled={!currentLanguage.name.trim()}
                        >
                          <FiPlus /> {currentLanguage.isEditing ? 'Update Language' : 'Add Language'}
                        </button>
                        {currentLanguage.isEditing && (
                          <button 
                            type="button" 
                            onClick={() => setCurrentLanguage(defaultLanguage())} 
                            className="sf-cancel-btn"
                          >
                            <FiX /> Cancel
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="sf-items-list">
                      {formData.languages.map((l, i) => (
                        <div key={i} className="sf-list-item">
                          <div>
                            {l.name}{l.proficiency && ` (${l.proficiency})`}
                          </div>
                          <div className="sf-item-actions">
                            <button onClick={() => editLanguage(i)} className="sf-edit-btn"><FiEdit2 /></button>
                            <button onClick={() => deleteLanguage(i)} className="sf-delete-btn"><FiTrash2 /></button>
                          </div>
                        </div>
                      ))}
                      {formData.languages.length === 0 && <p className="sf-empty-msg">No languages added yet</p>}
                    </div>
                  </div>
                </div>
              )}

              {/* Font Settings Section */}
              {activeSection === 'settings' && (
                <div className="sf-form-section-content">
                  <h3 className="sf-form-section-title"><FiSettings /> Font Size Settings</h3>
                  <p className="sf-section-desc">Customize font sizes for your security guard resume PDF. All sizes are in points (pt).</p>
                  
                  <div className="sf-form-card">
                    <div className="sf-font-grid">
                      {[
                        {key:'name',label:'Name'},
                        {key:'sectionTitle',label:'Section Titles'},
                        {key:'jobTitle',label:'Job Titles'},
                        {key:'degree',label:'Degrees/Certificates'},
                        {key:'institution',label:'Institution Names'},
                        {key:'institutionDate',label:'Dates'},
                        {key:'regularText',label:'Regular Text'},
                        {key:'bulletText',label:'Bullet Points'},
                        {key:'contactInfo',label:'Contact Info'},
                        {key:'skillText',label:'Skills Text'},
                        {key:'licenseText',label:'License Text'}
                      ].map(({key,label})=>(
                        <div key={key} className="sf-font-control">
                          <label className="sf-font-label">
                            <span>{label}</span>
                            <span className="sf-font-value">{fontSizes[key]}pt</span>
                          </label>
                          <input 
                            type="range" 
                            min={key==='institutionDate'?4:6} 
                            max={key==='name'?24:key==='sectionTitle'?18:key==='jobTitle'||key==='degree'?16:14} 
                            value={fontSizes[key]} 
                            onChange={e=>handleFontSizeChange(key,e.target.value)} 
                            className="sf-font-slider"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      type="button" 
                      onClick={resetFontSizes}
                      className="sf-reset-btn"
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
        <section className="sf-faq-section" aria-labelledby="faq-title">
          <div className="sf-container">
            <div className="sf-section-header">
              <h2 id="faq-title">Frequently Asked Questions</h2>
              <p>
                Everything you need to know about creating professional security guard resumes with our tool.
              </p>
            </div>
            <div className="sf-faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="sf-faq-item">
                  <h3 className="sf-faq-question">{faq.question}</h3>
                  <p className="sf-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="sf-cta-section" aria-labelledby="cta-title">
          <div className="sf-container">
            <div className="sf-cta-content">
              <h2 className="sf-cta-title" id="cta-title">Ready to Secure Your Next Career Opportunity?</h2>
              <p className="sf-cta-subtitle">
                Join 2 million+ security professionals who landed their dream roles with our free ATS-friendly security guard resume builder.
              </p>
              <div className="sf-cta-btn-wrap">
                <button
                  onClick={() => setActiveSection('personal')}
                  className="sf-cta-btn"
                  aria-label="Create your free security guard resume now—no sign-up required"
                >
                  <span className="sf-cta-btn-text">Create Your Free Security Resume Now</span>
                  <FiArrowRight className="sf-cta-btn-icon" />
                </button>
              </div>
              <div className="sf-cta-guarantee">
                <FiCheck className="sf-guarantee-icon" />
                <span className="sf-guarantee-text">No credit card required • Free forever • Download in minutes • ATS Optimized for Security</span>
              </div>
            </div>
          </div>
        </section>

        {/* Full Preview Modal */}
        {showFullPreview && (
          <div className="sf-modal" onClick={() => setShowFullPreview(false)}>
            <div className="sf-modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="sf-modal-header">
                <h3>Full Security Guard Resume Preview</h3>
                <button className="sf-close-btn" onClick={() => setShowFullPreview(false)}><FiX /></button>
              </div>
              <div className="sf-modal-pages">
                <div className="sf-modal-page">
                  <SecurityGuardTemplate formData={formData} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showSharePopup && (
          <div className="sf-share-overlay" onClick={() => setShowSharePopup(false)}>
            <div className="sf-share-card" onClick={e => e.stopPropagation()}>
              <span className="sf-share-icon">💬</span>
              <h2 className="sf-share-headline">Loved Using This?</h2>
              <p className="sf-share-body">It only takes 5 seconds to share professionalresumefree.com — but it could change someone's career. Thanks for spreading the word!</p>
              <button className="sf-share-close-btn" onClick={() => setShowSharePopup(false)}>Close</button>
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

  const breadcrumbData = [
    { name: 'Home', item: 'https://professionalresumefree.com/' },
    { name: 'Security Guard Resume Builder', item: 'https://professionalresumefree.com/ats-friendly-security-guard-resume-builder' }
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
    revalidate: 3600
  };
}

export default SecurityGuardResume;