import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
      color: '#e2e8f0',
      textAlign: 'center',
      padding: '20px',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif"
    }}>
      <Head>
        <title>Page Not Found | Professional Resume Builder</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to our homepage to create beautiful, ATS-optimized resumes." />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <h1 style={{ 
        fontSize: '80px', 
        margin: '0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        404
      </h1>
      
      <h2 style={{ 
        fontSize: '24px', 
        margin: '10px 0',
        color: '#ffffff'
      }}>
        Page Not Found
      </h2>
      
      <p style={{ 
        fontSize: '16px', 
        marginBottom: '30px',
        color: '#cbd5e0',
        maxWidth: '400px'
      }}>
        The page you're looking for doesn't exist. Here are some helpful links:
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        marginBottom: '30px',
        width: '100%',
        maxWidth: '300px'
      }}>
        <Link 
          href="/" 
          style={{
            padding: '12px 24px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          🏠 Home Page
        </Link>

        <Link 
          href="/free-resume-builder" 
          style={{
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#e2e8f0',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
        >
          📄 Resume Builder
        </Link>

        <Link 
          href="/about" 
          style={{
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#e2e8f0',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
        >
          ℹ️ About Us
        </Link>

        <Link 
          href="/contact" 
          style={{
            padding: '12px 24px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#e2e8f0',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}
        >
          📞 Contact Us
        </Link>
      </div>

      <style jsx global>{`
        @media (max-width: 480px) {
          .container {
            padding: 0 1rem;
          }
          h1 {
            font-size: 60px !important;
          }
          h2 {
            font-size: 20px !important;
          }
          p {
            font-size: 14px !important;
          }
          .nav-links {
            width: 100% !important;
            max-width: 280px !important;
          }
        }
      `}</style>
    </div>
  );
}