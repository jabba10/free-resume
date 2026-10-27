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
  const canonicalUrl = `https://professionalresumefree.com${router.asPath}`;

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
        
        {/* ========== OPEN GRAPH (SOCIAL MEDIA) ========== */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
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
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:image" content="https://professionalresumefree.com/twitter-image.png" />
        <meta name="twitter:image:alt" content="Professional Resume Builder Screenshot" />
        
        {/* ========== ADDITIONAL SEO ========== */}
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

      {/* ========== MAIN APP CONTENT ========== */}
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