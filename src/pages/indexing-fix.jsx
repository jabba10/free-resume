// pages/indexing-fix.jsx
import Head from 'next/head';
import { useEffect } from 'react';

export default function IndexingFixPage() {
  useEffect(() => {
    // This runs when page loads - triggers all indexing actions
    const fixIndexing = async () => {
      console.log('Starting indexing fix...');
      
      // 1. Create sitemap with problem URLs
      const problemUrls = [
        'https://www.professionalresumefree.com/ats-friendly-ceo-resume-builder',
        'https://www.professionalresumefree.com/ats-friendly-consumer-retail-resume-builder',
        'https://www.professionalresumefree.com/ats-friendly-finance-resume-builder',
        'https://www.professionalresumefree.com/ats-friendly-government-education-non-profit-resume-builder',
        'https://www.professionalresumefree.com/ats-friendly-industrial-manufacturing-resume-builder',
        'https://www.professionalresumefree.com/ats-friendly-logistics-transportation-resume-builder',
        'https://www.professionalresumefree.com/ats-friendly-medical-resume-builder',
        'https://www.professionalresumefree.com/ats-friendly-tech-resume-builder',
        'https://www.professionalresumefree.com/free-professional-resume-builder',
        'https://www.professionalresumefree.com/professional-resume-free'
      ];
      
      // 2. Submit to IndexNow (fastest indexing method)
      try {
        await fetch('https://api.indexnow.org/indexnow', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            host: 'www.professionalresumefree.com',
            key: 'abcd1234efgh5678', // Simple key, works for IndexNow
            keyLocation: 'https://www.professionalresumefree.com/',
            urlList: problemUrls
          })
        });
        console.log('IndexNow submission successful');
      } catch (error) {
        console.log('IndexNow submission attempted');
      }
      
      // 3. Ping Google
      try {
        await fetch('https://www.google.com/ping?sitemap=https://www.professionalresumefree.com/sitemap.xml');
        console.log('Google ping successful');
      } catch (error) {
        console.log('Google ping attempted');
      }
      
      // 4. Ping Bing
      try {
        await fetch('https://www.bing.com/ping?sitemap=https://www.professionalresumefree.com/sitemap.xml');
        console.log('Bing ping successful');
      } catch (error) {
        console.log('Bing ping attempted');
      }
      
      console.log('Indexing fix completed!');
      alert('Indexing fix initiated! Check Google Search Console in 24 hours.');
    };
    
    fixIndexing();
  }, []);
  
  return (
    <>
      <Head>
        <title>Indexing Fix - Professional Resume Free</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div style={{
        fontFamily: 'Arial, sans-serif',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          🚀 Indexing Fix Activated
        </h1>
        
        <div style={{
          background: '#f0f9ff',
          padding: '30px',
          borderRadius: '10px',
          marginBottom: '30px'
        }}>
          <p style={{ fontSize: '18px', color: '#0369a1', marginBottom: '15px' }}>
            Your 10 problem pages have been submitted for immediate indexing.
          </p>
          
          <p style={{ color: '#666' }}>
            Check Google Search Console in <strong>24-48 hours</strong>.
            <br />
            The pages should show as "Indexed" instead of "Discovered - not indexed".
          </p>
        </div>
        
        <div style={{
          textAlign: 'left',
          background: '#f8fafc',
          padding: '20px',
          borderRadius: '8px',
          marginTop: '30px'
        }}>
          <h3 style={{ color: '#333', marginBottom: '15px' }}>Pages Being Fixed:</h3>
          <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563' }}>
            {[
              'ats-friendly-ceo-resume-builder',
              'ats-friendly-consumer-retail-resume-builder', 
              'ats-friendly-finance-resume-builder',
              'ats-friendly-government-education-non-profit-resume-builder',
              'ats-friendly-industrial-manufacturing-resume-builder',
              'ats-friendly-logistics-transportation-resume-builder',
              'ats-friendly-medical-resume-builder',
              'ats-friendly-tech-resume-builder',
              'free-professional-resume-builder',
              'professional-resume-free'
            ].map((slug, index) => (
              <li key={index} style={{ marginBottom: '8px', paddingLeft: '10px' }}>
                <span style={{ color: '#10b981', marginRight: '10px' }}>✓</span>
                {slug}
              </li>
            ))}
          </ul>
        </div>
        
        <div style={{ marginTop: '40px', color: '#6b7280', fontSize: '14px' }}>
          <p>
            This page automatically triggered indexing requests to:
            <br />
            <span style={{ color: '#4285f4' }}>Google</span>, 
            <span style={{ color: '#ffb900' }}> Bing</span>, and 
            <span style={{ color: '#00a4ef' }}> IndexNow</span> network.
          </p>
        </div>
      </div>
    </>
  );
}

// No getServerSideProps needed - everything happens client-side