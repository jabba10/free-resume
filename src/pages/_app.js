// src/pages/_app.js
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import * as gtag from "../../lib/gtag";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./globals.css";

/**
 * Client-side tracker for GoatCounter pageviews
 * Optimized for SSG (Static Site Generation)
 */
function GoatCounterTracker() {
  const router = useRouter();

  useEffect(() => {
    // Wait for GoatCounter to be available, then track initial page
    const initGoatCounter = () => {
      if (typeof window !== 'undefined' && window.goatcounter) {
        window.goatcounter.count({
          path: location.pathname + location.search,
          title: document.title,
          event: false,
        });
      }
    };

    // Check if GoatCounter is already loaded
    if (window.goatcounter) {
      initGoatCounter();
    } else {
      // If not loaded yet, wait for it
      window.addEventListener('load', () => {
        setTimeout(initGoatCounter, 100); // Small delay to ensure GoatCounter is initialized
      });
    }

    // Track route changes for client-side navigation
    const handleRouteChange = (url) => {
      // Google Analytics
      gtag.pageview(url);

      // GoatCounter - track pageview on route change
      if (typeof window !== 'undefined' && window.goatcounter) {
        window.goatcounter.count({
          path: url,
          title: document.title,
          event: false,
        });
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
}

/**
 * Main App component - Optimized for SSG
 */
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const canonicalUrl = `https://professionalresumefree.com${router.asPath}`;

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
        <meta property="og:url" content="https://professionalresumefree.com" />
        <meta property="og:title" content="Professional Resume Free - Build Your Perfect Resume" />
        <meta property="og:description" content="Create professional resumes for free. Build, customize, and download your perfect resume in minutes with our easy-to-use resume builder." />
        <meta property="og:image" content="https://professionalresumefree.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Resume Builder Interface" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        
        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ResumeFree" />
        <meta name="twitter:creator" content="@ResumeFree" />
        <meta name="twitter:url" content="https://professionalresumefree.com" />
        <meta name="twitter:title" content="Professional Resume Free - Build Your Perfect Resume" />
        <meta name="twitter:description" content="Create professional resumes for free. Build, customize, and download your perfect resume in minutes." />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-image.png" />
        <meta name="twitter:image:alt" content="Professional Resume Builder Screenshot" />
        
        {/* ========== ADDITIONAL SEO ========== */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="publisher" content="Professional Resume Free" />
        <meta name="language" content="English" />
        
        {/* ========== STRUCTURED DATA (JSON-LD) ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Professional Resume Free",
              description: "Free online resume builder for creating professional resumes",
              url: "https://professionalresumefree.com",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Any",
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
              aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "1250" },
              author: { "@type": "Organization", name: "Professional Resume Free" }
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
      {gtag.GA_TRACKING_ID && (
        <>
          <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
          <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gtag.GA_TRACKING_ID}',{page_path:window.location.pathname,anonymize_ip:true,send_page_view:false});`
          }} />
        </>
      )}

      {/* ========== GOATCOUNTER ANALYTICS - SSG OPTIMIZED ========== */}
      <Script 
        data-goatcounter="https://professionalresumefree.goatcounter.com/count"
        src="https://gc.zgo.at/count.js"
        strategy="lazyOnload"
      />

      {/* ========== GOATCOUNTER TRACKER COMPONENT ========== */}
      <GoatCounterTracker />

      {/* ========== MAIN APP CONTENT ========== */}
      <Navbar />
      <main className="app-wrapper">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;