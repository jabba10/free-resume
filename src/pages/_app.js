// src/pages/_app.js
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://www.professionalresumefree.com${router.asPath}`;
  const GA_MEASUREMENT_ID = 'G-ZKH84N99Z2';

  // Combined analytics tracking for both GA and GoatCounter
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Google Analytics
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', GA_MEASUREMENT_ID, {
          page_path: url,
          anonymize_ip: true,
        });
      }
      
      // GoatCounter
      if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({
          path: url,
        });
      }
    };

    // Track initial page load
    handleRouteChange(router.asPath);

    // Track route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events, router.asPath, GA_MEASUREMENT_ID]);

  return (
    <>
      <Head>
        {/* ========== ESSENTIAL META TAGS ========== */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* ========== FAVICON & APP ICONS ========== */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* ========== WEB APP MANIFEST (PWA) ========== */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="application-name" content="Professional Resume Free" />
        <meta name="apple-mobile-web-app-title" content="Resume Builder" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* ========== THEME COLORS ========== */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* ========== CANONICAL URL ========== */}
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        
        {/* ========== BASIC SEO ========== */}
        <title>Professional Resume Free - Build Your Perfect Resume</title>
        <meta name="description" content="Create professional resumes for free. Build, customize, and download your perfect resume in minutes with our easy-to-use resume builder." />
        <meta name="keywords" content="resume builder, professional resume, free resume, cv maker, job application, resume template, cover letter, career" />
        
        {/* ========== OPEN GRAPH (SOCIAL MEDIA) ========== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.professionalresumefree.com" />
        <meta property="og:title" content="Professional Resume Free - Build Your Perfect Resume" />
        <meta property="og:description" content="Create professional resumes for free. Build, customize, and download your perfect resume in minutes with our easy-to-use resume builder." />
        <meta property="og:image" content="https://www.professionalresumefree.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Resume Builder Interface" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        
        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ResumeFree" />
        <meta name="twitter:creator" content="@ResumeFree" />
        <meta name="twitter:url" content="https://www.professionalresumefree.com" />
        <meta name="twitter:title" content="Professional Resume Free - Build Your Perfect Resume" />
        <meta name="twitter:description" content="Create professional resumes for free. Build, customize, and download your perfect resume in minutes." />
        <meta name="twitter:image" content="https://www.professionalresumefree.com/twitter-image.png" />
        <meta name="twitter:image:alt" content="Professional Resume Builder Screenshot" />
        
        {/* ========== ADDITIONAL SEO ========== */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="publisher" content="Professional Resume Free" />
        <meta name="language" content="English" />
        <meta name="rating" content="safe for kids" />
        <meta name="revisit-after" content="7 days" />
        
        {/* ========== STRUCTURED DATA (JSON-LD) ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Professional Resume Free",
              "description": "Free online resume builder for creating professional resumes",
              "url": "https://www.professionalresumefree.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "author": {
                "@type": "Organization",
                "name": "Professional Resume Free"
              }
            })
          }}
        />
        
        {/* ========== PRELOAD CRITICAL RESOURCES ========== */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://gc.zgo.at" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://gc.zgo.at" />
      </Head>

      {/* ========== GOOGLE ANALYTICS ========== */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              send_page_view: true
            });
          `,
        }}
      />

      {/* ========== GOATCOUNTER ANALYTICS ========== */}
      <Script
        data-goatcounter="https://professionalresumefree.goatcounter.com/count"
        src="https://gc.zgo.at/count.js"
        strategy="afterInteractive"
        async
      />

      {/* ========== BROWSERCONFIG.XML FOR MICROSOFT APPS ========== */}
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />

      {/* ========== MAIN APP CONTENT ========== */}
      <Navbar />
      <main className="app-wrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}