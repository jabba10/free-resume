'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Handle resize for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      
      if (!mobile && isMenuOpen) {
        closeMenu();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [isMenuOpen, closeMenu]);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Close menu on escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [closeMenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen && isMobile) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMenuOpen, isMobile]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/free-resume-tools', label: 'Resume Tools' },
    { href: '/resume-templates', label: 'Resume Templates' },
    { href: '/resume-calculators', label: 'Resume Calculators' },
    { href: '/usa-jobs-resume-directory', label: 'USA Resume Directory' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className={styles.header} role="banner">
      <div className={styles.container}>
        {/* Brand/Logo - ✅ CONFIRMED: No H1 here, safe for SEO */}
        <div className={styles.brand}>
          <Link 
            href="/" 
            className={styles.logo} 
            onClick={closeMenu}
            aria-label="ProfessionalResumeFree - Go to homepage"
          >
            <span className={styles.logoText}>ProfessionalResumeFree</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuToggle} ${isMenuOpen ? styles.open : ''}`} 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          type="button"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        {/* Overlay for mobile */}
        {isMenuOpen && isMobile && (
          <div 
            className={styles.overlay} 
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        {/* Navigation */}
        <nav 
          id="main-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}
          aria-label="Main navigation"
          aria-hidden={!isMenuOpen && isMobile}
        >
          <ul className={styles.navList} role="menubar">
            {navItems.map((item) => (
              <li key={item.href} className={styles.navItem} role="none">
                <Link 
                  href={item.href} 
                  className={`${styles.navLink} ${
                    pathname === item.href ? styles.active : ''
                  }`}
                  onClick={closeMenu}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  role="menuitem"
                  tabIndex={!isMenuOpen && isMobile ? -1 : 0}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;