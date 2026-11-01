// src/pages/_app.js
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import * as gtag from "../../lib/gtag";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./globals.css";

// Import AI Schemas
import globalSchema from "../../public/ai/global-schema.json";
import faqsMap from "../../public/ai/faqs-map.json";

/**
 * Client-side tracker for GoatCounter pageviews
 */
function GoatCounterTracker() {
  const router = useRouter();

  useEffect(() => {
    const initGoatCounter = () => {
      if (typeof window !== 'undefined' && window.goatcounter) {
        window.goatcounter.count({
          path: location.pathname + location.search,
          title: document.title,
          event: false,
        });
      }
    };

    if (window.goatcounter) {
      initGoatCounter();
    } else {
      window.addEventListener('load', () => {
        setTimeout(initGoatCounter, 100);
      });
    }

    const handleRouteChange = (url) => {
      gtag.pageview(url);
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

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Get the FAQs for the current page route
  const currentPath = router.pathname === '/' ? '/' : router.pathname;
  const pageFaqs = faqsMap[currentPath] || [];

  // Build FAQ schema ONLY if this page has FAQs
  const faqSchema = pageFaqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": pageFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  } : null;

  return (
    <>
      <Head>
        {/* ========== ESSENTIAL META TAGS (Non-SEO, Safe Globals) ========== */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* ========== WEB APP MANIFEST (PWA) ========== */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="application-name" content="Professional Resume Free" />
        <meta name="apple-mobile-web-app-title" content="Resume Builder" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* ========== THEME COLORS (Safe Globals) ========== */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* 
          ✅ NO CANONICAL HERE 
          Each page has its own hardcoded canonical tag.
          Adding one here would create duplicates.
        */}
        
        {/* 
          ✅ NO TITLE OR DESCRIPTION HERE 
          Each page has its own hardcoded title and meta description.
          Adding them here would cause "More than one title/description tag" errors.
        */}
        
        {/* ========== OPEN GRAPH & TWITTER (Safe Globals - Overridden Per Page) ========== */}
        {/* These use generic defaults; individual pages should override with page-specific OG/Twitter tags */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Professional Resume Free" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* ========== ADDITIONAL SEO (Safe Globals) ========== */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Professional Resume Free" />
        <meta name="publisher" content="Professional Resume Free" />
        <meta name="language" content="English" />
        
        {/* ========== 🚨 AI & STRUCTURED DATA (JSON-LD) 🚨 ========== */}
        
        {/* 1. Global Identity Schema (Organization, WebSite, SoftwareApp) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
        
        {/* 2. Per-Page FAQ Schema (Injected only if FAQs exist for this route) */}
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}
        
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

      {/* 
        ⚠️ H1 DUPLICATE WARNING ⚠️
        Your Navbar component likely contains an <h1> tag (e.g., around the logo).
        Since EVERY page also has its own hardcoded <h1>, this creates 2 H1s per page.
        
        FIX: Open ../Components/Navbar.js and change the logo wrapper from:
          <h1><Logo /></h1>
        to:
          <div><Logo /></div>   OR   <span><Logo /></span>
        
        Only the main page content should have an <h1>.
      */}
      <Navbar />
      
      <main className="app-wrapper">
        <Component {...pageProps} />
      </main>
      
      <Footer />

      {/* ========== VERCEL ANALYTICS ========== */}
      <Analytics />
    </>
  );
}

export default MyApp;