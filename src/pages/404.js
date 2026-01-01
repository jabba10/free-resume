import Head from 'next/head';
import Link from 'next/link';
import styles from './404.module.css';

export default function Custom404() {
  return (
    <div className={styles.pageNotFound}>
      <Head>
        <title>Page Not Found | Professional Resume Builder</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to create beautiful, ATS-optimized resumes." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className={styles.content}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Page Not Found</h2>
        <p className={styles.errorDescription}>
          The page you're looking for doesn't exist. Here are some helpful links:
        </p>

        <div className={styles.linksContainer}>
          <Link href="/" className={styles.primaryButton}>
            🏠 Home Page
          </Link>
          <Link href="/resume-templates" className={styles.secondaryButton}>
            📄 Resume Builder
          </Link>
          <Link href="/about" className={styles.secondaryButton}>
            ℹ️ About Us
          </Link>
          <Link href="/contact" className={styles.secondaryButton}>
            📞 Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}